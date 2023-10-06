import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './Components/Footer';
import Nav from './Components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home Page | Cleer',
    template: '%s | Cleer',
  },
  description: 'Curated Interior Finds',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
      <Footer />
    </html>
  );
}
