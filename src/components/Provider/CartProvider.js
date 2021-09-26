import { useState, createContext, useContext, useEffect } from "react";

const CartItemContext = createContext();
const CartItemContextDispature = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      const retriveProducts = JSON.parse(localStorage.getItem("cartItems"));
      if (retriveProducts) setCartItems(retriveProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartItemContext.Provider value={cartItems}>
      <CartItemContextDispature.Provider value={setCartItems}>
        {children}
      </CartItemContextDispature.Provider>
    </CartItemContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartItemContext);
export const useCartAction = () => useContext(CartItemContextDispature);
