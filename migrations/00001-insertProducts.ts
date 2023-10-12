import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Amboss cutlery set',
    year: 1957,
    price: 2700,
    designer: 'Carl Aubock',
    origin: 'Austria',
  },
  {
    id: 2,
    name: 'Hana cutlery set',
    year: 1990,
    price: 3100,
    designer: 'Shozo Toyohisa',
    origin: 'Japan',
  },
  {
    id: 3,
    name: 'Unitre cutlery set',
    year: 1971,
    price: 600,
    designer: 'Carla Nencioni and Armando Moleri',
    origin: 'Italy,',
  },
  {
    id: 4,
    name: 'Xum cutlery set',
    year: 1990,
    price: 9400,
    designer: 'Robert Wilhite',
    origin: 'Japan',
  },
];
export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, year, price, designer, origin)
    VALUES
       (${product.name},${product.year},${product.price},${product.designer},${product.origin})
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
     DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
