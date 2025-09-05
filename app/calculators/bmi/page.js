"use client";
import ShareAndDownload from '/components/ShareAndDownload';  
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

export default function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>BMI</h1>
      <BMICalculator />
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='BMI' text='Check this calculator' />
        <button onClick={() => favHook.toggle('bmi')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}

function BMICalculator() {
  const [weight, setWeight] = useState(70); // kg
  const [height, setHeight] = useState(170); // cm

  const bmi =
    weight > 0 && height > 0
      ? (weight / ((height / 100) * (height / 100))).toFixed(1)
      : 0;

  const getStatus = (bmiValue) => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue >= 18.5 && bmiValue < 24.9) return "Normal weight";
    if (bmiValue >= 25 && bmiValue < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        BMI Calculator
      </h2>

      {/* Weight */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Weight (kg)
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="mt-1 block w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Height */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Height (cm)
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="mt-1 block w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Result */}
      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <p className="text-lg text-gray-900 dark:text-gray-100">
          Your BMI:
        </p>
        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
          {bmi}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {getStatus(Number(bmi))}
        </p>
      </div>
    </div>
  );
}
