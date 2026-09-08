import {cookies} from 'next/headers';
import {getChatGPTUser} from '@/app/chatgpt-auth';
import {database} from './storage';
export const SESSION_COOKIE='__Host-jiuqi_session';
export type MemberIdentity={id:string;name:string;phone:string|null;source:'phone'|'platform'|'password'};
export async function sha256(value:string){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value))),v=>v.toString(16).padStart(2,'0')).join('')}
export async function getMember():Promise<MemberIdentity|null>{
 const token=(await cookies()).get(SESSION_COOKIE)?.value;
 if(token&&/^[a-f0-9]{64}$/.test(token)){const member=await database().prepare('SELECT m.id,m.display_name,m.phone FROM members m JOIN member_sessions s ON m.id = s.member_id WHERE s.token_hash = ? AND s.expires_at > ?').bind(await sha256(token),Date.now()).first<{id:string;display_name:string;phone:string}>();if(member)return {id:member.id,name:member.display_name,phone:member.phone,source:'phone'};const account=await database().prepare('SELECT a.id,a.display_name FROM password_accounts a JOIN password_sessions s ON a.id = s.account_id WHERE s.token_hash = ? AND s.expires_at > ?').bind(await sha256(token),Date.now()).first<{id:string;display_name:string}>();if(account)return {id:account.id,name:account.display_name,phone:null,source:'password'};}
 const platform=await getChatGPTUser();return platform?{id:platform.id,name:platform.fullName||'玖柒主廚',phone:null,source:'platform'}:null;
}
export function publicMember(member:MemberIdentity|null){return member?{name:member.name,phone:member.phone?member.phone.slice(0,-4).replace(/\d(?=\d{2})/g,'•')+member.phone.slice(-4):null,source:member.source}:null}
