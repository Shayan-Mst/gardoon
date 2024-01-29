import { Link } from "react-router-dom"

import semnan from "./../../../assets/semnanuni.jpg"
import semnan1 from "./../../../assets/semnan.jpg"
import semnan2 from "./../../../assets/semn.jpg"
import {  useEffect, useState } from "react"
import Aos from "aos"
import { getAllNews } from "../../../service/gardoonService"
import moment from "jalali-moment"

const NewsMainPage = () => {

  const [news,setNews]=useState([])

  useEffect(()=>{

   const fetch = async() =>{

const {data:newsData} = await getAllNews();
setNews(newsData);



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
        <span className="titr mt-4 py-4 d-flex align-items-center">

          جدیدترین 

          <span className="mx-2" style={{color:"rgb(0,177,106)"}}>اخبار</span>
  
          <Link to='/news' className="d-flex see-all ">
    <i className="px-3 fa-sharp fa-solid fa-bars"/>

    مشاهده همه
    </Link>
  
    
    
</span>
  
        <div style={{marginBottom:"50px"}}  className="section-two" data-aos="slide-up" >
          
<div className="row">
  {news.slice(0,2).map((item)=>(

<div key={item.id} className="col-lg-4 col-md-6 p-0">

<div className="card">
  <figure className="image-container d-inline-block my-0">
  <img src={`http://127.0.0.1:8000${item.image}`} className="card-img-top" alt="..."/>
  <figcaption className="d-flex justify-content-center align-items-center image-caption">توضیح</figcaption>
  </figure>
  <div className="card-body">
  <Link to={`/news/${item.id}`} className="card-title d-flex"> 
  {item.title}
       </Link>
    <p className="card-text my-4">
   {item.description}
      </p>
    <span className="d-flex mt-1 date-published  " style={{fontSize:"10px",justifyContent:"end",alignItems:"end",marginTop:"4rem"}}>{moment(item.created).format('YYYY/MM/DD')}</span>

  </div>
</div>

</div>

  ))}


<div className="col-lg-4 p-0">
<div className="card th">

  {news.slice(2,5).map((item)=>(


<div key={item.id} className="card-devide">


<img src={`http://127.0.0.1:8000${item.image}`} className="card-img" alt="..."/>
  
 <div className="card-body">
  <Link to={`/news/${item.id}`} className="card-title d-flex py-3 px-0">
    {item.title}
  </Link>
  <span className=" mt-4 mx-2">{moment(item.created).format('YYYY/MM/DD')}</span>

</div>
</div>

  ))}
 




</div>

  
</div>






</div>

</div>
        
        </>
    )
}


export default NewsMainPage 