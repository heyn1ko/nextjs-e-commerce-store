import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export default function Cleer() {
  const products = getProducts();
  return (
    <main className={styles.products}>
      {products.map((singleProduct) => {
        <h1>Products</h1>;
        return (
          <div key={`product-div-${singleProduct.id}`}>
            <Link
              className={styles.product}
              href={`/products/${singleProduct.id}`}
              data-test-id="product-<product id>"
            >
              <br />
              <Image
                src={`/images/${singleProduct.name}.jpg`}
                alt={singleProduct.name}
                width={231.5}
                height={320}
              />
              <h1> {singleProduct.name} </h1>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
