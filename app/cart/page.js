import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';
import RemoveButton from './RemoveButton';

export default async function Cart() {
  // GET PRODUCTS
  const products = await getProducts();
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
    <main>
      <div className={styles.cart}>
        <div>
          <h1>My shopping cart</h1>
        </div>
        <div>
          {productsWithQuantity
            .filter((product) => product.quantity >= 1)
            .map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <div>Quantity: {product.quantity}</div>
                <div>Price: {product.price}</div>
                <br />
                <RemoveButton id={product.id} />
              </div>
            ))}
        </div>
        <br />
        <br />

        <div data-test-id="cart-product-quantity-<product id>">
          Total Quantity: {totalQuantity}
        </div>
        <div data-test-id="cart-total">Total Price: {totalPrice}</div>
        <br />

        <div>
          <Link href="/checkout">
            <div data-test-id="cart-checkout">
              <button>Proceed to Checkout</button>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
