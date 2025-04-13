// src/components/RegisterForm.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function RegisterForm() {
  const [step, setStep] = useState('register'); // register, verification
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: ''
  });
  const [error, setError] = useState('');
  const { register, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (step === 'register') {
      if (formData.password !== formData.confirmPassword) {
        setError('Şifreler eşleşmiyor');
        return;
      }

      try {
        await register(formData.email, formData.password);
        setStep('verification');
      } catch (err) {
        setError('Kayıt başarısız. Lütfen tekrar deneyin.');
      }
    } else {
      try {
        await verifyEmail(formData.email, formData.verificationCode);
        navigate('/');
      } catch (err) {
        setError('Doğrulama kodu hatalı.');
      }
    }
  };

  if (step === 'verification') {
    return (
      <form className="space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 border border-red-500 text-red-700 p-3 rounded">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">
            Doğrulama Kodu
          </label>
          <div className="mt-1">
            <input
              id="code"
              name="code"
              type="text"
              required
              value={formData.verificationCode}
              onChange={(e) => setFormData({ ...formData, verificationCode: e.target.value })}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            E-posta adresinize gönderilen doğrulama kodunu girin.
          </p>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Doğrula
        </button>
      </form>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-500 text-red-700 p-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-posta
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Şifre
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Şifre Tekrar
        </label>
        <div className="mt-1">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        Kayıt Ol
      </button>
    </form>
  );
}

export default RegisterForm;