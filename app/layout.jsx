import { ToastContainer } from "react-toastify";

import Nav from "@app/components/Nav/Nav";

import "react-toastify/dist/ReactToastify.css";

import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <main>
          <Nav /> {children}
          <ToastContainer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
