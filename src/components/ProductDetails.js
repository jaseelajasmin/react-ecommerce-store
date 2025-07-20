import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import  { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function ProductDetails() {
 const { addToCart } = useContext(CartContext);

//   const isInCart = cart.some((item) => item.id === produc.id);
 const navigate=useNavigate();
    const params=useParams();
    const prodId=params.productId;
    const [product, setProduct] = useState({});
    function LoadProductsById() {// function for load products using useEffect
      console.log("loadproducts");
      
      fetch('https://fakestoreapi.com/products/ '+prodId).then((response)=>{
        response.json().then((data)=>
        {
         setProduct(data);
        })
    .catch(error=>{
            console.log(error);
        })
    })
        .catch(error=>{
            console.log(error);
        })
    }
   
    useEffect(LoadProductsById,[prodId]);
     const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // Navigate to cart page
  };
  return (
    <div className='container' style={{width:'100%',height:'1000px',alignItems:'center',marginTop:'50px',marginLeft:'150px'}}>
        <div>
     <img src={product.image} style={{height:'250px' ,width:'150px',marginBottom:'20px'}} alt="..."/></div>
    <h3>{[product.title]}</h3>
     <div className="card-text"style={{marginTop:'20px',marginBottom:'20px'}}>{product.catagory}</div>
       <div className="card-text">{product.description} </div>
        <div className="card-text"  style={{marginTop:'20px',fontWeight:'bold',marginBottom:'30px'}}>Rs.{product.price}</div>
        
      
           <button onClick={() => handleAddToCart(product)}  className="btn btn-warning"> addToCart</button>
            
        </div>
      
       

    
  ) 
}
