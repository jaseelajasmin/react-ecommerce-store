import React from "react";
import OfferCard from "./OfferCard";

const OfferList = () => {
  var prodcts = 
  [
    {
      id: 1,
      title: "50% off for cothing. Buy 1 get 2",
      
        
      image1: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      
       image2:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        
        image3: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        
        image4: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        
      
    },
   
    {
      id: 2,
      title:
        "75% off on Womens jwellery,come and collect now",
     
      image1: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      image2: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      image3: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      image4: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
     
    },
    
    {
      id: 3,
      title: "Your favorite choice on Electronics,Buy 1 and get 2 ",
      
      image1: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      image2: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      image3: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      image4: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
    
    {
      id: 4,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
     
      image1: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      image2: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
       image3: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
       image4: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"

  
    },
   
    {
      id:5,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      
      image1: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      image2: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      image3: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      image4: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"


     
    },
    {
      id: 6,
      title:
        "Men's shoes with 50% offer",
     
      image1: "https://www.trendsettingfashions.com/cdn/shop/products/product-image_a14bd8fa-1ed0-4355-bfbc-882d24e72b00_630x.jpg?v=1593687399",
      image2: "https://zorket.com/cdn/shop/products/product-image-116609139_720x720.jpg?v=1593654372",
      image3: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/27440862/2024/2/27/ed73a6a9-8de0-4e82-988d-bfed0b2fffb91709030488884-The-Roadster-Lifestyle-Co-Men-Blue-Lace-Ups-Sneakers-5731709-1.jpg",
      image4: "https://www.trendsettingfashions.com/cdn/shop/products/product-image_16c5c19c-e9ab-47d7-b561-894f316c941b_630x.jpg?v=1593687399"
     
    }, {
      id:7,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      
      image1: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      image2: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      image3: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      image4: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"


     
    },
    {
      id: 8,
      title: "50% off for cothing. Buy 1 get 2",
      
        
      image1: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
       image2:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        image3: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        image4: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
      
    }
    
  ];
  return (
    <div className="container"
      style={{
        
        display: "flex",
        justifyContent:'space-evenly',
        gap:'5px',
        margin: "5px",
        padding: "10px",
        width: "100%",
        height: "40%",
        
        flexWrap: "wrap",
        boxShadow:"10px",
        marginLeft:'20px',
      }}
    >
      {prodcts.map((p) => {
        return <OfferCard product={p} />;
      })}
    </div>
  );
};

export default OfferList;

