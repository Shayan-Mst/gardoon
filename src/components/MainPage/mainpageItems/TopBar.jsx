

import { Link } from "react-router-dom";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getInfo } from "../../../service/gardoonService";







const TopBar = () => {


   const [infoSite,setInfoSite] = useState([]);
   const date = new DateObject({ calendar: persian, locale: persian_fa })
   const location = useLocation()


   const shouldNotRender = (
      location.pathname.startsWith('/page/admin')
  )

  useEffect(()=>{


  const fetch = async()=>{

   const {data:infoData} = await getInfo();

   setInfoSite(infoData);

  }

fetch();

  },[])

   
return(

   <>
{
!shouldNotRender 
 ? <header className="topbar w-100" >

   
<div className="topbar-right">

   <i className="fa-solid fa-phone"></i>

   <small>{infoSite.phone_number}</small>

   <i className="fa-solid fa-envelope"></i>

   <small>{infoSite.email}</small>

</div>

<div className="calendar d-flex justify-content-center" style={{direction:"rtl"}}>
{date.format("dddd DD MMMM سال YYYY")}
</div>

<div className="topbar-left d-flex justify-content-flex-start align-items-center">

<Link to="/signin" className='btn btn1 d-flex justify-content-center'> ورود / ثبت نام</Link>

 

</div>

</header> : null }



</>
)


}


export default TopBar;