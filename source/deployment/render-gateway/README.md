# 玖柒廚房 Render 公開入口

使用 Node.js Web Service。部署內容係本目錄四個程式／設定檔，服務由 Render 公開網址接收頁面、資產及會員 API 請求，原有資料仍留喺現有後端。唔需要本服務嘅本機檔案系統保存會員或相片，因此暫時毋須購買磁碟。

如由現有專案儲存庫部署，Root Directory 設為 `deployment/render-gateway`。如只將本目錄放入獨立儲存庫，刪除 render.yaml 嘅 rootDir 設定。

設定：Node.js 22、build command `npm run check`、start command `npm start`、health check `/healthz`。服務會監聽 Render 提供嘅 PORT，同埋 0.0.0.0。

`render.yaml` 預設 free 只供先驗證，免費服務閒置時可能休眠，首次打開會較慢。正式使用可再決定是否升級。會員及發布同上游共用按 IP 限流；如註冊量增加，需要接入可信訪客限流或獨立遷移後端。

部署後需檢查：匿名首頁可見玖柒廚房、相片及字體可載入、密碼登記／登入、收藏、發布同下載。健康檢查只表示本服務已啟動，唔等於上游可用。未完成上述檢查前唔應宣稱手機封鎖問題已解決。

原網站： https://jiuqi-kitchen.peachy-berry-4755.chatgpt.site
