
import { Link } from 'react-router-dom';
import et1 from './../../../assets/et1.jpg'
import et2 from './../../../assets/et2.png'
import et3 from './../../../assets/et3.jpg'
import './../../../../node_modules/swiper/swiper.scss';
import './../../../../node_modules/swiper/modules/navigation/navigation.scss';
import './../../../../node_modules/swiper/modules/pagination/pagination.scss';
import SwiperCore,{  Navigation , EffectFlip } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import Aos from 'aos';



SwiperCore.use([Navigation, EffectFlip ]);



const InfoSlider = () => {


useEffect(()=>{
    
Aos.init({
    offset:100,
    duration:300,
    easing:'ease-in-cubic',
    once : true,
    disable:"mobile"
});

},[])


    return(
        <>

<span className="titr py-4 d-flex align-items-center">اطلاعیه ها
  
<Link  to='/anounce' className="d-flex see-all ">
    <i className="px-3 fa-sharp fa-solid fa-bars"/>

    مشاهده همه
    </Link>
  </span>
        <div className="infoMiddleSlider px-4">
          
           <Swiper className='px-4' data-aos="slide-left"
     
    
      navigation
      spaceBetween={0}
      slidesPerView={3}
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
        1024: {
          slidesPerView: 3,
        },
      }}
    >
    
    <SwiperSlide className='px-4' >
      
    <div className="card ">

  <img src={et1} className="card-img-top" alt="..."/>

  
  <div className="card-body">
  
<Link className="card-title d-flex">
   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .عنوان خبر
</Link>
<span className="d-flex  mt-4 date-published" style={{fontSize:"10px",justifyContent:"end"}}>28 بهمن 1402</span>

         </div>
</div>
      </SwiperSlide>


      <SwiperSlide className='px-4' >
      
      <div className="card ">

  <img src={et2} className="card-img-top" alt="..."/>
  
  
  <div className="card-body">
  <Link className="card-title d-flex"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .عنوان خبر</Link>
  <span className="d-flex  mt-4 date-published" style={{fontSize:"10px",justifyContent:"end"}}>28 بهمن 1402</span>

         </div>
</div>
      </SwiperSlide>
      <SwiperSlide className='px-4'>
      
      <div className="card">

  <img src={et3} className="card-img-top" alt="..."/>
  
  <div className="card-body">
  <Link className="card-title d-flex"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .عنوان خبر</Link>
  <span className="d-flex  mt-4 date-published" style={{fontSize:"10px",justifyContent:"end"}}>28 بهمن 1402</span>

         </div>
</div>
      </SwiperSlide>



      <SwiperSlide className='px-4'>
      
      <div className="card">

  <img src={et3} className="card-img-top" alt="..."/>
  
  <div className="card-body">
  <Link className="card-title d-flex"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .عنوان خبر</Link>
  <span className="d-flex  mt-4 date-published" style={{fontSize:"10px",justifyContent:"end"}}>28 بهمن 1402</span>

         </div>
</div>
      </SwiperSlide>

      <SwiperSlide className='px-4'>
      
      <div className="card">

  <img src={et2} className="card-img-top" alt="..."/>
  
  
  <div className="card-body">
  <Link className="card-title d-flex"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .عنوان خبر</Link>
  <span className="d-flex  mt-4 date-published" style={{fontSize:"10px",justifyContent:"end"}}>28 بهمن 1402</span>

         </div>
</div>
      </SwiperSlide>

      <SwiperSlide className='px-4'>
      
      <div className="card">
  
    <img src={et1} className="card-img-top" alt="..."/>
  
    
    <div className="card-body">
    <Link className="card-title d-flex"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .عنوان خبر</Link>
    <span className="d-flex  mt-4 date-published" style={{fontSize:"10px",justifyContent:"end"}}>28 بهمن 1402</span>

           </div>
  </div>
        </SwiperSlide>
       
    </Swiper>
   
    </div>
        
        </>
    )
}



export default InfoSlider;