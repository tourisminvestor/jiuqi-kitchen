import {createServer} from 'node:http';
import handler from './gateway.mjs';
const port=Number(process.env.PORT||10000);
const server=createServer(async(req,res)=>{
 if(req.url==='/healthz'&&req.method==='GET'){res.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end('{"status":"ok"}');return}
 await handler(req,res);
});
server.requestTimeout=65000;
server.headersTimeout=66000;
server.listen(port,'0.0.0.0',()=>console.log('Jiuqi Kitchen gateway listening'));
process.on('SIGTERM',()=>{server.close(()=>process.exit(0));setTimeout(()=>process.exit(1),10000).unref()});
