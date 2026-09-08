export const cardLayouts=[{id:'editorial',name:'留白畫刊'},{id:'cover',name:'大字封面'},{id:'duo',name:'雙欄主廚'}];
export const cardFrames=[{id:'line',name:'極簡細線'},{id:'instant',name:'即影即有'},{id:'film',name:'菲林留影'}];
export const cardTypes=[{id:'serif',name:'張力明體'},{id:'bold',name:'俐落黑體'},{id:'slant',name:'斜字海報'}];
export type CardDesign={layout:string;frame:string;type:string;accent:string;filter:string;title:string;photoX:number;photoY:number;textScale:number};
function cover(ctx:CanvasRenderingContext2D,im:HTMLImageElement,x:number,y:number,w:number,h:number,px:number,py:number){const scale=Math.max(w/im.width,h/im.height),sw=w/scale,sh=h/scale;ctx.drawImage(im,(im.width-sw)*px/100,(im.height-sh)*py/100,sw,sh,x,y,w,h)}
function titleBlock(ctx:CanvasRenderingContext2D,text:string,x:number,y:number,width:number,maxHeight:number,d:CardDesign,color:string){
 const font=d.type==='bold'?'"Jiuqi Display",sans-serif':'"Jiuqi Serif",serif';let size=(d.layout==='duo'?100:120)*d.textScale/100;let lines:string[]=[];
 const wrap=()=>{ctx.font=`900 ${size}px ${font}`;lines=[];let line='';for(const char of Array.from(text)){if(line&&ctx.measureText(line+char).width>width){lines.push(line);line=''}line+=char}if(line)lines.push(line)};wrap();while((lines.length*size*1.2>maxHeight||size>160)&&size>30){size-=2;wrap()}
 ctx.save();ctx.translate(x,y);if(d.type==='slant')ctx.transform(1,-.035,-.10,1,0,0);ctx.fillStyle=color;ctx.textBaseline='top';ctx.font=`900 ${size}px ${font}`;lines.forEach((line,i)=>ctx.fillText(line,0,i*size*1.2,width));ctx.restore();
}
export function paintCard(ctx:CanvasRenderingContext2D,food:HTMLImageElement,d:CardDesign){
 const dark=d.frame==='film',paper=dark?'#18271e':'#fffef9',ink=dark?'#fffef5':'#163c28';ctx.fillStyle=paper;ctx.fillRect(0,0,1080,1350);
 const image=d.layout==='cover'?{x:48,y:400,w:984,h:892}:d.layout==='duo'?{x:48,y:360,w:690,h:930}:{x:48,y:118,w:984,h:870};
 if(d.frame==='instant'){ctx.save();ctx.shadowColor='#172b2520';ctx.shadowBlur=24;ctx.shadowOffsetY=10;ctx.fillStyle='#fff';ctx.fillRect(image.x-12,image.y-12,image.w+24,image.h+42);ctx.restore()}
 ctx.save();ctx.filter=d.filter==='film'?'sepia(.2) saturate(.88) contrast(1.08)':d.filter==='fresh'?'saturate(1.16) brightness(1.04)':'saturate(1.04) contrast(1.025)';cover(ctx,food,image.x,image.y,image.w,image.h,d.photoX,d.photoY);ctx.restore();
 ctx.fillStyle=ink;ctx.font='500 24px sans-serif';ctx.fillText('玖柒廚房',52,70);ctx.textAlign='right';ctx.font='500 20px sans-serif';ctx.fillText('我嘅拿手好味',1027,70);ctx.textAlign='left';
 if(d.layout==='editorial'){ctx.fillStyle=d.accent;ctx.fillRect(50,1020,65,7);titleBlock(ctx,d.title,50,1060,975,207,d,ink)}
 else if(d.layout==='cover'){titleBlock(ctx,d.title,53,117,957,248,d,ink);ctx.fillStyle=d.accent;ctx.fillRect(52,374,160,8)}
 else{titleBlock(ctx,d.title,50,120,980,210,d,ink);ctx.fillStyle=d.accent;ctx.fillRect(770,363,260,6);ctx.save();ctx.translate(960,405);ctx.rotate(Math.PI/2);ctx.font='600 30px "Jiuqi Serif",serif';ctx.fillStyle=ink;ctx.fillText('親手煮嘅，特別好味。',0,0);ctx.restore()}
 ctx.fillStyle=ink;ctx.font='400 18px sans-serif';ctx.fillText('我親手煮嘅',52,1320);ctx.textAlign='right';ctx.fillText(new Date().toLocaleDateString('zh-HK'),1026,1320);ctx.textAlign='left';
 if(d.frame==='line'){ctx.strokeStyle=d.accent;ctx.lineWidth=1.5;ctx.strokeRect(20,20,1040,1310)}
 if(d.frame==='film'){ctx.fillStyle='#f6f5e8';for(let y=34;y<1340;y+=64){ctx.fillRect(10,y,15,27);ctx.fillRect(1055,y,15,27)}}
 return d.layout==='duo'?{tx:666,ty:665,tw:389,th:519}:d.layout==='cover'?{tx:650,ty:762,tw:384,th:512}:{tx:655,ty:497,tw:381,th:508};
}
