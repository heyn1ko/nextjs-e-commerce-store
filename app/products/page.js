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
          <div key={`product-div-${singleProduct.id}`}>
            <Link
              href={`/products/${singleProduct.id}`}
              data-test-id="product-<product id>"
            >
              <h1> {singleProduct.name} </h1>
              <br />
              <Image
                src={`/images/${singleProduct.name}.jpg`}
                alt={singleProduct.name}
                width={231.5}
                height={320}
              />
            </Link>
          </div>
        );
      })}
    </main>
  );
}
