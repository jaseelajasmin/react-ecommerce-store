import React from 'react';
import img from '../Assets/images/ban8.jpg';
import images from '../Assets/images/ban6.jpg';
import image from '../Assets/images/ban11.jpg';
import OfferList from '../components/OfferList';

export default function Home() {
  return (
    <div style={{height:'1200px',backgroundColor:'rgba(240, 195, 226, 0.87)'}}>
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="d-block w-100" alt="..."height={500}/>
    </div>
    <div class="carousel-item">
      <img src={images} class="d-block w-100" alt="..."height={500}/>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt="..."height={500}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div>
  <OfferList/>
</div>

    </div>
  )
}
