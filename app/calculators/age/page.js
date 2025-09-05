"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

export function AgeCalculator() {
  const [dob, setDob] = useState("");

  const calculateAge = () => {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Age Calculator</h2>

      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
      />

      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <p className="text-lg text-gray-900 dark:text-gray-100">Your Age:</p>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{calculateAge()} years</p>
      </div>
    </div>
  );
}

export default function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>AGE</h1>
      <AgeCalculator />
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='AGE' text='Check this calculator' />
        <button onClick={() => favHook.toggle('age')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}
