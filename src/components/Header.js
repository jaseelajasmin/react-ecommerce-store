
import React from 'react';
import './header.css';
import { NavLink,Link } from 'react-router-dom';
import img from '../Assets/images/logo4.jpg';


function Header() {



  
 
 
  return (
    <div className='header'>
      
   <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
      <img src={img} alt="Logo" width={150} height={100} class="d-inline-block align-text-top"/>
      
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink to="/" className='nav-link' style={{color:'white'}}>Home</NavLink>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        <li className="nav-item">
          <NavLink to="/ProductList" className='nav-link' style={{color:'white'}} >Products</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink to="/Contact" className='nav-link'style={{color:'white'}}>Contact Us</NavLink> 
        </li>
         <li className="nav-item">
          <NavLink to="/About" className='nav-link'style={{color:'white'}}>About Us</NavLink> 
        </li>
        
        
         
        
      </ul>
      <NavLink to="/Cart" className="nav-link" style={{color:'white',fontSize:'20px', marginRight:'30px'}}><i class="fa-solid fa-cart-shopping"></i>Cart</NavLink>
      
    </div>
  </div>
</nav>
 
 
    </div>
  );
}

export default Header;