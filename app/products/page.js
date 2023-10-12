import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export default async function Cleer() {
  const products = await getProducts();
  // console.log('check:', products);
  // console.log(
  //   getAllProductsFromDatabase().then((product) => console.log(product)),
  // );
  return (
    <main>
      <div className={styles.products}>
        {products.map((singleProduct) => {
          return (
            <div key={`product-div-${singleProduct.id}`}>
              <h1>Products</h1>
              <Link
                className={styles.product}
                href={`/products/${singleProduct.id}`}
                data-test-id={`product-${singleProduct.id}`}
              >
                <br />
                <Image
                  src={`/images/${singleProduct.name}.jpg`}
                  alt={singleProduct.name}
                  width={231.5}
                  height={320}
                />
                <h1>{singleProduct.name}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
