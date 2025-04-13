// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-emerald-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl md:text-2xl font-bold">
            AKGÜR MARKET
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-emerald-200 transition duration-300">
              Ana Sayfa
            </Link>
            <Link to="/contact" className="hover:text-emerald-200 transition duration-300">
              İletişim
            </Link>
            {user?.isAdmin && (
              <Link to="/admin" className="hover:text-emerald-200 transition duration-300">
                Admin Panel
              </Link>
            )}
            <Link to="/cart" className="hover:text-emerald-200 transition duration-300">
              Sepetim
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="hover:text-emerald-200 transition duration-300"
              >
                Çıkış Yap
              </button>
            ) : (
              <Link to="/auth" className="hover:text-emerald-200 transition duration-300">
                Giriş Yap / Kayıt Ol
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:bg-emerald-700 px-3 py-2 rounded transition duration-300"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:bg-emerald-700 px-3 py-2 rounded transition duration-300"
            >
              İletişim
            </Link>
            {user?.isAdmin && (
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="hover:bg-emerald-700 px-3 py-2 rounded transition duration-300"
              >
                Admin Panel
              </Link>
            )}
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="hover:bg-emerald-700 px-3 py-2 rounded transition duration-300"
            >
              Sepetim
            </Link>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-left hover:bg-emerald-700 px-3 py-2 rounded transition duration-300"
              >
                Çıkış Yap
              </button>
            ) : (
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="hover:bg-emerald-700 px-3 py-2 rounded transition duration-300"
              >
                Giriş Yap / Kayıt Ol
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;