'use client';

import { useState } from 'react';
import { createOrUpdateQuantity } from './actions';

export default function AddToCartButton(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.currentTarget.value));
        }}
      />
      <div>
        <button
          onClick={async () =>
            await createOrUpdateQuantity(props.productId, quantity)
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
