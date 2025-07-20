

//import classNames from "classnames";

import React from "react";
import ProductCard from "./ProductCard";
import { useEffect,useState } from "react";


const ProductList = (props) => {
  const searchtext=props.searchtext;
  const [productList,setProductList]=useState([]);
  //const [catagories,setCatagoryList]=useState([]);

  function LoadProductsBySearchText() {// function for load products using useEffect
  console.log("loadproducts");
  
  fetch('https://fakestoreapi.com/products').then((response)=>{
    response.json().then((data)=>
    {
setProductList(data);
    })})}
//   function LoadCatagoriesByProduct() {
//     console.log("load catagories");
//     fetch('https://fakestoreapi.com/products/categories').then((response)=>{
//       response.json().then((data)=>{
//       setCatagoryList(data);})
//     })
    
//   }

  
 
//useEffect(LoadCatagoriesByProduct,[]); 
useEffect(LoadProductsBySearchText,[searchtext]);//array is not empty..so it loads function with seach product
// const [brands,setBrands]=useState([]);
// function storeBrands(brandlist){
//   if(brandlist != null && brandlist != undefined){
// setBrands(brandlist);
//   }
  
// }
  



// const products=props.products;
 //const FilteredProducts=products.filter((p)=>{
//return p.title.toLowerCase().includes(searchtext)})
 
          
//  <FilterContext.Provider value={{
//   catagories:catagories,
//   brands:brands,
//   saveBrands:storeBrands
// }
  
// }> 
return(

    <div className="container"
      style={{
        //backgroundColor: props.bgcolor,
        display: "flex",
        gap:'10px',
        margin: "10px",
        padding: "10px",
        width: "100%",
        height: "40%",
        flex: "1",
        flexWrap: "wrap",
        boxShadow:"5px"
      }}
    >



        
       {productList.map((p) => {
        return <ProductCard product={p} />;
      })} 
    
    </div>
      
  );}

export default ProductList;
