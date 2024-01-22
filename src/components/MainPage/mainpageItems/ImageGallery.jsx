

import ed from "./../../../assets/ed.jfif"
import homework from "./../../../assets/homework.jpg"
import earth from "./../../../assets/earth.jpg"
import lamp from "./../../../assets/lamp.jpg"
import laptop from "./../../../assets/laptop.jpg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"
import SwiperCore,{  Navigation , EffectFlip, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { getAllGallery } from "../../../service/gardoonService"
import moment from "jalali-moment"

SwiperCore.use([Navigation, EffectFlip,Pagination ]);

const EventEnd = () => {


const [gallery,setGallery] = useState([]);

const [galleryHolder,setGalleryHolder] = useState([]);

useEffect(()=>{


  const fetch = async() => {

const {data:galData} = await getAllGallery();
setGallery(galData);


  }

  fetch();

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

{gallery.slice(0,1).map((item)=>(

<div className="col-lg-8 col-sm-12 col-md-12">
   <div className="cnt">
<img className="img-fluid" src={`http://127.0.0.1:8000${item.image}`} alt='...'/>
<span className="g-date">{moment(item.created).format('YYYY/MM/DD')}</span>
<div className="overlay">
   <div className="image-caption">{item.title}</div>

 
</div>


</div>
</div>



))}

{gallery.slice(1,2).map((I)=>(

<div className="col-lg-4 col-md-12">

<div style={{height:"176px", marginBottom:"2%"}} className="cnt">
<img className="img-fluid" src={`http://127.0.0.1:8000${I.image}`} alt='...'/>
<span className="g-date">{moment(I.created).format('YYYY/MM/DD')}</span>
<div className="overlay">
<div className="image-caption">
{I.title}

</div>
</div>

</div>

{gallery.slice(2,3).map((item)=>(

<div className="col-lg-12 col-md-12">
<div style={{height:"176px",width:"100%",marginTop:"1.5rem"}} className="cnt">
<img className="img-fluid" src={`http://127.0.0.1:8000${item.image}`} alt='...'/>
<span className="g-date">{moment(item.created).format('YYYY/MM/DD')}</span>
<div className="overlay">
<div className="image-caption">
  {item.title}
</div>
</div>
</div>
</div>

))}

</div>
))}

</div>

<div className="row sec">

{gallery.slice(3,6).map((item)=>(

<div className="col-lg-4 col-md-6 h-100">
<div className="cnt">
<img className="img-fluid" src={`http://127.0.0.1:8000${item.image}`} alt='...'/>
<span className="g-date">{moment(item.created).format('YYYY/MM/DD')}</span>
<div className="overlay">
<div className="image-caption">{item.title}</div>
</div>
</div>
</div>



))}
   

   
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