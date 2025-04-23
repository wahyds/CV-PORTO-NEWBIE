// /pages/api/ratings.ts
import { NextApiRequest, NextApiResponse } from 'next';

let ratings: number[] = []; // Simulasi database

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { rating } = req.body;
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating harus antara 1 dan 5' });
    }
    ratings.push(rating);
    return res.status(200).json({ message: 'Rating diterima' });
  }

  if (req.method === 'GET') {
    const total = ratings.length;
    const average = total > 0 ? ratings.reduce((a, b) => a + b, 0) / total : 0;
    return res.status(200).json({ average: average.toFixed(1), total });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
