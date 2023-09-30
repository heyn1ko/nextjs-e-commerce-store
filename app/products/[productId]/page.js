import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';

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
        Year : {singleProduct.year}
        <br />
        Designer : {singleProduct.designer}
        <br />
        Origin : {singleProduct.origin}
        <br />
        Price:{singleProduct.price} {singleProduct.currency}
      </p>
      <button>Add to Cart</button>
      <br />
      <input type="number" required={true} min="1" />
      <br />
      <Image
        src={`/images/${singleProduct.name}.jpg`}
        alt={singleProduct.name}
        width={324.1}
        height={448}
      />
    </div>
  );
}
