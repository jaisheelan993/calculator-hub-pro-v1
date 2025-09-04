"use client";
import { useEffect, useState } from 'react';
export function useFavorites(){ const [favs,setFavs]=useState([]); useEffect(()=>{ const raw=localStorage.getItem('favs'); setFavs(raw?JSON.parse(raw):[]); },[]); const toggle=(id)=>{ let next = favs.includes(id)?favs.filter(x=>x!==id):[...favs,id]; setFavs(next); localStorage.setItem('favs', JSON.stringify(next)); }; return {favs, toggle}; }
export default function FavoritesList(){ const {favs} = useFavorites(); return (<div><h4 className='text-sm'>Favorites</h4><ul>{favs.map(f=>(<li key={f} className='text-sm'>{f}</li>))}</ul></div>); }
