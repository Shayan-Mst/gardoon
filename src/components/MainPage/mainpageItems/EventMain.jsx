
import { Link } from 'react-router-dom';
import './../../../../node_modules/swiper/swiper.scss';
import './../../../../node_modules/swiper/modules/navigation/navigation.scss';
import './../../../../node_modules/swiper/modules/pagination/pagination.scss';
import SwiperCore,{  Navigation , EffectFlip } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect,useState } from 'react';
import Aos from 'aos';
import { getAllEvents } from "../../../service/gardoonService";
import moment from 'jalali-moment';



SwiperCore.use([Navigation, EffectFlip ]);



const EventMain = () => {
  const [event,setEvent] = useState([])

useEffect(()=>{




  const fetch = async() =>{

    const{data:eventData} = await getAllEvents();
setEvent(eventData)


  }

  fetch();

    
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

<span className="titr py-4 d-flex align-items-center">

  رویداد ها
  
<Link  to='/events' className="d-flex see-all ">
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

      {event.slice(0,6).map((item)=>(

<SwiperSlide key={item.id} className='px-4' >
      
<div className="card ">

<img src={`http://127.0.0.1:8000${item.image}`} className="card-img-top" alt="..."/>


<div className="card-body">

<Link to={`/events/${item.id}`} className="card-title d-flex">
{item.title}
</Link>
<span className="d-flex  mt-4 date-published">{moment(item.created).format('YYYY/MM/DD')}</span>

     </div>
</div>
  </SwiperSlide>




      ))}
    
   
    
  

      
    </Swiper>
   
    </div>
        
        </>
    )
}



export default EventMain;