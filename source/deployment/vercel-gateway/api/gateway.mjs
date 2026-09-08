import {Readable} from 'node:stream';
import {pipeline} from 'node:stream/promises';
const UPSTREAM='https://jiuqi-kitchen.peachy-berry-4755.chatgpt.site';
const SAFE_REQUEST_HEADERS=['accept','accept-language','content-type','cookie','range','if-none-match','if-modified-since','rsc','next-router-state-tree','next-router-prefetch','next-url'];
export default async function handler(req,res){
 try{
  const host=req.headers.host;
  if(!host||!/^[-a-z0-9.]+(?::\d+)?$/i.test(host)){res.statusCode=400;return res.end('Invalid host')}
  const incoming=new URL(req.url,'https://'+host),route=incoming.searchParams.get('__route');
  incoming.searchParams.delete('__route');
  const path=route===null?incoming.pathname:'/'+route.replace(/^\/+/, '');
  if(path.startsWith('/signin-with-chatgpt')||path.startsWith('/signout-with-chatgpt')||path==='/callback'){res.statusCode=302;res.setHeader('Location','/');return res.end()}
  if(!['GET','HEAD','POST','OPTIONS'].includes(req.method)){res.statusCode=405;return res.end()}
  const origin=req.headers.origin;
  if(!['GET','HEAD','OPTIONS'].includes(req.method)&&origin!=='https://'+host){res.statusCode=403;return res.end('請由玖柒廚房頁面提交。')}
  if(req.method==='OPTIONS'){res.statusCode=204;return res.end()}
  const url=new URL(UPSTREAM);url.pathname=path;url.search=incoming.searchParams.toString();
  const headers=new Headers();for(const name of SAFE_REQUEST_HEADERS){const value=req.headers[name];if(typeof value==='string')headers.set(name,value)}
  // Only app cookies are forwarded; platform identity headers and browser IP assertions are not trusted.
  const cookie=headers.get('cookie');if(cookie)headers.set('cookie',cookie.split(';').map(v=>v.trim()).filter(v=>v.startsWith('__Host-jiuqi_session=')).join('; '));
  if(origin)headers.set('Origin',UPSTREAM);
  headers.set('User-Agent','JiuqiKitchen-PublicGateway/1.0');
  let body;
  if(req.method==='POST'){
   if(Number(req.headers['content-length'])>8000000){res.statusCode=413;return res.end('相片太大，請縮細後再試。')}
   if(req.body!==undefined){body=Buffer.isBuffer(req.body)?req.body:Buffer.from(typeof req.body==='string'?req.body:JSON.stringify(req.body))}
   else{const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>8000000){res.statusCode=413;return res.end('相片太大，請縮細後再試。')}chunks.push(Buffer.from(chunk))}body=Buffer.concat(chunks)}
  }
  const response=await fetch(url,{method:req.method,headers,body,redirect:'manual',signal:AbortSignal.timeout(55000)});
  res.statusCode=response.status;
  const allowed=['content-type','cache-control','etag','last-modified','content-range','accept-ranges','vary','retry-after','content-disposition'];
  for(const name of allowed){const value=response.headers.get(name);if(value)res.setHeader(name,value)}
  if(!/\.(?:js|css|png|jpe?g|webp|woff2|ico)$/.test(path))res.setHeader('Cache-Control','private, no-store');
  const cookies=response.headers.getSetCookie();if(cookies.length)res.setHeader('Set-Cookie',cookies);
  const location=response.headers.get('location');if(location){const target=new URL(location,url);res.setHeader('Location',target.origin===UPSTREAM?target.pathname+target.search+target.hash:target.href)}
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
  if(!response.body||req.method==='HEAD')return res.end();
  await pipeline(Readable.fromWeb(response.body),res);
 }catch(error){console.error('Gateway request failed',error instanceof Error?error.name:'unknown');if(!res.headersSent){res.statusCode=502;res.setHeader('Content-Type','text/plain; charset=utf-8');res.setHeader('Cache-Control','no-store');res.end('暫時連接唔到玖柒廚房，請稍後再試。')}else res.end()}
}
