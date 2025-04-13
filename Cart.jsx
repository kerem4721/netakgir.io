// src/components/Cart.jsx
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import OrderForm from './OrderForm';

function Cart() {
  const [cart, setCart] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: Math.max(0, newQuantity) }
        : item
    ).filter(item => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <p>Sepeti görüntülemek için giriş yapmalısınız.</p>
      </div>
    );
  }

  if (showOrderForm) {
    return <OrderForm cart={cart} onClose={() => setShowOrderForm(false)} />;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Sepetim</h2>
      
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Sepetiniz boş</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500">{item.price} ₺</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Toplam:</span>
              <span>{getTotalPrice()} ₺</span>
            </div>

            <button
              onClick={() => setShowOrderForm(true)}
              className="w-full py-3 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition duration-200"
            >
              Siparişi Tamamla
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;