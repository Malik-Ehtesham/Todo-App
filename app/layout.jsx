import { ToastContainer } from "react-toastify";

import Nav from "@app/components/Nav/Nav";
import SProvider from "./components/Provider/SProvider";

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
        <SProvider>
          <main>
            <Nav />
            {children}
            <ToastContainer />
          </main>
        </SProvider>
      </body>
    </html>
  );
};

export default RootLayout;
