"use client";
import ShareAndDownload from '/components/ShareAndDownload';
import { useFavorites } from '/components/Favorites';
import { useState } from 'react';

export function Page(){ 
  const favHook = useFavorites();
  return (
    <div className='card space-y-4'>
      <h1 className='text-2xl font-bold'>DISCOUNT</h1>
      <div className='space-y-3'><p>Calculator UI goes here.</p></div>
      <div className='flex items-center justify-between mt-4'>
        <ShareAndDownload title='DISCOUNT' text='Check this calculator' />
        <button onClick={() => favHook.toggle('discount')} className='px-3 py-1 rounded border'>Favorite</button>
      </div>
    </div>
  );
}

export default function DiscountCalculator() {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(10);

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Discount Calculator</h2>

      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Original Price" />

      <input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))}
        className="w-full p-2 mb-4 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Discount %" />

      <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
        <p className="text-gray-900 dark:text-gray-100">You Save: ${discountAmount.toFixed(2)}</p>
        <p className="text-lg font-bold text-green-600 dark:text-green-400">Final Price: ${finalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}