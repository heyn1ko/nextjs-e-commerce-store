'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateQuantity(productId, quantity) {
  const productCookie = getCookie('productQuantity');
  const productsQuantity = !productCookie ? [] : parseJson(productCookie);
  const productToUpdate = productsQuantity.find((productQuantity) => {
    return productQuantity.id === productId;
  });
  if (productToUpdate) {
    productToUpdate.quantity = quantity;
  } else {
    productsQuantity.push({
      id: productId,
      quantity: quantity,
    });
  }
  await cookies().set('productQuantity', JSON.stringify(productsQuantity));
}

// import { cookies } from 'next/headers';
//
// import { parseJson } from '../../../util/json';

// export async function createOrUpdateQuantity(productId, quantity) {
//   // 1. get the current cookie
//   const productCookie = getCookie('productQuantity');
//   // 2. parse the cookie value
//   // !fruitsCommentsCookie <=> fruitsCommentsCookie === undefined

//   const productsQuantities = !productCookie
//     ? // Case A: cookie is undefined
//       // we need to create a new cookie with an empty array
//       []
//     : parseJson(productCookie);

//   // 3. we edit the cookie value
//   // We get the the object for the fruit on cookies or undefined
//   const productToUpdate = productsQuantities.find(
//     (productQuantity) => {
//       return productQuantity.id === productId;
//     },
//   );
//   // Case B: cookie is defined and fruit id already exists!
//   // if we are in fruit id = 1
//   if (productToUpdate) {
//     productToUpdate.quantity = quantity;
//   } else {
//     // Case C: cookie is defined and fruit id doesn't exist!
//     productsQuantities.push({
//       id: productId,
//       quantity: quantity,
//     });
//   }

//   // 4. we override the cookie
//   await cookies().set(
//     'productQuantity',
//     JSON.stringify(productsQuantities),
//   );
// }
