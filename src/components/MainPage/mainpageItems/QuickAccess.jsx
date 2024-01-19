import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Aos from "aos";











const QuickAccess = () => {

  const [isHovering,setIsHovering] = useState('')


  useEffect(()=>{

   Aos.init({
      offset:100,
      duration:300,
      easing:'ease-in-sine',
      once : true
  });

        },[])


    
    return(<>
    
    <section className="quick-access d-flex"   data-aos='fade-zoom-in'>
    <div className="icon-link">
  <Link onMouseEnter={() => setIsHovering('a')} onMouseLeave={()=>setIsHovering(null)}  to="https://golestan.semnan.ac.ir/home/Default.htm">
    <div className="icon">
    <i className={`fa-solid fa-atom ${isHovering === 'a'? 'fa-bounce':null}`}></i>
    </div>
    <div className="label">گلستان سمنان</div>
  </Link>
  <Link onMouseEnter={() => setIsHovering('b')} onMouseLeave={()=>setIsHovering(null)} to="https://semnan.ac.ir/">
    <div className="icon">
    <i className={`fa-solid fa-building-columns ${isHovering === 'b'? 'fa-shake':null}`}></i>
    </div>
    <div className="label">دانشگاه سمنان</div>
  </Link>
  <Link onMouseEnter={() => setIsHovering('c')} onMouseLeave={()=>setIsHovering(null)} to="https://profile.semnan.ac.ir/">
    <div className="icon">
    <i className={`fa-solid fa-users ${isHovering === 'c'? 'fa-fade':null}`}></i>
    </div>
    <div className="label">اعضاي هیات علمی</div>
  </Link>

  <Link onMouseEnter={() => setIsHovering('d')} onMouseLeave={()=>setIsHovering(null)} to="https://mail.semnan.ac.ir/">
    <div className="icon">
      <i className={`fas fa-envelope ${isHovering === 'd'? 'fa-spin':null}`}></i>
    </div>
    <div className="label">سرویس رایانامه</div>
  </Link>


  <Link onMouseEnter={() => setIsHovering('e')} onMouseLeave={()=>setIsHovering(null)} to="https://it.semnan.ac.ir/">
    <div className="icon">
    <i className={`fa-solid fa-server ${isHovering === 'e'? 'fa-beat':null}`}></i>
    </div>
    <div className="label">مدیریت فناوری اطلاعات و امنیت فضای مجازی</div>
  </Link>


  <Link onMouseEnter={() => setIsHovering('f')} onMouseLeave={()=>setIsHovering(null)} to="/gallery">
    <div className="icon">
    <i className={`fa-regular fa-image ${isHovering === 'f'? 'fa-flip':null}`}></i>
    </div>
    <div className="label">گالری تصاویر</div>
  </Link>


  <Link onMouseEnter={() => setIsHovering('g')} onMouseLeave={()=>setIsHovering(null)} to="/calendar">
    <div className="icon">
    <i className={`fa-solid fa-circle ${isHovering === 'g'? 'fa-beat-fade':null}`}></i>
    </div>
    <div className="label">گردون</div>
  </Link>

  
</div>

</section>
    </>)
}






export default QuickAccess;