import {hash,compare,truncates} from 'bcryptjs';
export function normalizeUsername(value:unknown){if(typeof value!=='string')return null;const name=value.trim().toLowerCase();return /^[a-z0-9][a-z0-9_.-]{3,31}$/.test(name)?name:null}
export function validPassword(value:unknown):value is string{return typeof value==='string'&&value.length>=10&&value.length<=64&&!truncates(value)}
export const hashPassword=(password:string)=>hash(password,12);
export const checkPassword=(password:string,stored:string)=>compare(password,stored);
