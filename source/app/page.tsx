import Kitchen from './kitchen';
import {getMember,publicMember} from '@/lib/member-auth';
export const dynamic='force-dynamic';
export default async function Page(){const user=await getMember();return <Kitchen user={publicMember(user)}/>;}
