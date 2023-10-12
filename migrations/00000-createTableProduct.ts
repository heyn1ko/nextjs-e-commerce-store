import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(60) NOT NULL,
    year INTEGER,
    price INTEGER NOT NULL,
    designer VARCHAR(50),
    origin VARCHAR(20)
);
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products
  `;
}
