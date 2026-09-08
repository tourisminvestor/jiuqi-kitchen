import assert from 'node:assert/strict';
import test from 'node:test';
import {keyChefPixels} from '../lib/chef-image.ts';
import {cardLayouts,cardFrames,cardTypes,paintCard} from '../lib/card-design.ts';
test('chef compositing removes the generated green and preserves black fabric and skin',()=>{
 const pixels=new Uint8ClampedArray([6,250,8,255,32,33,32,255,220,158,125,255]);keyChefPixels(pixels);
 assert.equal(pixels[3],0);assert.deepEqual([...pixels.slice(4)],[32,33,32,255,220,158,125,255]);
});
test('all DIY layout, frame and lettering combinations preserve canvas bounds',()=>{
 const rectangles=[],text=[];const noop=()=>{};const ctx={fillRect:(...v)=>rectangles.push(v),strokeRect:noop,save:noop,restore:noop,translate:noop,rotate:noop,transform:noop,drawImage:noop,measureText:s=>({width:Array.from(s).length*95}),fillText:(...v)=>text.push(v)};
 for(const layout of cardLayouts)for(const frame of cardFrames)for(const type of cardTypes){const p=paintCard(ctx,{width:1600,height:1200},{layout:layout.id,frame:frame.id,type:type.id,accent:'#e88232',filter:'natural',title:'我親手煮嘅番茄芝士海鮮寬粉',photoX:50,photoY:50,textScale:100});assert.ok(p.tx>=0&&p.tx+p.tw<=1080);assert.ok(p.ty>=0&&p.ty+p.th<=1350)}
 assert.ok(text.length>27);for(const [x,y,w,h] of rectangles){assert.ok(x>=0&&y>=0);assert.ok(x+w<=1080&&y+h<=1350)}
});
