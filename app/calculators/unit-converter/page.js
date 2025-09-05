"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

export default function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>UNIT CONVERTER</h1>
      <UnitConverter />
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='UNIT CONVERTER' text='Check this calculator' />
        <button onClick={() => favHook.toggle('unit-converter')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}

function UnitConverter() {
  const [cm, setCm] = useState(100);

  const meters = cm / 100;
  const inches = cm / 2.54;
  const feet = cm / 30.48;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Unit Converter (Length)</h2>

      <input type="number" value={cm} onChange={(e) => setCm(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Centimeters" />

      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center space-y-1">
        <p className="text-gray-900 dark:text-gray-100">Meters: {meters.toFixed(2)}</p>
        <p className="text-gray-900 dark:text-gray-100">Inches: {inches.toFixed(2)}</p>
        <p className="text-gray-900 dark:text-gray-100">Feet: {feet.toFixed(2)}</p>
      </div>
    </div>
  );
}