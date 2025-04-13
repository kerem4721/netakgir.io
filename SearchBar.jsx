// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Ürün ara..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
        <svg
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;