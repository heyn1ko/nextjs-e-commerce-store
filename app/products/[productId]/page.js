import Image from 'next/image';
import { getProductById } from '../../../database/products';
import AddToCartButton from './AddToCartButton';

// import styles from './page.module.scss';

export default async function SingleProductPage(props) {
  const product = await getProductById(Number(props.params.productId));

  return (
    <>
      <div>
        <h1>{product.name}</h1>
        <Image
          src={`/images/${product.name}.jpg`}
          alt={product.name}
          width={324.1}
          height={448}
        />
      </div>
      <div>
        Year : {product.year}
        <br />
        Designer : {product.designer}
        <br />
        Origin : {product.origin}
        <br />
        Price:{product.price} {product.currency}
        <br />
        <div>
          <AddToCartButton
            productId={product.id}
            data-test-id="product-add-to-cart"
          />
        </div>
      </div>
    </>
  );
}
