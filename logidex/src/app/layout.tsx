import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles/globals.scss";
import { ModalProvider } from './context/ModalContext';
import ModalRoot from './components/ModalRoot';
import { ReactNode } from "react";
import Navbar from "./components/layout/Navbar";
import NewDecisionButton from './components/new_decision_button';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="container-fluid">
        <ModalProvider>
          <div className="row site-wrapper">
            <div className="navbar">
              <Navbar />
              <div className="new-dec-btn-wrapper">
                <NewDecisionButton />
              </div>
            </div>
            <div className="main-app-content">
              <main className="main-content-wrapper">{children}</main>
            </div>
          </div>
          <ModalRoot />
        </ModalProvider>
      </body>
    </html>
  );
}
