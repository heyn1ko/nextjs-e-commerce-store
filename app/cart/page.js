import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import RemoveButton from '../Components/RemoveButton';
import styles from './page.module.scss';

export default function Cart() {
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
  const allProductsThatWereAddedToTheCart = productsWithQuantity.filter(
    (item) => {
      return item.quantity !== undefined;
    },
  );

  if (allProductsThatWereAddedToTheCart.length === 0) {
    console.log('No Items In Your Cart');
  }
  // CALCULATE TOTAL QUANTITY
  // const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  const totalQuantity = productsWithQuantity.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  );
  // CALCULATE TOTAL PRICE
  const totalPrice = productsWithQuantity.reduce((acc, item) => {
    const itemPrice = item.price || 0;
    return acc + (item.quantity || 0) * itemPrice;
  }, 0);
  return (
    <div className={styles.cart}>
      <div>
        <h1>My shopping cart</h1>
      </div>
      <div>
        <p>
          {productsWithQuantity
            .filter((product) => product.quantity >= 1)
            .map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <div>Quantity: {product.quantity}</div>
                <div>Price: {product.price}</div>
                <br />
                <button>remove</button>
              </div>
            ))}
        </p>
      </div>
      <br />
      <br />

      <div>
        Total Quantity: {totalQuantity}
        Total Price: {totalPrice}
      </div>
      <br />

      <div>
        <Link href="/checkout">
          <div>
            <button data-test-id="cart-checkout">Proceed to Checkout</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
