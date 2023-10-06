export const metadata = {
  title: 'About Cleer',
  description: 'Curated Interior Finds',
};
export default function CheckOut() {
  return (
    <div>
      <h1>About Cleer</h1>
      <input
        placeholder="first name"
        data-test-id="checkout-first-name"
        required
      />
      <input
        placeholder="last name"
        data-test-id="checkout-last-name"
        required
      />
      <input
        type="email"
        placeholder="e-mail"
        data-test-id="checkout-email"
        required
      />
      <input placeholder="address" data-test-id="checkout-address" required />
      <input placeholder="city" data-test-id="checkout-city" required />
      <input
        type="number"
        placeholder="Postal Code"
        data-test-id="checkout-postal-code"
        maxLength={6}
        required
      />
      <input placeholder="country" data-test-id="checkout-country" required />
      <input
        type="date"
        placeholder="expiration date"
        data-test-id="checkout-credit-card"
        required
      />
      <input
        placeholder="credit card"
        data-test-id="checkout-expiration-date"
        type="number"
        required
      />
      <input
        placeholder="cvc"
        data-test-id="checkout-security-code"
        type="number"
        maxLength={3}
        required
      />
      <button data-test-id="checkout-confirm-order">Place Order</button>
    </div>
  );
}
