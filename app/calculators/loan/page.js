"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

export default function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>LOAN</h1>
      <LoanCalculator />
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='LOAN' text='Check this calculator' />
        <button onClick={() => favHook.toggle('loan')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}

function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(5);

  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = years * 12;

  const monthlyPayment =
    amount > 0 && rate > 0 && years > 0
      ? (amount *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : 0;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Loan Calculator
      </h2>

      {/* Loan Amount */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Loan Amount ($)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 block w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Interest Rate */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Interest Rate (%)
        </label>
        <input
          type="number"
          step="0.01"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="mt-1 block w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Loan Term */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Loan Term (Years)
        </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="mt-1 block w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Result */}
      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <p className="text-lg text-gray-900 dark:text-gray-100">
          Monthly Payment:
        </p>
        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
          ${monthlyPayment.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
