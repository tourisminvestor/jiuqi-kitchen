import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import test from 'node:test';
const recipes=JSON.parse(await readFile(new URL('../app/recipes.json',import.meta.url),'utf8'));
test('all 26 source recipes have ingredients, ordered instructions and real image assets',async()=>{
 assert.equal(recipes.length,26);assert.equal(new Set(recipes.map(r=>r.id)).size,26);
 for(const r of recipes){assert.ok(r.ingredients.length);assert.ok(r.seasoning.length);assert.ok(r.steps.length>=3);assert.ok(r.products.length);await access(new URL('../public'+r.image,import.meta.url));}
});
test('shared-product recipes remain discoverable under every source product',()=>{
 for(const [product,count] of Object.entries({vermicelli:8,crystal:5,wide:7,nori:10}))assert.equal(recipes.filter(r=>r.products.includes(product)).length,count);
 assert.deepEqual(recipes.find(r=>r.id===6).products,['nori','crystal']);
});
test('IG blogger feature dish is complete, moved out of curated list and has real assets',async()=>{
 const ig=JSON.parse(await readFile(new URL('../app/ig.json',import.meta.url),'utf8'));
 assert.deepEqual(ig.map(r=>r.id),[14]);
 assert.equal(ig[0].name,'蒜蓉粉絲蒸貴妃蚌（花甲）');
 assert.ok(ig[0].story&&ig[0].time&&ig[0].servings);
 assert.ok(ig[0].ingredients.length);assert.ok(ig[0].seasoning.length);assert.ok(ig[0].steps.length>=3);
 await access(new URL('../public'+ig[0].image,import.meta.url));
 assert.ok(!recipes.some(r=>r.id===14),'dish 14 must no longer appear in the curated list');
});
