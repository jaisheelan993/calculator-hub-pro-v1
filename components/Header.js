"use client";
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
export default function Header(){ return (<header className='sticky top-0 bg-white dark:bg-slate-900/60 border-b z-40'><div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'><Link href='/' className='font-bold text-lg'>Calculator Hub Pro</Link><div className='flex items-center gap-4'><nav className='hidden md:flex gap-4 text-sm'><Link href='/about'>About</Link><Link href='/contact'>Contact</Link></nav><ThemeToggle /></div></div></header>); }
