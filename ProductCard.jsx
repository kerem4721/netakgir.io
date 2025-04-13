// src/components/ProductCard.jsx
import React, { useState, useContext } from 'react';
import ReviewForm from './ReviewForm';
import { AuthContext } from '../contexts/AuthContext';

function ProductCard({ product }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { user } = useContext(AuthContext);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({
        ...product,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('Ürün sepete eklendi!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <span className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-sm">
          {product.category}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <p className="text-emerald-600 font-bold text-xl mb-4">₺{product.price.toFixed(2)}</p>
      <div className="flex justify-between items-center gap-2">
        <button
          onClick={() => setShowReviewForm(true)}
          className="flex-1 bg-emerald-100 text-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-200 transition duration-300 text-sm"
        >
          Yorum Yap
        </button>
        <button 
          className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300 text-sm"
          onClick={() => {
            if (!user) {
              alert('Sipariş vermek için giriş yapmalısınız!');
              return;
            }
            addToCart();
          }}
        >
          {user ? 'Sepete Ekle' : 'Giriş Yapın'}
        </button>
      </div>
      {showReviewForm && (
        <ReviewForm
          productId={product.id}
          productName={product.name}
          onClose={() => setShowReviewForm(false)}
        />
      )}
    </div>
  );
}

export default ProductCard;