import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  name: string;
  year: string | null;
  price: string | null;
  designer: string | null;
  origin: string | null;
};

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
  `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  SELECT * FROM products
  WHERE id=${id}
  `;
  return product;
});

export const deleteProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  DELETE FROM products
  WHERE id=${id}
  RETURNING *
  `;
  return product;
});
// const products = [
//   {
//     id: 1,
//     name: 'Amboss cutlery set',
//     year: 1957,
//     price: 2700,
//     currency: '€ ',
//     designer: 'Carl Auböck',
//     origin: 'Austria',
//   },
//   {
//     id: 2,
//     name: 'Hana cutlery set',
//     year: 1990,
//     price: 3100,
//     currency: '€ ',
//     designer: 'Shozo Toyohisa',
//     origin: 'Japan',
//   },
//   {
//     id: 3,
//     name: 'Unitre cutlery set',
//     year: 1971,
//     price: 600,
//     currency: '€ ',
//     designer: 'Carla Nencioni and Armando Moleri',
//     origin: 'Italy,',
//   },
//   {
//     id: 4,
//     name: 'Xum cutlery set',
//     year: 1990,
//     price: 9400,
//     currency: '€ ',
//     designer: 'Robert Wilhite',
//     origin: 'Japan',
//   },
// ];

// export function getProductById(id: number) {
//   return products.find((product) => product.id === id);
// }
