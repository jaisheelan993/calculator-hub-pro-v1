"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
export default function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>AGE</h1>
      <div>return (<div className='space-y-3'><p>Calculator UI goes here.</p></div>);</div>
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='AGE' text='Check this calculator' />
        <button onClick={() => favHook.toggle('age')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}
