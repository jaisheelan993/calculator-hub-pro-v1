"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

function TipCalculator() {
  const [bill, setBill] = useState(100);
  const [tip, setTip] = useState(10);

  const tipAmount = (bill * tip) / 100;
  const total = bill + tipAmount;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Tip Calculator</h2>

      <input type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Bill Amount" />

      <input type="number" value={tip} onChange={(e) => setTip(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Tip %" />

      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <p className="text-gray-900 dark:text-gray-100">Tip: ${tipAmount.toFixed(2)}</p>
        <p className="text-lg font-bold text-green-600 dark:text-green-400">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>TIP</h1>
      <TipCalculator />
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='TIP' text='Check this calculator' />
        <button onClick={() => favHook.toggle('tip')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}