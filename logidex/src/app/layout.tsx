// logidex/app/layout.tsx
import "./styles/globals.scss";
import { ReactNode } from "react";
import Navbar from "./components/layout/Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="container-fluid">
        <div className="row site-wrapper">
          <div className="main-app-content">
            <main className="main-content-wrapper">{children}</main>
          </div>
          <div className="navbar">
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}