
import React from "react";

import semnan1 from './../../../assets/semnanuni.jpg'
import semnan2 from './../../../assets/semnan.jpg'
import semnan3 from './../../../assets/semn.jpg'
import './../../../../node_modules/swiper/swiper.scss';
import './../../../../node_modules/swiper/modules/navigation/navigation.scss';
import './../../../../node_modules/swiper/modules/pagination/pagination.scss';
import SwiperCore,{  Pagination , EffectFlip,Autoplay , Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, EffectFlip, Pagination , Navigation]);



const TopImageSlider = () => {

  
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
    
    <SwiperSlide>
      <div className="brief">
        <Link>
        دانشگاه سمنان امروز سال 1402 اعلام کرد


        </Link>
      <div style={{fontSize:"1rem"}}>
       <p>
       اعلام دانشگاه سمنان درباره امروز که اخبار بسیار مهمی را نشر داد
        
        </p> 
      </div>
      </div>
        <img className="imageSlide" src={semnan1} alt="SEMNAN UNIVERSITY" />
      </SwiperSlide>
      <SwiperSlide>
      <div className="brief">  
      
      
      <Link>دانشگاه سمنان امروز سال 1402 اعلام کرد

          
</Link>

      <div style={{fontSize:"1rem"}}>
      <p>
       اعلام دانشگاه سمنان درباره امروز که اخبار بسیار مهمی را نشر داد
        
        </p> 
      </div>
      </div>
        <img className="imageSlide" src={semnan2}  alt="SEMNAN UNIVERSITY" />
      </SwiperSlide>
      <SwiperSlide>
      <div className="brief">  
      
      <Link>دانشگاه سمنان امروز سال 1402 اعلام کرد

          
</Link>
      <div style={{fontSize:"1rem"}}>
      <p>
       اعلام دانشگاه سمنان درباره امروز که اخبار بسیار مهمی را نشر داد
        
        </p>   </div>
      </div>
        <img className="imageSlide" src={semnan3}  alt="SEMNAN UNIVERSITY" />
      </SwiperSlide>
    </Swiper>

    </div>
    </>
)


}


export default TopImageSlider;