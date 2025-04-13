// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { sendVerificationEmail } from '../utils/emailService';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (email, password) => {
    // In a real app, you'd call your backend API here
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    await sendVerificationEmail(email, verificationCode);
    localStorage.setItem('pendingVerification', JSON.stringify({ email, password, verificationCode }));
  };

  const verifyEmail = async (email, code) => {
    const pending = JSON.parse(localStorage.getItem('pendingVerification'));
    if (pending && pending.email === email && pending.verificationCode === code) {
      const userData = {
        email,
        isAdmin: email === 'kerem47980@gmail.com'
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.removeItem('pendingVerification');
    } else {
      throw new Error('Invalid verification code');
    }
  };

  const login = async (email, password) => {
    // In a real app, you'd validate credentials with your backend
    const userData = {
      email,
      isAdmin: email === 'kerem47980@gmail.com'
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, register, verifyEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}