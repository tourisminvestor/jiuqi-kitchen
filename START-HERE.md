# 玖柒廚房完整交接包

本包包含現有版本源碼及完整網站素材，另附已建置 Cloudflare Worker 成品，方便接手開發者部署相同畫面及功能。未改動原有網站業務程式碼。

## 內容
- `source/`：完整應用源碼、package-lock.json、React UI、API、30 道食譜資料、資料庫 schema／migration、設計文件、測試。
- `source/public/assets/`：全部網站圖片、Logo、產品圖、菜式圖、男女廚師造型、字體及字體授權。
- `source/dist/`：現有版本已建置成品，包含 Worker 及瀏覽器 JS/CSS／素材。
- `original-reference-files/`：原始菜譜 Excel、產品／Logo／寬粉實拍及問題截圖，保留原檔名。
- `wrangler.handoff.json`：獨立 Cloudflare 帳戶部署範本。
- `SHA256SUMS.txt`：所有交付檔案校驗值。

## 部署前必讀
這不是純靜態網站。現有 API 直接使用 Cloudflare Workers 的 D1（綁定名 `DB`）與 R2（`BUCKET`）。把源碼直接上傳 Render／Vercel 並執行一般 Next.js 指令，不能完整還原後端。

要盡量原封不動還原，使用自己的 Cloudflare Workers + D1 + R2 帳戶部署下面的已建置成品。新站會從空白會員及共創資料開始；原有食譜、商品關聯、品牌素材均在包內。

本包不包含原站線上會員、密碼雜湊、收藏、共創帖子資料或用戶上載的 R2 圖片，亦不包含 API 金鑰、登入 cookie 或平台憑證。保留原站資料需要原站管理者另行授權匯出 D1 SQL 和 R2 物件並匯入新服務；應保留會員 ID、帖子 image_key／R2 key 的對應，切換後要求會員重新登入。不要將這些私人備份放在公開 Git 倉庫。

## 路徑 A：使用已建置成品部署（最少改動）
需安裝 Node.js 22.13 或以上、npm，並有可使用 Workers、D1、R2 的 Cloudflare 帳戶。所有指令在本文件所在目錄執行。

```sh
npx wrangler@4.92.0 login
npx wrangler@4.92.0 d1 create jiuqi-kitchen-db
npx wrangler@4.92.0 r2 bucket create jiuqi-kitchen-uploads
```

將建立 D1 時返回的 database_id 填入 `wrangler.handoff.json`，如修改了資源名稱，也要同步修改 database_name／bucket_name。不要沿用 source/dist/server/wrangler.json 裡的本機佔位資料庫 ID。

```sh
npx wrangler@4.92.0 d1 migrations apply DB --remote --config wrangler.handoff.json
npx wrangler@4.92.0 deploy --config wrangler.handoff.json
```

使用部署返回的 HTTPS 網址。自有網域在 Cloudflare Worker 設定中綁定；公開站點不要另外加需要訪客登入的 Access 保護。圖像優化路由使用 IMAGES 綁定；此範本亦已包含。Cloudflare 帳戶需開通相應資源，是否收費按接手者帳戶當時方案確認。

## 路徑 B：先改源碼再建置
在 `source` 內：
```sh
npm ci
npx vinext build
node --test tests/*.test.mjs
```
再回到本文件目錄，使用路徑 A 的部署指令。source 內既有 npm build 包含原 Sites 環境包裝及 GNU timeout；跨平台開發建議直接執行上述 vinext build。保持 package-lock.json，勿隨意升級套件。建置後再次使用交接包根目錄的 wrangler.handoff.json，以免誤用產物內的開發資料庫佔位值。

## Render／Vercel
`source/deployment/render-gateway` 和 `source/deployment/vercel-gateway` 是先前準備的公開轉發入口，會繼續依賴原 chatgpt.site 及其資料服務，並非獨立移植版。它們不保證消除上游 Cloudflare 封鎖。

如一定要整個網站獨立運行於 Render／Vercel，接手者需要將 `lib/storage.ts`、`db/index.ts`、`lib/verify-provider.ts` 的 Cloudflare 環境依賴及資料庫／物件儲存存取改接合適服務，再轉換建置與啟動設定；這項移植未在本交接包中完成。

## 手機短訊與預留功能
密碼登記可在新 D1 建立後使用。Twilio 短訊登記需要接手者自行開通 Verify，然後執行：
```sh
npx wrangler@4.92.0 secret put TWILIO_ACCOUNT_SID --config wrangler.handoff.json
npx wrangler@4.92.0 secret put TWILIO_AUTH_TOKEN --config wrangler.handoff.json
npx wrangler@4.92.0 secret put TWILIO_VERIFY_SERVICE_SID --config wrangler.handoff.json
```
未配置時短訊不會發送；商城、客服、WhatsApp 群按鈕保持「敬請期待」。目前未提供自助重設密碼。廚師人像功能為瀏覽器裁切合成，並非伺服器 AI 換臉服務。

## 上線驗收
1. 手機及電腦匿名開首頁；30 道食譜與配圖、產品分類、創新菜式正常。
2. 用新測試帳戶完成登記／登入、顯示稱呼、收藏、退出再登入。
3. 訪客共創入口先登記，成功返回工作室；選版式、造型、下載圖片、發布後重新整理仍可看到。
4. 跨裝置登入同一帳戶檢查收藏；確認照片 API 返回圖片。
5. 最後測試自有網域、HTTPS、註冊同源檢查、手機拍照及儲存圖片。

本包包含部署範本；尚未在接手者 Cloudflare 帳戶實際部署驗收，不能將範本等同已上線網站。既有原始 README 保留了歷史部署狀態，請以本文件作為本次交接入口。
