
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css"
import { Calendar, DateObject,toDateString } from "react-multi-date-picker"
import React ,{useEffect, useState}from "react"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"
import semnan1 from "./../../assets/semnan.jpg"
import { Link } from "react-router-dom";
const Calendars = () => {
    const [values, setValues] = useState(new Date());

   useEffect(()=>{



    console.log(values)
   })

    return(
    <>
    
    <section id="calendar">
    <div className="m-3  overflow-hidden" style={{height:'400px'}}>
<div className="p-2 m-2">انتخاب رویداد ها و اخبار بر اساس تقویم</div>
        <div className="h-100" >
        <Calendar   className="h-100 green"
  numberOfMonths={5}
  disableMonthPicker
  disableYearPicker
  calendar={persian}
  locale={persian_fa}
  animations={[  transition({ duration: 800, from: 35 })]} 
  value={values}
  onChange={setValues}


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

    <div className="date-p ">
    <i style={{marginRight:"1rem"}} className="fa-solid fa-calendar-days"></i>
    <span className=" mb-2 mx-1"></span>
    </div>

    
        <div className="row m-3 pt-4">
        <div className="col-6">
        <div className="container mb-4 search-result">

<div className="card h-100">
  <div className="card-devide h-100">
<div className="row h-100">
<div  className="col-lg-3 col-sm-12 d-flex p-0">
  <img src={semnan1} className="img-fluid" alt="..."/>
  </div>

  <div className="col-lg-9 col-sm-12">
   <div className="card-body h-100">
    <Link className="card-title d-flex pb-1 px-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </Link>
      
 
  </div>
  </div>
  </div>
  </div>
  </div>  
</div>
    
</div>

<div className="col-6">
<div className="container mb-4 search-result">

<div className="card h-100">
  <div className="card-devide h-100">
<div className="row h-100">
<div  className="col-lg-3 col-sm-12 d-flex p-0">
  <img src={semnan1} className="img-fluid" alt="..."/>
  </div>

  <div className="col-lg-9 col-sm-12">
   <div className="card-body h-100">
    <Link className="card-title d-flex pb-1 px-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </Link>
  
 
  </div>
  </div>
  </div>
  </div>
  </div>  
</div>
    
</div>
        </div>
    

        </section>
    
    </>)
}




export default Calendars;