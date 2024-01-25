
import React, { useEffect, useState } from "react";
import './../../../../node_modules/swiper/swiper.scss';
import './../../../../node_modules/swiper/modules/navigation/navigation.scss';
import './../../../../node_modules/swiper/modules/pagination/pagination.scss';
import SwiperCore,{  Pagination , EffectFlip,Autoplay , Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { getAllSlide } from "../../../service/gardoonService";

SwiperCore.use([Autoplay, EffectFlip, Pagination , Navigation]);



const TopImageSlider = () => {

  const [slider,setSlide] = useState([]);

  useEffect(()=>{


const fetch = async() => {

const {data : slideData} = await getAllSlide();
setSlide(slideData);

}


fetch();

  },[])




return(
    <>

    <div className="topImageSlider">
     <Swiper
      
      pagination={{ clickable: true }}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      speed= {1000}
      autoplay={{ delay: 7000 }}
    
    >

      {slider.map((item) =>(


 
<SwiperSlide key={item.id}>
<div className="brief">
  <Link>
 {item.title}


  </Link>
<div style={{fontSize:"1rem"}}>
 <p>
 {item.description} 
  </p> 
</div>
</div>
  <img className="imageSlide" src={`http://127.0.0.1:8000${item.image}`} alt="SEMNAN UNIVERSITY" />
</SwiperSlide>


      ))}
   
    
     
    </Swiper>

    </div>
    </>
)


}


export default TopImageSlider;