import React, { createContext, useState,useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
 

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
   
  

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
     
    </CartContext.Provider>
  );
};