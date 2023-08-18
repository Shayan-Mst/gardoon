import React from "react"
import TopImageSlider from "./mainpageItems/TopImageSlider";
import ImageGallery from './mainpageItems/ImageGallery'
import InfoSlider from "./mainpageItems/InfoSlider";
import TimeLine from "./mainpageItems/TimeLine";
import EventsMainPage from "./mainpageItems/EventsMainPage";
import NewsMainPage from "./mainpageItems/NewsMainPage";
import About from "./mainpageItems/About";
import QuickAccess from "./mainpageItems/QuickAccess";
import { useState,useEffect,useRef } from "react";
import Cookies from "js-cookie";


const MainPage = () => {


    
  const [isVisible, setIsVisible] = useState(false);

 
    const handleBeforeUnload = () => {
      Cookies.set('visited','false')
    };
  
    useEffect(() => {
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        Cookies.set('visited','true')
      };
    }, []);
  
 
 
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 1350
    if (scrollPosition >= maxScroll) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  };

    return(
<>

<TopImageSlider/>


 {/*section one*/}



 {/*section one*/}
 

 {/*Quick Access*/}

<QuickAccess/>

  {/*Quick Access*/}


{/*section news*/}

<NewsMainPage/>

{/*section news*/}


{/*section event*/}

<EventsMainPage/>
{/*section event*/}



{/* Etelaye slider*/}

<InfoSlider/>

{/* Etelaye slider*/}




{/*timeline*/}

<TimeLine/>

{/*timeline*/}

{/*gallery end */}
<ImageGallery/>

{/*gallery end */}

<button
      className={`scroll-to-top-btn ${isVisible ? 'show' : null}`}
      onClick={handleClick}
    >
      <i className="fa-solid fa-turn-up"></i>
    </button>
</>
    )
}

export default MainPage;