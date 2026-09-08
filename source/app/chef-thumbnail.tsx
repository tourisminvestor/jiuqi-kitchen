'use client';
import {useState,useEffect} from 'react';
import {loadChef} from '@/lib/chef-image';
export default function ChefThumbnail({gender,suit,alt}:{gender:string;suit:string;alt:string}){const [src,setSrc]=useState(''),[error,setError]=useState(false);useEffect(()=>{let active=true;setSrc('');setError(false);loadChef(gender,suit).then(im=>{if(active)setSrc(im.src)}).catch(()=>{if(active)setError(true)});return ()=>{active=false}},[gender,suit]);return src?<img src={src} alt={alt}/>:<span className="chef-thumbnail-loading" role="status">{error?'造型載入唔到':'載入造型…'}</span>}
