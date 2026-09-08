import assert from 'node:assert/strict';
import {readFile,access,readdir} from 'node:fs/promises';
import test from 'node:test';
import {DatabaseSync} from 'node:sqlite';
import {transpileModule,ModuleKind} from 'typescript';
const root=new URL('../',import.meta.url);
const read=p=>readFile(new URL(p,root),'utf8');
const phoneSource=transpileModule(await read('lib/phone.ts'),{compilerOptions:{module:ModuleKind.ESNext}}).outputText;
const {normalizePhone}=await import('data:text/javascript;base64,'+Buffer.from(phoneSource).toString('base64'));
test('phone normalization preserves HK numbers and handles international trunk prefixes',()=>{
 assert.equal(normalizePhone('852','9123 4567'),'+85291234567');
 assert.equal(normalizePhone('44','07911 123456'),'+447911123456');
 assert.equal(normalizePhone('886','0912345678'),'+886912345678');
 for(const [country,phone] of [['852','123'],['000','91234567'],['852','+85291234567'],['852','9123evil4567']])assert.equal(normalizePhone(country,phone),null);
});
test('innovation content and all six model apertures have complete assets',async()=>{
 const dishes=JSON.parse(await read('app/innovation.json'));assert.deepEqual(dishes.map(r=>r.id),[28,29,30]);
 for(const dish of dishes){assert.ok(dish.steps.length>=4);assert.ok(dish.ingredients.length>30);assert.ok(dish.time&&dish.servings);await access(new URL('public'+dish.image,root));}
 const layout=JSON.parse(await read('public/assets/chef-layout.json'));
 for(const gender of ['male','female'])for(const color of ['white','black','yellow']){const key=gender+'-'+color;await access(new URL('public/assets/chef-'+key+'.png',root));assert.ok(layout[key].polygon.length>8);assert.ok(layout[key].w>0&&layout[key].h>0);}
});
test('database migration keeps existing posts and rejects expired, consumed or exhausted phone challenges',async()=>{
 const db=new DatabaseSync(':memory:');db.exec('PRAGMA foreign_keys=ON');
 const files=(await readdir(new URL('drizzle/',root))).filter(p=>p.endsWith('.sql')).sort();
 for(const file of files)db.exec(await read('drizzle/'+file));
 const insert=db.prepare('INSERT INTO phone_challenges(id,phone,display_name,attempts,consumed,expires_at) VALUES (?,?,?,?,?,?)');
 insert.run('active','+85291234567','測試',0,0,2000);insert.run('expired','+85291234567','測試',0,0,500);insert.run('used','+85291234567','測試',0,1,2000);
 const sql=(await read('app/api/auth/verify-code/route.ts')).match(/prepare\('(UPDATE phone_challenges SET attempts[^']+)'\)/)[1];
 const attempt=db.prepare(sql);
 for(let i=0;i<5;i++)assert.equal(attempt.get('active',1000).phone,'+85291234567');
 for(const id of ['active','expired','used','missing'])assert.equal(attempt.get(id,1000),undefined);
 db.close();
});
