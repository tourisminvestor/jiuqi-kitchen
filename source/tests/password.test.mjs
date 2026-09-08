import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile,readdir} from 'node:fs/promises';
import {DatabaseSync} from 'node:sqlite';
import {normalizeUsername,validPassword,hashPassword,checkPassword} from '../lib/password.ts';
test('password registration rejects malformed identifiers, short and byte-truncated passwords',()=>{
 assert.equal(normalizeUsername(' Chef.Victor '),'chef.victor');
 for(const value of ['abc','<script>','spaces here','a'.repeat(33)])assert.equal(normalizeUsername(value),null);
 assert.equal(validPassword('short'),false);assert.equal(validPassword('密'.repeat(25)),false);assert.equal(validPassword('my-secret-dinner-2026'),true);
});
test('passwords use distinct salted hashes and only verify matching credentials',async()=>{
 const password='my-secret-dinner-2026',a=await hashPassword(password),b=await hashPassword(password);
 assert.notEqual(a,password);assert.notEqual(a,b);assert.ok(a.startsWith('$2b$12$'));assert.equal(await checkPassword(password,a),true);assert.equal(await checkPassword('wrong-password',a),false);
});
test('password account migration preserves existing data and stores sessions by hash',async()=>{
 const db=new DatabaseSync(':memory:');db.exec('PRAGMA foreign_keys=ON');
 const dir=new URL('../drizzle/',import.meta.url);const files=(await readdir(dir)).filter(f=>f.endsWith('.sql')).sort();
 for(const file of files){if(file.startsWith('0003')){db.prepare('INSERT INTO members VALUES (?,?,?,?,?)').run('phone-member','+85291234567','舊會員',1,1);db.prepare('INSERT INTO favorites VALUES (?,?)').run('phone-member','r:11')}db.exec(await readFile(new URL(file,dir),'utf8'))}
 assert.equal(db.prepare('SELECT display_name FROM members').get().display_name,'舊會員');assert.equal(db.prepare('SELECT item FROM favorites').get().item,'r:11');
 db.prepare('INSERT INTO password_accounts VALUES (?,?,?,?,?)').run('pw-member','victor','維多','hash',1);
 assert.throws(()=>db.prepare('INSERT INTO password_accounts VALUES (?,?,?,?,?)').run('duplicate','victor','其他人','hash',1));
 db.prepare('INSERT INTO password_sessions VALUES (?,?,?)').run('token-digest','pw-member',2000);
 const q=db.prepare('SELECT a.display_name FROM password_accounts a JOIN password_sessions s ON a.id=s.account_id WHERE s.token_hash=? AND s.expires_at>?');assert.equal(q.get('token-digest',1000).display_name,'維多');assert.equal(q.get('wrong-token',1000),undefined);assert.equal(q.get('token-digest',3000),undefined);db.close();
});
