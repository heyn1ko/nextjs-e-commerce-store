import 'server-only';

const products = [
  { id: 1, name: 'Cashmere Lemon', price: 45 },
  { id: 2, name: 'Lilac Cucumber', price: 45 },
  { id: 3, name: 'Midnight Dahlia', price: 45 },
  { id: 4, name: 'Oceanic Fig', price: 45 },
];

export function getProducts() {
  return products;
}
