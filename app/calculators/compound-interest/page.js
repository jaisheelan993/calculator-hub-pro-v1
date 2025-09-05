"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

export default function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>COMPOUND INTEREST</h1>
      <CompoundInterestCalculator />
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='COMPOUND INTEREST' text='Check this calculator' />
        <button onClick={() => favHook.toggle('compound-interest')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}

function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(2);
  const [compound, setCompound] = useState(1);

  const total = principal * Math.pow(1 + rate / (100 * compound), compound * time);
  const interest = total - principal;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Compound Interest Calculator</h2>

      <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Principal" />

      <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Rate (%)" />

      <input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Time (years)" />

      <input type="number" value={compound} onChange={(e) => setCompound(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Compounds per Year" />

      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <p className="text-gray-900 dark:text-gray-100">Interest: ${interest.toFixed(2)}</p>
        <p className="text-lg font-bold text-green-600 dark:text-green-400">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}