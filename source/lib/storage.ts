import { env } from 'cloudflare:workers';
export const database = () => env.DB;
export const bucket = () => (env as typeof env & {BUCKET: R2Bucket}).BUCKET;
export function sameOrigin(req: Request) { const origin=req.headers.get('origin'); if(!origin) return true; try { return new URL(origin).host===new URL(req.url).host; } catch { return false; } }
