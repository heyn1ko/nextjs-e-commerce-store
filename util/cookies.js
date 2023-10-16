import { cookies } from 'next/headers';

// nullish coalescing operator
export function getCookie(name) {
  return cookies().get(name)?.value;
}

// export async function clearCookies() {
//   await cookies().delete('cart');
// }
