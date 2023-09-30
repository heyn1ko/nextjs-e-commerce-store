import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home Page | Crystal Cleer',
    template: '%s | Crystal Cleer',
  },
  description: 'The Premium Air',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Cleer</Link>
          <Link href="/cart">Cart</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
