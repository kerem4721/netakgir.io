// src/components/ReviewForm.jsx
import React, { useState } from 'react';

function ReviewForm({ productId, onClose }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the review to a backend
    console.log({ productId, rating, comment });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Ürün Değerlendirmesi</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Puanınız</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
            >
              {[5, 4, 3, 2, 1].map((num) => (
                <option key={num} value={num}>
                  {num} Yıldız
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Yorumunuz</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows="4"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              İptal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;