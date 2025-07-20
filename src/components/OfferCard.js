import React from 'react'


export default function ProductCard(props) {
    console.log('ProductCard',props);
   // var tit=props.productTitle;
   var prod= props.product;
  return (
    <div >
        
       <div className="card" style={{width: '16rem',height:'300px',padding:'10px',marginTop:'-80px',marginBottom:'90px'}}>
        <div className="card-body" >
         <h5 className="card-title" style={{fontFamily:'-moz-initial',fontSize:'20px'}}>{prod.title}</h5><div style={{display:'flex',justifyContent:'SpaceBetween',marginBottom:'5px'}}>
        <img src={prod.image1}height={'80'} width={'80'}className="card-img-top" alt="..." style={{marginRight:'20px'}}></img>
       
        <img src={prod.image2}height={'80'} width={'80'}className="card-img-top" alt="..."></img>

         </div>
         <div style={{display:'flex',justifyContent:'spaceAround',marginTop:'30px'}}>
        <img src={prod.image3}height={'80'} width={'80'}className="card-img-top" alt="..." style={{marginRight:'20px'}}></img>
        <img src={prod.image4}height={'80'} width={'80'}className="card-img-top" alt="..."></img>

         </div>
       
         

        

        
        </div>
        </div>
        </div>
        
        
  );
}
