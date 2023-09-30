import 'server-only';

const products = [
  {
    id: 1,
    name: 'Amboss cutlery set',
    year: 1957,
    price: 2700,
    currency: '€ ',
    designer: 'Carl Auböck',
    origin: 'Austria',
  },
  {
    id: 2,
    name: 'Hana cutlery set',
    year: 1990,
    price: 3100,
    currency: '€ ',
    designer: 'Shozo Toyohisa',
    origin: 'Japan',
  },
  {
    id: 3,
    name: 'Unitre cutlery set',
    year: 1971,
    price: 600,
    currency: '€ ',
    designer: 'Carla Nencioni and Armando Moleri',
    origin: 'Italy,',
  },
  {
    id: 4,
    name: 'Xum cutlery set',
    year: 1990,
    price: 9400,
    currency: '€ ',
    designer: 'Robert Wilhite',
    origin: 'Japan',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
