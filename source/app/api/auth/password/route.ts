import {database,sameOrigin} from '@/lib/storage';
import {normalizeUsername,validPassword,hashPassword,checkPassword} from '@/lib/password';
import {takeLimit} from '@/lib/verify-provider';
import {sha256,SESSION_COOKIE} from '@/lib/member-auth';
export async function POST(req:Request){
 try{
  if(!sameOrigin(req))return new Response(null,{status:403});
  const raw=await req.text();if(raw.length>3000)return new Response(null,{status:413});
  const body=JSON.parse(raw) as {mode:unknown;username:unknown;password:unknown;name:unknown};
  const username=normalizeUsername(body.username),password=body.password,name=typeof body.name==='string'?body.name.trim():'';
  if(!['register','login'].includes(String(body.mode))||!username||!validPassword(password)||(body.mode==='register'&&(!name||name.length>24)))return Response.json({error:'請檢查登入名稱及密碼格式。密碼最少 10 個字元，最多 64 個字元（中文最多 24 個）。'},{status:400});
  const ip=req.headers.get('cf-connecting-ip')||'unknown';
  if(!await takeLimit('password-ip:'+ip,600000,20)||!await takeLimit('password-user:'+username,600000,10))return Response.json({error:'嘗試次數太多，請 10 分鐘後再試。'},{status:429});
  let account=await database().prepare('SELECT id,display_name,password_hash FROM password_accounts WHERE username = ?').bind(username).first<{id:string;display_name:string;password_hash:string}>();
  if(body.mode==='register'){
   if(account)return Response.json({error:'呢個登入名稱已有人使用，請換一個或登入。'},{status:409});
   if(!await takeLimit('register-ip:'+ip,3600000,5))return Response.json({error:'登記要求太密，請稍後再試。'},{status:429});
   const passwordHash=await hashPassword(password),id=crypto.randomUUID();
   account=await database().prepare('INSERT INTO password_accounts(id,username,display_name,password_hash,created_at) VALUES (?,?,?,?,?) ON CONFLICT(username) DO NOTHING RETURNING id,display_name,password_hash').bind(id,username,name,passwordHash,Date.now()).first();
   if(!account)return Response.json({error:'呢個登入名稱已有人使用，請換一個。'},{status:409});
  }else{
   // Use the same expensive password check even when the account does not exist.
   const fallback='$2b$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW';
   const matches=await checkPassword(password,account?.password_hash||fallback);
   if(!account||!matches)return Response.json({error:'登入名稱或密碼唔啱，請再檢查一次。'},{status:401});
  }
  const token=Array.from(crypto.getRandomValues(new Uint8Array(32)),n=>n.toString(16).padStart(2,'0')).join('');
  await database().batch([database().prepare('DELETE FROM password_sessions WHERE expires_at < ?').bind(Date.now()),database().prepare('INSERT INTO password_sessions(token_hash,account_id,expires_at) VALUES (?,?,?)').bind(await sha256(token),account.id,Date.now()+30*86400000)]);
  return Response.json({user:{name:account.display_name,phone:null,source:'password'}},{headers:{'Set-Cookie':`${SESSION_COOKIE}=${token}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=2592000`,'Cache-Control':'no-store'}});
 }catch(e){console.error('Password authentication failed',e instanceof Error?e.name:'unknown');return Response.json({error:'暫時未能登入，請稍後再試。'},{status:503})}
}
