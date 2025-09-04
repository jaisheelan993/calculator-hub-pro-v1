"use client";
import { useEffect, useState, useRef } from 'react';
export default function AdRotator({ ads = [], style, autoRotate = 0 }) {
  const [selected, setSelected] = useState(null);
  const idxRef = useRef(0);
  useEffect(()=>{
    if(!ads || ads.length===0) return;
    const firstAdsense = ads.find(a=>a.type==='adsense');
    if(firstAdsense) setSelected(firstAdsense);
    else setSelected(ads[Math.floor(Math.random()*ads.length)]);
  },[ads]);
  useEffect(()=>{
    if(!autoRotate) return;
    const nonAds = ads.filter(a=>a.type!=='adsense');
    if(nonAds.length<2) return;
    const t = setInterval(()=>{ idxRef.current = (idxRef.current+1)%nonAds.length; setSelected(nonAds[idxRef.current]); }, autoRotate);
    return ()=>clearInterval(t);
  },[ads, autoRotate]);
  useEffect(()=>{ try{ if(selected?.type==='adsense' && typeof window !== 'undefined' && window.adsbygoogle){ (window.adsbygoogle = window.adsbygoogle || []).push({}); } }catch(e){ console.error('ads push error', e); } },[selected]);
  if(!selected) return null;
  if(selected.type==='adsense'){ return (<ins className='adsbygoogle' style={style || {display:'block'}} data-ad-client='ca-pub-XXXXXXXXXXXXXXXX' data-ad-slot={selected.slot} data-ad-format='auto' data-full-width-responsive='true'></ins>); }
  if(selected.type==='image'){ return (<a href={selected.href||'#'} target='_blank' rel='noreferrer'><img src={selected.src} alt={selected.alt||'Ad'} style={{maxWidth:'100%', ...style}}/></a>); }
  if(selected.type==='script'){ return (<div dangerouslySetInnerHTML={{__html:selected.code}} />); }
  return null;
}
