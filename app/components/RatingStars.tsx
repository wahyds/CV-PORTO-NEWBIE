// /app/components/RatingStars.tsx
import { useState, useEffect } from 'react';

const RatingStars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [average, setAverage] = useState(0);
  const [total, setTotal] = useState(0);

  const submitRating = async (value: number) => {
    await fetch('/api/ratings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: value }),
    });
    fetchRatings(); // Refresh average
  };

  const fetchRatings = async () => {
    const res = await fetch('/api/ratings');
    const data = await res.json();
    setAverage(parseFloat(data.average));
    setTotal(data.total);
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  return (
    <div>
      <h3>Beri Rating:</h3>
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => {
              setRating(star);
              submitRating(star);
            }}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{ fontSize: '2rem', color: star <= (hover || rating) ? '#FFD700' : '#ccc' }}
          >
            ★
          </span>
        ))}
      </div>
      <p>Rating {average} (from {total} voters)</p>
    </div>
  );
};

export default RatingStars;
