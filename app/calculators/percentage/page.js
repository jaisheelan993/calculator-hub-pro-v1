"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

export function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>PERCENTAGE</h1>
      <div>return (<div className='space-y-3'><p>Calculator UI goes here.</p></div>);</div>
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='PERCENTAGE' text='Check this calculator' />
        <button onClick={() => favHook.toggle('percentage')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}

export default function PercentageCalculator() {
  const [value, setValue] = useState(50);
  const [total, setTotal] = useState(200);

  const percentage = total > 0 ? ((value / total) * 100).toFixed(2) : 0;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Percentage Calculator</h2>

      <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Value" />

      <input type="number" value={total} onChange={(e) => setTotal(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Total" />

      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <p className="text-lg font-bold text-green-600 dark:text-green-400">{percentage}%</p>
      </div>
    </div>
  );
}