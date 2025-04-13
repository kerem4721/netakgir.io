// src/pages/Register.jsx
import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send notification to owner
    const message = `Yeni Müşteri Kaydı:\nİsim: ${formData.name}\nTelefon: ${formData.phone}\nEmail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/905425969558?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Müşteri Kaydı</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Ad - Soyad</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Adres</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-2 border rounded-md"
            rows="3"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Telefon</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2">E-posta (İsteğe bağlı)</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition duration-300"
        >
          Kayıt Ol
        </button>
        <div className="text-center">
          <button
            type="button"
            className="text-emerald-600 hover:underline"
            onClick={() => window.history.back()}
          >
            Kaydolmadan Devam Et
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;