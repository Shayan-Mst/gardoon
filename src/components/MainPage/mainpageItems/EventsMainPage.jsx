
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Aos from 'aos';






const EventsMainPage = () => {


  useEffect(()=>{


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
            
    رویداد ها 
  

    <Link to='/events' className="d-flex  see-all ">
    <i className="px-3 fa-sharp fa-solid fa-bars"/>

    مشاهده همه
    </Link>
  </span>
        <div className="mt-4 section-three ">

<div className="container-fluid">
  <div className="row">
<div id="event" data-aos="flip-right"  >

<div className="event-title mx-4 mt-4">
<h5>رویداد از طراحان درباره از طراحان درباره از طراحان درباره</h5>
</div>

<div className="event-text mx-4">

<p> از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباز طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره</p>

</div>

<div className="d-flex more m-4">
<Link className="py-3 px-4 text-decoration-none mt-4"><i className="fa-solid fa-arrow-left"></i></Link>
</div>

</div>

<div id="event-sec" data-aos="flip-up" >

<div className="event-title mx-4 mt-4">
<h5>رویداد از طراحان درباره از طراحان درباره از طراحان درباره</h5>
</div>

<div className="event-text mx-4">

<p> از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباز طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره</p>

</div>

<div className="d-flex justify-content-center more m-4">
<Link className="py-3 px-4 text-decoration-none mt-4"><i className="fa-solid fa-arrow-left"></i></Link>
</div>

</div>


<div id="event-third" data-aos="flip-left" >

<div className="event-title mx-4 mt-4">
<h5>رویداد از طراحان درباره از طراحان درباره از طراحان درباره</h5>
</div>

<div className="event-text mx-4">

<p> از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباز طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره از طراحان درباره</p>

</div>

<div className="d-flex justify-content-end more m-4">
<Link className="py-3 px-4 text-decoration-none mt-4"><i className="fa-solid fa-arrow-left"></i></Link>
</div>

</div>
</div>
</div>

</div>

        
        </>
    )
}


export default EventsMainPage;