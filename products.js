// Constants file with sample product data and categories
export const products = [
  {
    id: 1,
    name: 'Taze Domates',
    price: 19.99,
    category: 'Manav',
    image: '/assets/images/tomatoes.jpg',
    description: 'Taze seçilmiş, sulu domatesler',
  },
  {
    id: 2,
    name: 'Kırmızı Elma',
    price: 15.99,
    category: 'Manav',
    image: '/assets/images/apples.jpg',
    description: 'Taze, sulu elmalar',
  },
  {
    id: 3,
    name: 'Pirinç',
    price: 89.99,
    category: 'Temel Gıda',
    image: '/assets/images/rice.jpg',
    description: 'Kaliteli pirinç',
  },
  {
    id: 4,
    name: 'Makarna',
    price: 29.99,
    category: 'Temel Gıda',
    image: '/assets/images/pasta.jpg',
    description: 'Lezzetli makarna',
  },
  {
    id: 5,
    name: 'Zeytinyağı',
    price: 299.99,
    category: 'Temel Gıda',
    image: '/assets/images/olive-oil.jpg',
    description: 'Sızma zeytinyağı',
  },
  {
    id: 6,
    name: 'Süt',
    price: 49.99,
    category: 'Promosyon',
    image: '/assets/images/milk.jpg',
    description: 'Günlük taze süt',
  }
].map(product => ({
  ...product,
  image: `https://source.unsplash.com/400x300/?${encodeURIComponent(product.name)}`
}));

export const categories = ['Tümü', 'Manav', 'Temel Gıda', 'Promosyon'];