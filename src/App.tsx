import React from "react";
import { CartProvider } from "./context/CartContext";
import { MainPage } from "./pages/MainPage";

export const App: React.FC = () => {
  return (
    <CartProvider>
      <MainPage />
    </CartProvider>
  );
};

export default App;
