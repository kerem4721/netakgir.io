// src/hooks/useAuth.jsx
import { useState } from 'react';

// Bu örnek için basit bir kimlik doğrulama hook'u
// Gerçek uygulamada bu bilgiler güvenli bir şekilde saklanmalıdır
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout
  };
}