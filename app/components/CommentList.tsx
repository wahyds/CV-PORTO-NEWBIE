"use client";
import { useEffect, useState } from "react";

interface Comment {
  name: string;
  comment: string;
}

export default function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="space-y-4 mt-4">
      {comments.length === 0 ? (
        <p className="text-gray-600">Belum ada komentar.</p>
      ) : (
        comments.map((c, idx) => (
          <div
            key={idx}
            className="bg-white text-gray-800 border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <p className="font-semibold">{c.name}</p>
            <p className="mt-1">{c.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}
