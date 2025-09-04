"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 flex flex-col space-y-3">
      <h2 className="text-xl font-bold">⚡ Calculator Hub</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="hover:underline">🏠 Home</Link>
        <Link href="/calculators/bmi" className="hover:underline">BMI Calculator</Link>
        <Link href="/calculators/loan" className="hover:underline">Loan Calculator</Link>
        {/* Add more calculators */}
      </nav>
    </aside>
  );
}
