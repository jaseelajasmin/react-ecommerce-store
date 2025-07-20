import React from 'react';
//import FilterContext from '../contexts/FiterContext';
import { Link } from 'react-router-dom';



export default function ProductCard(props) {

   var prod= props.product;
  
   
  return (
  <>

          <div >
       <div className="card" style={{ alignContent:'center',width: '11.6rem',height:'500px',padding:'20px',marginLeft:'30px'}}>
        
        <img src={prod.image}height={'150'} width={'100'}className="card-img-top" alt="..."></img>
        {/* <div>
          {
        brands.map((b)=><h3>{b}</h3>)
      }
   
        </div> */}
         <div className="card-body" >
        <h5 className="card-title">
          <Link to={'/ProductList/'+prod.id} style={{color:'black',textDecoration:'none'}}>{prod.title}</Link></h5>
         {/* <p className="card-text">{prod.description}</p> */}
        <div className="card-text">{prod.catagory}</div>

        

        <div className="card-text"  style={{marginTop:'10px',fontWeight:'bold',marginBottom:'10px'}}>Rs.{prod.price}</div>
         <div  style={{display: 'flex', color:' rgb(243, 126, 17)'} }  >  
    
    
<span class="fa fa-star checked" ></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
<span class="fa fa-star "></span>
          
        
      </div>
      <div className="card-text" style={{marginTop:'10px',marginBottom:'10px'}}>{prod.rating.rate}/{prod.rating.count}</div>
           {/* <a href="#" class="btn btn-warning">Add to Cart</a> */}
            
        </div>
        </div>
        </div>
       
        </>
        
        
  );
}
