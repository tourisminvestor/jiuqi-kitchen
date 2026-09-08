import {cookies} from 'next/headers';
import {database,sameOrigin} from '@/lib/storage';
import {SESSION_COOKIE,sha256} from '@/lib/member-auth';
export async function POST(req:Request){if(!sameOrigin(req))return new Response(null,{status:403});try{const token=(await cookies()).get(SESSION_COOKIE)?.value;if(token)await database().batch([database().prepare('DELETE FROM member_sessions WHERE token_hash = ?').bind(await sha256(token)),database().prepare('DELETE FROM password_sessions WHERE token_hash = ?').bind(await sha256(token))]);return Response.json({ok:true},{headers:{'Set-Cookie':`${SESSION_COOKIE}=; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=0`,'Cache-Control':'no-store'}})}catch{return Response.json({error:'暫時登出唔到，請再試一次。'},{status:503})}}
