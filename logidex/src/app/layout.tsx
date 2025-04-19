// logidex/app/layout.tsx
import "./styles/globals.css";
import { ReactNode } from "react";
import Navbar from "./components/layout/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Navbar />
        <main className="p-6 w-screen">{children}</main>
      </body>
    </html>
  );
}