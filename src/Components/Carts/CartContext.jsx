import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const {user} = useContext(AuthContext)
  const [cartCount, setCartCount] = useState(0);
    
  const fetchCartCount = async () => {
    if (!user?.email) return;
    const res = await axios.get(`${import.meta.env.VITE_api}/carts?email=${user.email}`);
    setCartCount(res.data.length);
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
