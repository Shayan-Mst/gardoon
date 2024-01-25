
import earth from "./../../assets/earth.jpg"
import {  Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import lamp from "./../../assets/lamp.jpg"
import teach from "./../../assets/teach.jpg"
import laptop from "./../../assets/laptop.jpg"
import Comments from "./Comments";
import Social from './Social';
import { getNews } from "../../service/gardoonService";
import moment from 'jalali-moment';



const New = () => {

const [show,setShow] = useState('anounce')

const nameRef = useRef();

const infoRef = useRef();

const commentRef = useRef();

const {newsId} = useParams();

const [news,setNews] = useState([]);

const handleActive = (which) =>{

    if( which == 1 ) setShow('anounce');
    else if( which == 2 ) setShow('event');
    else if( which == 3 ) setShow('comment');


}


useEffect(()=>{

const fetchData = async() =>{

    try{

        const {data:newData} = await getNews(newsId);

        setNews(newData);
       
    }

    catch(error){


        console.log(error)
    }


}

fetchData();

},[])



return(<>

<section className="single-news">

<div style={{maxWidth:"1450px"}} className="container">


<div className="grid">


<div className="row">
    

<div className="col-lg-7">


<div className="t-container fs-5">
{news.title}
</div>

<div className="date-p ">
<i style={{marginRight:"1rem"}} className="fa-solid fa-calendar-days"/>
<span className=" mb-2 mx-1">{moment(news.created).format('YYYY/MM/DD')}</span>

<i style={{marginRight:"5%"}} className="fa-solid fa-folder"/>
<span className=" mb-2 mx-1">{news.category}</span>

</div>

<div className="img-container">
<img src={`http://127.0.0.1:8000${news.image}`} className="img-thumbnail  rounded mx-auto d-block" />
</div>



<div className="d-container">
    <p>
  {news.description}

    </p>


    
</div>
 
 

</div>


<div className="col-lg-5">

<div className="side-access">

<div style={{height:"44px"}} className="w-100 input-group d-flex">
  
  <div className="input">
  <input className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
  </div>
  <div className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>

<span className="d-flex fs-6 my-4 mx-2 py-2">اخبار تازه</span>

<ul className="px-1">

<li className="side-news">
    
<i className="fa-solid fa-angle-left px-2"/>
<Link>
سال تحصیلی جدید با امکانات جدید آغاز می شود!



</Link>

</li>

<li className="side-news">
<i className="fa-solid fa-angle-left px-2"/>
<Link>
سال تحصیلی جدید با امکانات جدید آغاز می شود!

</Link>

</li>


<li className="side-news">

<i className="fa-solid fa-angle-left px-2"/>
<Link>
سال تحصیلی جدید با امکانات جدید آغاز می شود!

</Link>
</li>

</ul>


<section className="side-group">

<nav className="nav-tab">
    <ul>
<li onClick={() => handleActive(1)} className={`pt-3 ${show === 'anounce' ? 'active' : null }`}>اطلاعیه ها</li>
<li onClick={() => handleActive(2)} className={`pt-3 ${show === 'event' ? 'active' : null }`}>رویداد ها</li>
<li  onClick={() => handleActive(3)} className={`pt-3 ${show === 'comment' ? 'active' : null }`}><i className="fa-solid fa-comment"></i></li>
    </ul>
</nav>



<ul className={`nav-content ${show === 'anounce' ? 'active' : null }`}>
<li className="anounce-s">
        <div className='grid h-100'>
            <div className='row h-100'>
                <div className='col-lg-2'>
        <div className="image-c">
        <img className="img-fluid" src={lamp}/>
        </div>
        </div>
        <div className='col-lg-10'>
        <div className="placeholder-c">
        <Link>مهلت دفاع از پروژه کارشناسی تا هفته اول شهریور</Link>


        <div className="date-p">
<span className=" mb-2 mx-1">28 بهمن 1402</span>
</div>
</div>
</div>
</div>
</div>
    </li>
    <li className="anounce-s">
        <div className='grid h-100'>
            <div className='row h-100'>
                <div className='col-lg-2'>
        <div className="image-c">
        <img className="img-fluid" src={teach}/>
        </div>
        </div>
        <div className='col-lg-10 '>
        <div className="placeholder-c">
        <Link>مهلت دفاع از پروژه کارشناسی تا هفته اول شهریور</Link>


        <div className="date-p">
<span className=" mb-2 mx-1">28 بهمن 1402</span>
</div>
</div>
</div>
</div>
</div>
    </li>
    <li className="anounce-s">
        <div className='grid h-100'>
            <div className='row h-100'>
                <div className='col-lg-2'>
        <div className="image-c">
        <img className="img-fluid" src={laptop}/>
        </div>
        </div>
        <div className='col-lg-10'>
        <div className="placeholder-c">
        <Link>مهلت دفاع از پروژه کارشناسی تا هفته اول شهریور</Link>


        <div className="date-p">
<span className=" mx-1">28 بهمن 1402</span>
</div>
</div>
</div>
</div>
</div>
    </li>
</ul>




<ul className={`nav-content ${show === 'event' ? 'active' : null }`}>
<li className="anounce-s">
        <div className='grid h-100'>
            <div className='row h-100'>
                <div className='col-lg-2'>
        <div className="image-c">
        <img className="img-fluid" src={teach}/>
        </div>
        </div>
        <div className='col-lg-10'>
        <div className="placeholder-c">
        <Link>
       مهلت دفاع از پروژه کارشناسی تا هفته اول شهریور
         </Link>


        <div className="date-p">
<span className=" mb-2 mx-1">28 بهمن 1402</span>
</div>
</div>
</div>
</div>
</div>
    </li>
    <li className="anounce-s">
        <div className='grid h-100'>
            <div className='row h-100'>
                <div className='col-lg-2'>
        <div className="image-c">
        <img className="img-fluid" src={lamp}/>
        </div>
        </div>
        <div className='col-lg-10'>
        <div className="placeholder-c">
        <Link>مهلت دفاع از پروژه کارشناسی تا هفته اول شهریور</Link>


        <div className="date-p">
<span className=" mb-2 mx-1">28 بهمن 1402</span>
</div>
</div>
</div>
</div>
</div>
    </li>
    <li className="anounce-s">
        <div className='grid h-100'>
            <div className='row h-100'>
                <div className='col-lg-2'>
        <div className="image-c">
        <img className="img-fluid" src={laptop}/>
        </div>
        </div>
        <div className='col-lg-10'>
        <div className="placeholder-c">
        <Link>مهلت دفاع از پروژه کارشناسی تا هفته اول شهریور</Link>


        <div className="date-p">
<span className=" mb-2 mx-1">28 بهمن 1402</span>
</div>
</div>
</div>
</div>
</div>
    </li>
</ul>

<ul className={`overflow-y-scroll nav-content ${show === 'comment' ? 'active' : null }`}>

<li ref={commentRef} className="cm-section">
        

        <div className="cm-bio">
        <span ref={nameRef} className='cm-name m-2 px-2'>محمد حسین </span>

<span className=" mb-2 mx-1 date-p">28 بهمن 1402</span>

<span className='reply'>پاسخ</span>

</div>
<p ref={infoRef} className='cm-info m-2 px-3'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>

<div style={{height:"20px"}}></div>
    </li>


    
</ul>
</section>
</div>
</div>
</div>
</div>
</div>
</section>
<Comments nameRef={nameRef} infoRef = {infoRef} commentRef={commentRef} setShow = {setShow}/>


<Social/>
</>)

}




export default New;