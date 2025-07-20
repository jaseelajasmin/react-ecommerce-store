import React from 'react';
import background from '../Assets/images/back7.webp';

export default function Contact() {
   const myStyle = {
            backgroundImage: `url(${background})`,
            height: "500px",
            
            
            backgroundSize: "cover",
            width:'100%',
            backgroundRepeat: "no-repeat",
        };
  return (
    <div style={myStyle}>Contact Us
    <div>Email: support@ecommerce.com

Phone: +91000038900

Address: 123 E-Commerce St, City, India</div>
    </div>
  )
}
