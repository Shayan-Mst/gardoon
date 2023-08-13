
import { useState } from "react";
import { Link } from "react-router-dom";
import semnan1 from "./../../assets/semnan.jpg"



const News = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        
        setSelectedOption(event.target.value);
      };

return(
    <>
    <div id="News" className="container p-4">

        <section className="news-search-section w-100">

<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex py-2 px-4 ns-heading">جستجوی اخبار</div>

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


<div className="my-4 d-block">
<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">طبقه بندی بر اساس</div>
<form className="py-2 px-4" style={{backgroundColor:"white"}}>

<div className="checkBox mb-3 ">
      <input type="checkbox" className="form-check-input" id="check2" name="option1" value="something" defaultChecked/>
      <label className="form-check-label px-2" htmlFor="check2">مهم ترین</label>
    </div>




    <div className="checkBox mb-3 ">
      <input type="checkbox" className="form-check-input" id="check2" name="option1" value="something" defaultChecked/>
      <label className="form-check-label px-2" htmlFor="check2">دانشجویی</label>
    </div>


    <div className="checkBox mb-3 ">
      <input type="checkbox" className="form-check-input" id="check2" name="option1" value="something" defaultChecked/>
      <label className="form-check-label px-2" htmlFor="check2">فرهنگی و اجتماعی</label>
    </div>

    <div className=" mb-3 checkBox">
      <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something"/>
      <label className="form-check-label px-2" htmlFor="check1">ریاستی</label>
    </div>

    <div className="checkBox mb-3 ">
      <input type="checkbox" className="form-check-input" id="check2" name="option1" value="something" />
      <label className="form-check-label px-2" htmlFor="check2">ورزشی</label>
    </div>

    


    <div className="checkBox mb-3 ">
      <input type="checkbox" className="form-check-input" id="check2" name="option1" value="something" />
      <label className="form-check-label px-2" htmlFor="check2">سایر موضوعات</label>
    </div>


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
<div  className="col-lg-5 col-sm-12 d-flex p-0">
  <img src={semnan1} className="img-fluid" alt="..."/>
  </div>

  <div className="col-lg-7 col-sm-12">
   <div className="card-body h-100">
    <Link className="card-title d-flex pb-1 px-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </Link>
    <p >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
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
    
    </>
)


}


export default News;