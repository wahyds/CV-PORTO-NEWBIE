"use client";
import { useState } from "react";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, comment }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Terjadi kesalahan");
      }

      setName("");
      setComment("");
      alert("Komentar berhasil dikirim!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded border border-gray-300 bg-white text-gray-900 shadow"
        required
      />
      <textarea
        placeholder="Komentar"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-3 rounded border border-gray-300 bg-white text-gray-900 shadow"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Kirim
      </button>
    </form>
  );
}
