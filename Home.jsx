// src/pages/Home.jsx
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { products, categories } from '../constants/products';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === 'Tümü'
      ? products
      : products.filter(product => product.category === selectedCategory);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">AKGÜR MARKET</h1>
      
      {/* Search Bar */}
      <SearchBar onSearch={setSearchQuery} />
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base ${
              selectedCategory === category
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
            } transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Aradığınız ürün bulunamadı.
        </p>
      )}
    </div>
  );
}

export default Home;