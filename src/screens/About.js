import React from 'react';
import background from '../Assets/images/back7.webp';

export default function About() {
   const myStyle = {
            backgroundImage: `url(${background})`,
            height: "500px",
            color:'Black',
            fontFamily:'Times New Roman',
            
            
            backgroundSize: "cover",
            width:'100%',
            backgroundRepeat: "no-repeat",
        };
  return (
    <div style={myStyle}><h4 style={{color:'red'}}>About Us</h4>
    <div>
    <p><b>OnlineStore</b>  brings you the thrill of discovery with a treasure trove of products—mobiles, fashion, electronics, home appliances, groceries, and more. It's your one-stop shop with amazing discounts,.
    Each year we drop a lot of features that make life easier for everyday Indians. From building new ways to shop with Vibes, helping you find answers through shoppy - our chatbot, launching personal loans with easy EMIs, expanding our categories to Home Services, Vehicles, E-books, & more. Our newest addition is OnlineStore Minutes, where you get everything from fresh fruits & veggies to daily essentials to electronics in just 10 mins! We also have THE fashion destination for our Gen Z fam, Spoyl.
    </p>

    </div>
    </div>
  )
}

