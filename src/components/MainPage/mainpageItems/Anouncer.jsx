
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Aos from 'aos';
import { getAllAnounce } from "../../../service/gardoonService";
import moment from "jalali-moment"





const Anouncer = () => {

  const [anounce,setAnounce] = useState([])

  useEffect(()=>{

    const fetch = async() =>{

      const{data:anounceData} = await getAllAnounce();
setAnounce(anounceData)


    }

    fetch();


Aos.init({
  offset:50,
  duration:300,
  easing:'ease-in-sine',
  once:true,
  disable:"mobile"
  });

  },[])

  



    return(
        <>
          <span className="titr mt-4 py-4 d-flex align-items-center ">
            
   اطلاعیه ها
  

    <Link to='/anounce' className="d-flex  see-all ">
    <i className="px-3 fa-sharp fa-solid fa-bars"/>

    مشاهده همه
    </Link>
  </span>
        <div className="mt-4 section-three ">

<div className="container-fluid pt-4">
  <div className="row pt-4">
{anounce.slice(0,6).map((item)=>(

<div id="event" className="m-4 d-block" data-aos="flip-right"  >

<div className="event-title ">
<h5 style={{fontSize:"14px"}}>{item.title}</h5>
</div>

<div className="d-flex">

<div style={{alignItems:"center"}} className="d-flex more mx-4 mt-4">
<Link style={{fontSize:"12px",width:"90px"}} className="py-2 px-3 text-decoration-none ">{moment(item.created).format('YYYY/MM/DD')}</Link>
</div>

<div className="d-flex   more mx-4 mt-4">
<Link className="py-2 px-3 text-decoration-none "><i className="fa-solid fa-arrow-left"></i></Link>
</div>

</div>

</div>


))}



</div>
</div>

</div>

        
        </>
    )
}


export default Anouncer;