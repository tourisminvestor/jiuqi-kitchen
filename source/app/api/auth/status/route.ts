import {smsConfigured} from '@/lib/verify-provider';
export async function GET(){return Response.json({smsEnabled:smsConfigured()},{headers:{'Cache-Control':'no-store'}})}
