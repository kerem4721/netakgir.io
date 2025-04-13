// src/components/AdminProductForm.jsx
import React, { useState } from 'react';

function AdminProductForm() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: 'Manav',
    description: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('New product:', product);
    alert('Ürün başarıyla eklendi!');
    setProduct({
      name: '',
      price: '',
      category: 'Manav',
      description: '',
      image: null
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Yeni Ürün Ekle</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ürün Adı
        </label>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Fiyat (₺)
        </label>
        <input
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Kategori
        </label>
        <select
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="Manav">Manav</option>
          <option value="Temel Gıda">Temel Gıda</option>
          <option value="Promosyon">Promosyon</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Açıklama
        </label>
        <textarea
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows="3"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ürün Fotoğrafı
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
          className="w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition duration-300"
      >
        Ürünü Ekle
      </button>
    </form>
  );
}

export default AdminProductForm;