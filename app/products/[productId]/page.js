import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '../../../database/products';

export function generateMetadata({ params }) {
  const singleProduct = getProduct(Number(params.productId));
  return {
    title: singleProduct ? singleProduct.name : '',
  };
}
export default function productPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  if (!singleProduct) {
    return notFound();
  }
  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <p>
        750ml
        <br />
        Price:{singleProduct.price} euros
      </p>
      <button>Add to Cart</button>
      <br />
      <input type="number" required={true} min="0" />
      <br />
      <Image
        src={`/images/${singleProduct.name}.png`}
        alt={singleProduct.name}
        width={500}
        height={500}
      />
    </div>
  );
}
