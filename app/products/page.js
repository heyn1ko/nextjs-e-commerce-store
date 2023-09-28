import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export default function Cleer() {
  const products = getProducts();
  return (
    <main>
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
            <br />
            <Image
              src={`/images/${product.name}.png`}
              alt={product.name}
              width={300}
              height={300}
            />
          </div>
        );
      })}
    </main>
  );
}
