import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export default function Cleer() {
  const products = getProducts();
  return (
    <main>
      <h1>Products</h1>
      {products.map((singleProduct) => {
        return (
          <div key={`singleProduct-div-${singleProduct.id}`}>
            <Image
              src={`/images/${singleProduct.name}.png`}
              alt={singleProduct.name}
              width={300}
              height={300}
            />
            <Link href={`/products/${singleProduct.id}`}>
              {singleProduct.name}
            </Link>
          </div>
        );
      })}
    </main>
  );
}
