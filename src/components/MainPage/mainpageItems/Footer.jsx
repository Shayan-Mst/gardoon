
import { Link,useLocation } from 'react-router-dom';
import semnanLogo from './../../../assets/semnan logo.png'
import semnan2 from './../../../assets/semnan.jpg'
import semnan3 from './../../../assets/semn.jpg'







const Footer = () => {


function locationClick(){

     window.open("https://www.google.com/maps/@35.6039103,53.4360337,16.23z?entry=ttu")
}
     
         
const location = useLocation();



const shouldNotRender = (
     location.pathname.startsWith('/page/admin')
 )

return(
<>

{
!shouldNotRender
 ?  <footer id="footer">

<div className="row">

         <div  className="col-lg-3 col-sm-12">
<div id="about">
     <div className='d-flex'>
<img className='p-1' style={{width:"50px",height:"50px",backgroundColor:"rgb(0,177,106)"}} src={semnanLogo}/>
<span className='d-flex align-items-center mx-4' style={{fontSize:"21px"}}><strong>دانشگاه سمنان</strong></span>

</div>
<span style={{width:"200px",height:"100px"}} className='d-flex mt-4 i'>
     <span style={{textAlign:"justify",fontSize:"13px",wordSpacing:'normal'}}>


     ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
     </span>
</span>
<div className='mt-4 d-flex '>
<i style={{color:'rgb(0,177,106)',paddingTop:'3px'}} className="fa-solid fa-phone"/>
<span style={{fontSize:"13px"}} className='px-3'>023-10020030</span>
</div>

<div className='mt-3 d-flex'>
<i style={{color:'rgb(0,177,106)',paddingTop:'3px'}} className="fa-solid fa-envelope"/>
<span style={{fontSize:"13px"}} className='px-3'>example@email.com</span>
</div>

<div className='mt-3 d-flex'>
<i onClick={locationClick} style={{color:'rgb(0,177,106)',paddingTop:'3px',cursor:"pointer"}} className="fa-solid fa-location-dot"/>
<span onClick={locationClick} style={{wordSpacing:"2px",fontSize:"13px",cursor:"pointer",textAlign:"justify"}} className='px-3 '> سمنان ، بعد از میدان استاندارد روبروی پارک سوکان</span>
</div>


</div>
         </div>

         <div className="col-lg-3 col-sm-6">
            
         <div id="useful-links">
         <div className='d-block'>
<span className='d-flex align-items-center mx-4 py-2' style={{fontSize:"22px"}}><strong>صفحات</strong></span>

<div className='separate m-4 '></div>
<div className='d-flex m-4'>
<Link style={{color:'rgb(0,177,106)'}} className='text-decoration-none' to='/'>خانه</Link>
</div>

<div className='d-flex m-4'>
<Link className='text-decoration-none ' to='/news'>اخبار و مقالات</Link>
</div>

<div className='d-flex m-4'>
<Link className='text-decoration-none' to='/events'>رویداد ها</Link>

</div>

<div className='d-flex m-4'>
<Link className='text-decoration-none' to='/gspin'>گردون</Link>
</div>

</div>
    </div>
         </div>


         <div className="col-lg-3 col-sm-6">

         <div id="social">
         <div className='d-block'>
<span className='d-flex align-items-center mx-4 py-2' style={{fontSize:"22px"}}><strong>اجتماعی</strong></span>

<div className='separate m-4 '></div>
<div className='d-flex m-4'>
<Link style={{color:'rgb(0,177,106)'}} className='text-decoration-none' to='/'>تلگرام</Link>
</div>

<div className='d-flex m-4'>
<Link className='text-decoration-none ' to='/'>سایت اصلی</Link>
</div>

<div className='d-flex m-4'>
<Link className='text-decoration-none' to='/'>روبیکا</Link>

</div>

<div className='d-flex m-4'>
<Link className='text-decoration-none' to='/'>ایتا</Link>
</div>

</div>
    </div>
            
        
         </div>

         <div className="col-lg-3 col-sm-12">
            
         <div id="latest-topic">
    

    <div className='d-block'>
<span className='d-flex align-items-center  py-2' style={{fontSize:"22px"}}><strong>آخرین رویداد ها</strong></span>

<div style={{width:"80%"}} className='separate my-4'></div>

<div className='d-flex my-4'>

<div >

     <img className='mb-3' style={{width:"60px",height:"60px" , borderRadius:"50%"}} src={semnan2} alt="" />
     
     <span className='d-inline-block mt-2 mx-3' style={{width:"120px",height:"fit-content",textAlign:"justify"}}><Link className='text-decoration-none ' style={{fontSize:"12px"}}>مسابقات برنامه نویسی به نماینگی استاد</Link></span>
</div>
</div>


<div className='d-flex my-4'>
<div >

     <img className='mb-3' style={{width:"60px",height:"60px" , borderRadius:"50%"}} src={semnan3} alt="" />
     
     <span className='d-inline-block mt-2 mx-3' style={{width:"120px",height:"fit-content",textAlign:"justify"}}><Link className='text-decoration-none' style={{fontSize:"12px"}}>مسابقات برنامه نویسی به نماینگی استاد</Link></span>
</div>
</div>

</div>
</div>
         </div>
         </div>
         
    </footer>: null}

   
    </>
)


}


export default Footer;