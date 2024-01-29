
import "react-multi-date-picker/styles/colors/green.css"
import { Calendar } from "react-multi-date-picker"
import React ,{useEffect, useState}from "react"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"
import { Link } from "react-router-dom";
import moment from 'jalali-moment';
import { getAllAnounce, getAllEvents, getAllGallery, getAllNews } from "../../service/gardoonService"
import './../../../node_modules/swiper/swiper.scss';
import './../../../node_modules/swiper/modules/navigation/navigation.scss';
import SwiperCore,{  Navigation , EffectFlip } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const Calendars = () => {
    const [values, setValues] = useState();
const [news,setNews] = useState([]);
const [event,setEvent] = useState([]);
const [anounce,setAnounce] = useState([]);
const [gallery,setGallery] = useState([]);

const [nFilter,setnFilter] = useState([])
const [EFilter,seteFilter] = useState([])
const [AFilter,setaFilter] = useState([])
const [GFilter,setgFilter] = useState([])

SwiperCore.use([Navigation, EffectFlip ]);

const sl1 = news.length >= 3 ? 3 : news.length
const sl2 = event.length >= 3 ? 3 : event.length
const sl3 = anounce.length >= 3 ? 3 : anounce.length
const sl4 = gallery.length >= 3 ? 3 : gallery.length

useEffect(()=>{


    const fetch = async() => {
  
      try{
const {data: newsData} = await getAllNews();
setNews(newsData);
setnFilter(newsData);

const {data : eventData} = await getAllEvents()
setEvent(eventData);
seteFilter(eventData);

const {data : anounceData} = await getAllAnounce();
setAnounce(anounceData);
setaFilter(anounceData);

const {data:galleryData} = await getAllGallery();
setGallery(galleryData)
setgFilter(galleryData)




      }

      catch(error){
console.log(error);

      }

    }

    fetch();


   
   },[])

   function datePick(e){


setValues(moment(e.toDate()).locale('fa').format('YYYY/MM/DD'))

   }

   useEffect(()=>{

    setnFilter(news.filter((element)=> moment(element.created).format('YYYY/MM/DD') == values))
    seteFilter(event.filter((element)=> moment(element.created).format('YYYY/MM/DD') == values))
    setaFilter(anounce.filter((element)=> moment(element.created).format('YYYY/MM/DD') == values))
    setgFilter(gallery.filter((element)=> moment(element.created).format('YYYY/MM/DD') == values))


   },[values])

    return(
    <>
    
    <section id="calendar">
    <div className="m-3  overflow-hidden" style={{height:'400px'}}>
        <div className="h-100" >
        <Calendar   className="h-100 green"
  numberOfMonths={5}
  disableMonthPicker
  disableYearPicker
  calendar={persian}
  locale={persian_fa}
  animations={[  transition({ duration: 800, from: 35 })]} 
  value={values}
  onChange={datePick}


  style={{
    width: "100%",
    boxSizing: "border-box",
    height: "260px",
    
  }}
  containerStyle={{
    width: "100%"
  }}
/> 
        </div>
       
    </div>

      
       
<section className="py-3 py-md-5 py-xl-8">

  <div className="container overflow-hidden">
  <div style={{textAlign:"right"}}>موارد یافت شده :</div>

  <div className="my-4 p-2" style={{color:"white",borderRadius:"7px 7px 0 0",textAlign:"right", backgroundColor:"#3B71CA"}}>اخبار و مقالات</div>
 <Swiper
  navigation
  spaceBetween={20}
  slidesPerView={sl1}
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

{nFilter.map((item) => (


<SwiperSlide key={item.id}>


  <article>
    <div  className="card border-0" style={{height:"400px"}}>
      <figure style={{aspectRatio:"2/1"}} className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
        <a>
       <img src={`http://127.0.0.1:8000${item.image}`}/>
       </a>
        <figcaption>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">ادامه مطلب</h4>
        </figcaption>
      </figure>
      <div className="card-body border bg-white p-4 pb-0">
        <div className="entry-header mb-3">
          <ul className="entry-meta list-unstyled d-flex mb-2">
            
          </ul>
          <h2 className="card-title entry-title h4 mb-0">
            <a  style={{fontSize:"14px",lineHeight:"1.7",display:"flex",textAlign:"justify"}} className="link-dark text-decoration-none">{item.title}</a>
          </h2>
        </div>
       
         </div>
      <div className="card-footer border border-top-0 bg-light p-4">
        <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
          <li className="mx-4">
            <Link className="fs-7 link-secondary text-decoration-none d-flex align-items-center" >
            <span className="ms-2 fs-7">{moment(item.created).format('YYYY/MM/DD')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              
            </Link>
          </li>

          <li>
          <Link to={`/news/${item.id}`} className="btn btn-primary m-0 text-nowrap entry-more">ادامه مطلب</Link>
    
          </li>
         
        </ul>
      </div>
    </div>
  </article>



</SwiperSlide>



))}


 </Swiper>
  




   
   
  </div>

  <div className="container overflow-hidden">
  <div className="my-4 p-2" style={{color:"white",borderRadius:"7px 7px 0 0",textAlign:"right", backgroundColor:"#9FA6B2"}}>رویداد ها</div>
  
  
     <Swiper
     
     navigation
     spaceBetween={20}
     slidesPerView={sl2}
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

{EFilter.map((item)=>(


<SwiperSlide key={item.id}>

<article>
  <div className="card border-0" style={{height:"400px"}}>
    <figure style={{aspectRatio:"2/1"}} className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
      <a>
     <img src={`http://127.0.0.1:8000${item.image}`}/>
     </a>
      <figcaption>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg>
        <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">ادامه مطلب</h4>
      </figcaption>
    </figure>
    <div className="card-body border bg-white p-4">
      <div className="entry-header mb-3">
        <ul className="entry-meta list-unstyled d-flex mb-2">
          
        </ul>
        <h2 className="card-title entry-title h4 mb-0">
          <a style={{fontSize:"14px",lineHeight:"1.7",display:"flex",textAlign:"justify"}} className="link-dark text-decoration-none">{item.title}</a>
        </h2>
      </div>
   
       </div>
    <div className="card-footer border border-top-0 bg-light p-4">
      <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
        <li className="mx-4">
          <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
          <span className="ms-2 fs-7">{moment(item.created).format('YYYY/MM/DD')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            
          </a>
        </li>

        <li className="mx-4">
        <Link to={`/events/${item.id}`} className="btn btn-secondary m-0 text-nowrap entry-more">ادامه مطلب</Link>
  
        </li>
       
      </ul>
    </div>
  </div>
</article>

        
</SwiperSlide>

))}
      
     </Swiper>

     
    
  </div>

  <div className="container overflow-hidden">
  <div className="my-4 p-2" style={{color:"white",borderRadius:"7px 7px 0 0",textAlign:"right", backgroundColor:"#14A44D"}}>اطلاعیه</div>
  
  

    <Swiper
    
    
    navigation
  spaceBetween={20}
  slidesPerView={sl3}
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
    
 {AFilter.map((item)=>(
    
    
    <SwiperSlide key={item.id}>
    <article>
  <div className="card border-0" >
   
    <div className="card-body border bg-white p-4">
      <div className="entry-header mb-3">
        <ul className="entry-meta list-unstyled d-flex mb-2">
          
        </ul>
        <h2 className="card-title entry-title h4 mb-0">
          <a style={{fontSize:"16px",display:"flex",textAlign:"justify"}} className="link-dark text-decoration-none">{item.title}</a>
        </h2>
      </div>
    
       </div>
    <div className="card-footer border border-top-0 bg-light p-4">
      <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
        <li className="mx-4">
          <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
          <span className="ms-2 fs-7">{moment(item.created).format('YYYY/MM/DD')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            
          </a>
        </li>

        <li className="mx-4">
        <Link to={`/anounce/${item.id}`}  className="btn btn-success m-0 text-nowrap entry-more">ادامه مطلب</Link>
  
        </li>
       
      </ul>
    </div>
  </div>
</article>
    
    </SwiperSlide>
    
    
    
    
    ))}
    
    
    </Swiper>

   
     
   
    
    
  </div>

  <div className="container overflow-hidden">

    <div className="my-4 p-2" style={{color:"white",borderRadius:"7px 7px 0 0",textAlign:"right", backgroundColor:"#332D2D"}}>گالری عکس</div>
  
<Swiper

navigation
spaceBetween={20}
slidesPerView={sl4}
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
}}>

{GFilter.map((item) => (


<SwiperSlide key={item.id}>
  

<article>
  <div className="card border-0">
    <figure style={{objectFit:"cover"}} className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
      <a>
     <img src={`http://127.0.0.1:8000${item.image}`}/>
     </a>
      <figcaption>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg>
        <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">{item.title}</h4>
      </figcaption>
    </figure>
   
    <div className="card-footer border border-top-0 bg-light p-4">
      <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
        <li className="mx-4">
          <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
          <span className="ms-2 fs-7">{moment(item.created).format('YYYY/MM/DD')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            
          </a>
        </li>

        <li className="mx-4">
        <Link to={`/gallery/${item.id}`} className="btn btn-dark m-0 text-nowrap entry-more">ادامه مطلب</Link>
  
        </li>
       
      </ul>
    </div>
  </div>
</article>

</SwiperSlide>



      ))}
</Swiper>

    
  </div>
</section>

  

        </section>
    
    </>)
}




export default Calendars;