// src/components/OrderForm.jsx
import React, { useState } from 'react';
import { sendOrderConfirmation } from '../utils/emailService';

function OrderForm({ cart, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    notes: ''
  });

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const orderDetails = {
      ...formData,
      cart,
      totalPrice: getTotalPrice(),
      orderDate: new Date().toISOString()
    };

    try {
      await sendOrderConfirmation(orderDetails);
      localStorage.removeItem('cart');
      alert('Siparişiniz başarıyla alındı!');
      onClose();
    } catch (error) {
      alert('Sipariş gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Sipariş Bilgileri</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ad Soyad
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Adres
          </label>
          <textarea
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            rows="3"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Telefon
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sipariş Notu
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows="3"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Geri
          </button>
          <button
            type="submit"
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Siparişi Onayla
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;