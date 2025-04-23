'use client';

import { useState } from 'react';

const zodiacData: Record<string, { range: string, good: string, bad: string, match: string }> = {
  aries: {
    range: "21 Maret - 19 April",
    good: "Berani, penuh semangat, suka tantangan.",
    bad: "Tergesa-gesa, suka mendominasi.",
    match: "Leo, Sagitarius"
  },
  taurus: {
    range: "20 April - 20 Mei",
    good: "Setia, sabar, suka kenyamanan.",
    bad: "Keras kepala, posesif.",
    match: "Virgo, Capricorn"
  },
  gemini: {
    range: "21 Mei - 20 Juni",
    good: "Komunikatif, pintar, fleksibel.",
    bad: "Moody, mudah bosan.",
    match: "Libra, Aquarius"
  },
  cancer: {
    range: "21 Juni - 22 Juli",
    good: "Empatik, pelindung, setia.",
    bad: "Sensitif, mudah terluka.",
    match: "Scorpio, Pisces"
  },
  leo: {
    range: "23 Juli - 22 Agustus",
    good: "Karismatik, percaya diri, pemimpin alami.",
    bad: "Sombong, suka dominasi.",
    match: "Aries, Sagitarius"
  },
  virgo: {
    range: "23 Agustus - 22 September",
    good: "Perfeksionis, cermat, analitis.",
    bad: "Kritis, terlalu pemikir.",
    match: "Taurus, Capricorn"
  },
  libra: {
    range: "23 September - 22 Oktober",
    good: "Diplomatis, adil, suka keindahan.",
    bad: "Ragu-ragu, menghindari konflik.",
    match: "Gemini, Aquarius"
  },
  scorpio: {
    range: "23 Oktober - 21 November",
    good: "Intens, setia, penuh gairah.",
    bad: "Cemburuan, penuh rahasia.",
    match: "Cancer, Pisces"
  },
  sagittarius: {
    range: "22 November - 21 Desember",
    good: "Petualang, optimis, jujur.",
    bad: "Tidak sabaran, terlalu terus terang.",
    match: "Aries, Leo"
  },
  capricorn: {
    range: "22 Desember - 19 Januari",
    good: "Disiplin, bertanggung jawab, ambisius.",
    bad: "Kaku, pesimis.",
    match: "Taurus, Virgo"
  },
  aquarius: {
    range: "20 Januari - 18 Februari",
    good: "Inovatif, mandiri, berpikir maju.",
    bad: "Eksentrik, emosional dingin.",
    match: "Gemini, Libra"
  },
  pisces: {
    range: "19 Februari - 20 Maret",
    good: "Imaginatif, sensitif, penuh kasih.",
    bad: "Pemalu, pelupa.",
    match: "Cancer, Scorpio"
  }
};

export default function ZodiacChatbot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = () => {
    const lowerInput = input.trim().toLowerCase();
    if (zodiacData[lowerInput]) {
      const { range, good, bad, match } = zodiacData[lowerInput];
      setResponse(`♈ *${lowerInput.charAt(0).toUpperCase() + lowerInput.slice(1)}*\nTanggal: ${range}\n➕ Kelebihan: ${good}\n➖ Kekurangan: ${bad}\n💞 Cocok dengan: ${match}`);
    } else {
      setResponse("❌ Zodiac tidak dikenali. Pastikan penulisan sesuai, misalnya: *aries*, *taurus*, dll.");
    }
  };

  return (
    <div className="p-6 bg-purple-100 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">Chatbot Zodiac</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Masukkan zodiac Anda..."
          className="flex-grow p-2 border border-purple-300 rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleChat}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Kirim
        </button>
      </div>
      {response && <p className="mt-4 text-purple-800 whitespace-pre-line">{response}</p>}
    </div>
  );
}
