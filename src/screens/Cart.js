import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
 
  
 
  return (
    <div style={{height:'1000px',marginTop:'50px'}}>
      <h2 style={{color:'black', marginLeft:'500px',marginBottom:'30px'}}>Your Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
              <h4>{item.title}</h4>
               
            <div>
     <img src={item.image} style={{height:'150px' ,width:'100px',marginBottom:'20px'}} alt="..."/></div>
          
           
            <p>Price: Rs{item.price}</p>

            
          </div>
        ))
      )}
     
    </div>
  );
};

export default Cart;
