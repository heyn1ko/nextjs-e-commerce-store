import { getProducts } from '../../database/products';

export default function RemoveButton(productId) {
  const cart = getProducts();
}

const mergedQuantity = parsedQuantityFromCookie.find(
  (singleProduct) => product.id === singleProduct.id,
);

return {
  ...product,
  quantity: mergedQuantity?.quantity,
};
