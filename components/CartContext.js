import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CarContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  const addProduct = (productId) => {
    setCartProducts((prev) => [...prev, productId]);
  };

  const removeProduct = (productId) => {
    setCartProducts((prev) => {
      const idPosition = prev.indexOf(productId);
      if (idPosition !== -1) {
        return prev.filter((value, index) => index !== idPosition);
      }
      return prev;
    });
  };

  const clearCart = () => {
    setCartProducts([]);
    ls.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
