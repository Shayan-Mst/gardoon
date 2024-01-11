
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

           

<section className="py-3 py-md-5 py-xl-8">

  <div className="container overflow-hidden">
    <div className="row gy-4 gy-lg-0">
      
      <div className="col-12 col-lg-4">
        <article>
          <div className="card border-0">
            <figure style={{objectFit:"cover"}} className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
              <a>
             <img src={semnan1}/>
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
                  <a className="link-dark text-decoration-none" href="#!">Earning 6 Figures in Your 20s</a>
                </h2>
              </div>
              <p className="card-text entry-summary text-secondary mb-3">
                Learn how a marketing coach earned six figures by 20, primarily through 1:1 sales. Her insights provide valuable guidance for other entrepreneurs seeking to connect with their audience effectively.
              </p>
               </div>
            <div className="card-footer border border-top-0 bg-light p-4">
              <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                <li className="mx-4">
                  <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                  <span className="ms-2 fs-7">12 Aug 2024</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    
                  </a>
                </li>

                <li className="mx-4">
                <a href="#!" className="btn btn-primary m-0 text-nowrap entry-more">ادامه مطلب</a>
          
                </li>
               
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

  

        </section>
    
    </>)
}




export default Calendars;