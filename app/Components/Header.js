import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './header.module.scss';

export default function Header() {
  // GET PRODUCTS
  const products = getProducts();
  // GET/CREATE THE COOKIE
  const cartCookieThatIncludesProductCookie = getCookie('cart');
  // PARSE THE COOKIE,
  // <or else if the cookie doesn't exist initialize 'parsedQuantity' as an empty array>
  const parsedQuantityFromCookie = !cartCookieThatIncludesProductCookie
    ? []
    : parseJson(cartCookieThatIncludesProductCookie);
  // COMBINE PRODUCTS WITH QUANTITIES FROM COOKIE
  const productsWithQuantity = products.map((product) => {
    // For each product, find the corresponding quantity in the parsed cookie
    const mergedQuantity = parsedQuantityFromCookie.find(
      (singleProduct) => product.id === singleProduct.id,
    );

    return {
      ...product,
      quantity: mergedQuantity?.quantity,
    };
  });
  // FILTER AND FIND ITEMS WITH QUANTITY IN ORDER TO DISPLAY
  // const allProductsThatWereAddedToTheCart = productsWithQuantity.filter(
  //   (item) => {
  //     return item.quantity !== undefined;
  //   },
  // );
  // UPDATE CART WITH TOTAL QUANTITY?
  // const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  const totalQuantity = productsWithQuantity.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  );
  return (
    <div className={styles.header}>
      <nav>
        <div>
          <Image
            src="/images/Logo.png"
            width={100}
            height={30}
            alt="Picture of the author"
          />
        </div>
        <br />
        <div>
          <Link href="/">Home</Link>
          <Link href="/products" data-test-id="products-link">
            Products
          </Link>
          <Link href="/about">About Cleer</Link>
          <Link href="/cart">
            Cart {totalQuantity > 0 && <span>({totalQuantity})</span>}
          </Link>
        </div>
      </nav>
    </div>
  );
}
