import { Link } from "react-router-dom"

import semnan from "./../../../assets/semnanuni.jpg"
import semnan1 from "./../../../assets/semnan.jpg"
import semnan2 from "./../../../assets/semn.jpg"
import {  useEffect } from "react"
import Aos from "aos"

const NewsMainPage = () => {

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
<div className="col-lg-4 col-md-6 p-0">

<div className="card">
  <figure className="image-container d-inline-block my-0">
  <img src={semnan2} className="card-img-top" alt="..."/>
  <figcaption className="d-flex justify-content-center align-items-center image-caption">توضیح</figcaption>
  </figure>
  <div className="card-body">
  <Link className="card-title d-flex">  .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
      </Link>
    <p className="card-text my-4">
    .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
     .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
     .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
    
     .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
    
     .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
     .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
     .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
     .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .
    
      </p>
    <span className="d-flex mt-1 date-published  " style={{fontSize:"10px",justifyContent:"end",alignItems:"end",marginTop:"4rem"}}>28 بهمن 1402</span>

  </div>
</div>

</div>


<div className="col-lg-4 col-md-6 p-0">


<div className="card">
<figure className="image-container d-inline-block my-0">
  <img src={semnan1} className="card-img-top" alt="..."/>
  <figcaption className="d-flex justify-content-center align-items-center image-caption">توضیح</figcaption>
  </figure>
  <div className="card-body">
  <Link className="card-title d-flex"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .عنوان خبر</Link>
    <p className="card-text my-4">.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .</p>
    <span className="d-flex mt-1 date-published  " style={{fontSize:"10px",justifyContent:"end",alignItems:"end"}}>28 بهمن 1402</span>

  </div>
</div>
</div>



<div className="col-lg-4 p-0">
<div className="card th">
  <div className="card-devide">


  <img src={semnan1} className="card-img" alt="..."/>
    
   <div className="card-body">
    <Link className="card-title d-flex py-3 px-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحا</Link>
    <span className=" mt-4 mx-2">28 بهمن 1402</span>
 
  </div>
  </div>


  <div className="card-devide">
    
  <img src={semnan} className="card-img" alt="..."/>
  <div className="card-body">
    <Link className="card-title d-flex py-3 px-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده اهعحا</Link>
    <span className=" mt-4 mx-2">28 بهمن 1402</span>
  </div>
  </div>

  <div className="card-devide">
    
  <img src={semnan2} className="card-img" alt="..."/>
    <div className="card-body">
      
      <Link  className="card-title d-flex py-3 px-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحا</Link>
      <span className=" bottom-0   m-2" >28 بهمن 1402</span>

    </div>
    </div>

</div>

  
</div>


</div>

</div>
        
        </>
    )
}


export default NewsMainPage 