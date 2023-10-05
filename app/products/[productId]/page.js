import Image from 'next/image';
import { getProductById } from '../../../database/products';
import AddToCartButton from './AddToCartButton';

export default async function SingleProductPage(props) {
  const product = await getProductById(Number(props.params.productId));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        Year : {product.year}
        <br />
        Designer : {product.designer}
        <br />
        Origin : {product.origin}
        <br />
        Price:{product.price} {product.currency}
      </p>
      <br />
      <AddToCartButton
        productId={product.id}
        data-test-id="product-add-to-cart"
      />
      <br />
      <br />

      <Image
        src={`/images/${product.name}.jpg`}
        alt={product.name}
        width={324.1}
        height={448}
      />
    </div>
  );
}
