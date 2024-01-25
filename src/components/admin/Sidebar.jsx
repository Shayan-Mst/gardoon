
import { useEffect, useState } from "react";
import React from "react";
import { useLocation,Link } from "react-router-dom";








const Sidebar = ({setSide}) => {

const [isOpen,setIsOpen] = useState(true);
    
const [isHovering, setIsHovering] = useState(false);

const [whichElement,setWhichElement] = useState('')

const location = useLocation();



{/* side bar toggle*/}
useEffect(() => {

  const labels = document.querySelectorAll('.label');
  const icons = document.querySelectorAll('ul li i');
 

    icons.forEach(icon => {
      if(isOpen == false){
      
        setSide(false)
        icon.classList.add('fa-lg')
        icon.style.marginBottom = '1.5rem'
       
      }
      
      else {
        
        setSide(true)
        icon.style.marginBottom = '0'
      
      icon.classList.remove('fa-lg')
      }
      
      
      
        });
      
        // Set the "display" property to "none" for each element
        labels.forEach(label => {
          if(isOpen == false){


          setSide(false)
            label.style.display = 'none';
           
            
            
          }
          else{
            
            setSide(true)
            label.style.display = 'block';
      
          
        }
        });




})

const sideToggle = () => {
  
  setIsOpen(prev => !prev);


};

{/* side bar x*/}





{/* on hovering */}

function handleMouseEnter(which) {
  setIsHovering(true);
  setWhichElement(which)
}

function handleMouseLeave() {
  setIsHovering(false);
}

{/* on hovering */}

    return(
    
    
    
    <>
    
   
<div className={`sidebar ${isOpen ? 'active':null}`} id='sidebar'>
  <div className="contain">
<i onClick={sideToggle} className="fa-solid fa-bars fa-2xl toggle"/>

  <ul>

     <li>
    
      <i  onMouseEnter={() => handleMouseEnter('news')}
        onMouseLeave={handleMouseLeave}  className="fa-solid fa-newspaper"></i>
      {isHovering && !isOpen && whichElement ==='news' &&(
          <div className="description">
            <span>مدیریت اخبار</span>
          </div>
        )}
      <Link to='/page/admin/news-manage'
       
        
    className={`label ${location.pathname.startsWith('/page/admin/news-manage') ? 'active': null}`} >مدیریت اخبار</Link>
      </li>
     <li>
      <i onMouseEnter={() => handleMouseEnter('event')}
        onMouseLeave={handleMouseLeave}   className="fa-solid fa-users"></i>

      {isHovering && !isOpen && whichElement === 'event'&&(
          <div className="description ">
            <span>مدیریت رویداد</span>
          </div>
        )}
      <Link to='/page/admin/event-manage'
     className={`label ${location.pathname.startsWith('/page/admin/event-manage') ? 'active': null}`}>مدیریت رویداد ها</Link>
      
      </li>
      <li>
        <i onMouseEnter={() => handleMouseEnter('gallery')}
        onMouseLeave={handleMouseLeave} className="fa-solid fa-images"></i>

{isHovering && !isOpen && whichElement === 'gallery'&&(
          <div className="description ">
            <span>مدیریت گالری تصاویر</span>
          </div>
        )}
      <Link 
      to='/page/admin/gallery-manage'
     
      
      className={`label ${location.pathname.startsWith('/page/admin/gallery-manage') ? 'active': null}`}>مدیریت گالری تصاویر</Link>
      
      </li>
      <li>
      <i onMouseEnter={() => handleMouseEnter('slide')}
        onMouseLeave={handleMouseLeave} className="fa-solid fa-sliders"></i>

{isHovering && !isOpen && whichElement === 'slide'&&(
          <div className="description ">
            <span>مدیریت اسلاید</span>
          </div>
        )}
        <Link to='/page/admin/slide-manage'    className={`label ${location.pathname.startsWith('/page/admin/slide-manage')  ? 'active': null}`}>مدیریت اسلاید </Link>
        
        </li>
      <li>
      <i onMouseEnter={() => handleMouseEnter('anounce')}
        onMouseLeave={handleMouseLeave} className="fa-solid fa-scroll"></i>

{isHovering && !isOpen && whichElement === 'anounce'&&(
          <div className="description ">
            <span>مدیریت اطلاعیه ها</span>
          </div>
        )}
        <Link to='/page/admin/anounce-manage'  className={`label ${location.pathname.startsWith('/page/admin/anounce-manage') ? 'active': null}`}>مدیریت اطلاعیه ها</Link>
        </li>

        <li>
        <i onMouseEnter={() => handleMouseEnter('infoEdit')}
        onMouseLeave={handleMouseLeave} className="fa-solid fa-circle-info"></i>

{isHovering && !isOpen && whichElement === 'infoEdit'&&(
          <div className="description ">
            <span>ویرایش اطلاعات</span>
          </div>
        )}
        <Link to='/page/admin/info-manage/1/'  className={`label ${location.pathname.startsWith('/page/admin/info-manage') ? 'active': null}`}>ویرایش اطلاعات </Link>
        </li>


        <li>
        <i onMouseEnter={() => handleMouseEnter('eduCal')}
        onMouseLeave={handleMouseLeave} className="fa-solid fa-timeline"></i>

{isHovering && !isOpen && whichElement === 'eduCal'&&(
          <div className="description ">
            <span>مدیریت تقویم آموزشی</span>
          </div>
        )}
        <Link to='/page/admin/eduCal-manage'  className={`label ${location.pathname.startsWith('/page/admin/eduCal-manage') ? 'active': null}`}>مدیریت تقویم آموزشی</Link>
        </li>


      
  </ul>
  </div>
</div>
    
   
   
    
    </>)



    }



export default Sidebar;