// logidex/app/layout.tsx
import { Mona_Sans, Roboto_Slab } from 'next/font/google';
import "./styles/globals.scss";
import { ReactNode } from "react";
import Navbar from "./components/layout/Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';

const monaSans = Mona_Sans({
  subsets: ['latin'],
  weight: [
    '200', '300', '400', '500', '600', '700', '800', '900',
  ],
  style: ['normal', 'italic'],
  variable: '--font-mona-sans',
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: [
    '100', '200', '300', '400', '500', '600', '700', '800', '900',
  ],
  style: ['normal'],
  variable: '--font-roboto-slab',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${monaSans.variable} ${robotoSlab.variable}`}>
      <body className="container-fluid">
        <div className="row site-wrapper">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="flex-grow-1 main-app-content">
            <main className="main-content-wrapper">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}