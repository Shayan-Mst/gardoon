

import { useState } from "react";
import { Link } from "react-router-dom";
import semnan1 from "./../../assets/semnan.jpg"




const Anounces = () => {


    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        
        setSelectedOption(event.target.value);
      };

return(<>


<div id="anounces" className="container p-4">

<section className="anounces-search-section w-100">

<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex py-2 px-4 ns-heading">جستجوی اطلاعیه ها</div>

<div style={{height:"44px"}} className="w-100 input-group d-flex">

<div className="input">
<input className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
</div>
<div className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>

</section>


<div className="row my-4">

 
 <div className="col-lg-4 col-md-4 my-4 py-4">
<div>
<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">مرتب سازی بر اساس</div>

<form className=" category">

<select className="w-100 py-1 px-4" id="ordering-dropdown" value={selectedOption} onChange={handleOptionChange}>

<option  value="newest">جدیدترین</option>
<option value="oldest">قدیمی ترین</option>
<option value="important">مهم ترین</option>
<option value="seen">پربازدیدترین</option>

</select>


</form>

</div>

<div>



</div>

 </div>
 
 
 <div className="col-lg-8 col-md-8 my-4 py-4 ">

<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">نتایج جستجو</div>

<div className="my-3 px-2 d-flex"><span className="px-2">97</span>نتیجه جستجو</div>

<div className="container mb-4 search-result">

<div className="card h-100">
<div className="card-devide h-100">
<div className="row h-100">
<div  className="col-lg-5 d-flex p-0">
<img src={semnan1} className="img-fluid" alt="..."/>
</div>

<div  className="col-lg-7">
<div className="card-body h-100">
<Link className="card-title d-flex pb-1 px-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  برگزیده شده از طرف بزرگان</Link>
<div className="date-p ">
<i style={{marginRight:"1rem"}} className="fa-solid fa-calendar-days"></i>
<span className=" mb-2 mx-1">28 بهمن 1402</span>
</div>

</div>
</div>
</div>
</div>
</div>  
</div>

 </div>

</div>

</div>






</>)


}


export default Anounces;