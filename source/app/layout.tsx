import type { Metadata,Viewport } from 'next';
import './globals.css';
export const metadata:Metadata={title:'玖柒廚房',description:'27 道精選食譜、3 款創新菜式，分享你嘅廚神時刻。',icons:{icon:'/assets/logo.jpg'}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#254f3c'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-HK"><body>{children}</body></html>}
