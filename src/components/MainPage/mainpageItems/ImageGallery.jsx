

import ed from "./../../../assets/ed.jfif"
import homework from "./../../../assets/homework.jpg"
import earth from "./../../../assets/earth.jpg"
import lamp from "./../../../assets/lamp.jpg"
import teach from "./../../../assets/teach.jpg"
import laptop from "./../../../assets/laptop.jpg"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"
import SwiperCore,{  Navigation , EffectFlip, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, EffectFlip,Pagination ]);

const EventEnd = () => {


   

useEffect(()=>{


Aos.init({
  offset:150,
  duration:300,
  easing:'ease-in-cubic',
  once:true
});

  },[])

  


return(


    <>

<span style={{backgroundColor:"white"}} className="titr mt-4 py-4 d-flex align-items-center">
    
    <span className="mx-2" style={{color:"rgb(0,177,106)"}}>گالری</span>  تصاویر

    <Link to='/gallery' className="d-flex see-all ">
    <i className="px-3 fa-sharp fa-solid fa-bars"/>

     مشاهده همه
    </Link>
  </span>
    
    
    <section id="gallery-end" data-aos="zoom-out">


<div className="row">


<div className="col-lg-8 col-sm-12 col-md-12">
   <div className="cnt">
<img className="img-fluid" src={earth} alt='...'/>
<span className="g-date">12 اردیبهشت 1402</span>
<div className="overlay">
   <div className="image-caption">توضیح درباره عکس از پایین به بالا فقط برای امتحان این تیکه نوشته شده است آیا به نظر شما کار میکند</div>

 
</div>


</div>
</div>
<div className="col-lg-4 col-md-12">

    <div style={{height:"176px", marginBottom:"2%"}} className="cnt">
<img className="img-fluid" src={homework} alt='...'/>
<span className="g-date">12 اردیبهشت 1402</span>
<div className="overlay">
   <div className="image-caption">توضیح درباره عکس از پایین به بالا
   
   
   </div>
</div>

</div>

<div className="col-lg-12 col-md-12">
<div style={{height:"176px",width:"100%",marginTop:"1.5rem"}} className="cnt">
<img className="img-fluid" src={ed} alt='...'/>
<span className="g-date">12 اردیبهشت 1402</span>
<div className="overlay">
   <div className="image-caption">توضیح درباره عکس از پایین به بالا</div>
</div>
</div>
</div>
</div>
</div>

<div className="row sec">

    <div className="col-lg-4 col-md-6 h-100">
    <div className="cnt">
<img className="img-fluid" src={lamp} alt='...'/>
<span className="g-date">12 اردیبهشت 1402</span>
<div className="overlay">
   <div className="image-caption">توضیح درباره عکس از پایین به بالا</div>
</div>
</div>
    </div>

    <div className="col-lg-4 col-md-6 h-100">
    <div  className="cnt">
<img className="img-fluid" src={teach} alt='...'/>
<span className="g-date">12 اردیبهشت 1402</span>
<div className="overlay">
   <div className="image-caption">توضیح درباره عکس از پایین به بالا</div>
</div>
</div>
    </div>

    <div className="col-lg-4 col-md-12 h-100">
    <div className="cnt">
<img className="img-fluid" src={laptop} alt='...'/>
<span className="g-date">12 اردیبهشت 1402</span>
<div className="overlay">
   <div className="image-caption">توضیح درباره عکس از پایین به بالا</div>
</div>
</div>
    </div>
</div>

    </section>


    <section id="gallery-end-mob">

        <Swiper   className='px-4'
        
      navigation = {{clickable :true}}
      pagination = {{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      speed= {500}    
      
      breakpoints={{
        0:{
            slidesPerView:1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      
      }}
        
         >
<SwiperSlide className='px-4'>

<figure>
  <img className="img-fluid" src={earth} alt="گالری عکس"/>
  <figcaption className="mt-2">توضیح درباره عکس از پایین به بالا</figcaption>
</figure> 
</SwiperSlide>



<SwiperSlide className='px-4'>

<figure>
  <img className="img-fluid" src={lamp} alt="گالری عکس"/>
  <figcaption className="mt-2">توضیح درباره عکس از پایین به بالا</figcaption>
</figure> 
</SwiperSlide>



<SwiperSlide className='px-4'>

<figure>
  <img className="img-fluid" src={laptop} alt="گالری عکس"/>
  <figcaption className="mt-2">توضیح درباره عکس از پایین به بالا</figcaption>
</figure> 
</SwiperSlide>


        </Swiper>
    </section>
    
    </>
)

}

export default EventEnd;