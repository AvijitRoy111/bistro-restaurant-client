import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [cartCount, setCartCount] = useState(0);

  const fetchCartCount = async () => {
    if (!user?.email) return;
    try {
      const res = await axios.get(`${import.meta.env.VITE_api}/carts?email=${user.email}`);
      const cartData = res.data.data || res.data; 
      setCartCount(cartData.length || 0);
    } catch (err) {
      console.error("Error fetching cart count:", err);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, [user]);

  return (
    <CartContext.Provider value={{ cartCount, fetchCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
