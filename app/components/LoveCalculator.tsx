'use client';
import { useState } from 'react';

export default function LoveCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateLove = () => {
    const score = Math.floor(
      ((name1.length + name2.length + Math.abs(name1.charCodeAt(0) - name2.charCodeAt(0))) % 101)
    );
    setResult(score);
  };

  return (
    <div className="p-4 bg-red-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Love Calculator ❤️</h2>
      <input
        type="text"
        placeholder="Nama kamu"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        className="block w-full mb-2 px-3 py-2 rounded-lg border"
      />
      <input
        type="text"
        placeholder="Nama pasangan"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        className="block w-full mb-4 px-3 py-2 rounded-lg border"
      />
      <button
        onClick={calculateLove}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Hitung Cinta 💘
      </button>
      {result !== null && (
        <p className="mt-4 text-xl font-semibold text-red-700">Hasil: {result}% cinta!</p>
      )}
    </div>
  );
}
