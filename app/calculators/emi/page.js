"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

// import { EMICalculator } from './page'; // Removed, use local definition below

export default function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>EMI</h1>
      <EMICalculator />
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='EMI' text='Check this calculator' />
        <button onClick={() => favHook.toggle('emi')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}

function EMICalculator() {
  const [loan, setLoan] = useState(100000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  const emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">EMI Calculator</h2>

      <input type="number" value={loan} onChange={(e) => setLoan(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Loan Amount" />

      <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Interest Rate (%)" />

      <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Years" />

      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <p className="text-lg font-bold text-green-600 dark:text-green-400">Monthly EMI: ${emi.toFixed(2)}</p>
      </div>
    </div>
  );
}
