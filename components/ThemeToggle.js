"use client";
import { useEffect, useState } from 'react';
export default function ThemeToggle(){ const [dark,setDark]=useState(false); useEffect(()=>{ const s=localStorage.getItem('theme')||'light'; const isDark=s==='dark'; setDark(isDark); document.documentElement.classList.toggle('dark', isDark); },[]); const toggle=()=>{ const next=!dark; setDark(next); localStorage.setItem('theme', next?'dark':'light'); document.documentElement.classList.toggle('dark', next); }; return <button onClick={toggle} className='px-3 py-1 rounded border'>{dark? '🌙 Dark':'☀️ Light'}</button>; }
