

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "jalali-moment";
import { getAllEvents } from "../../service/gardoonService";



const Events = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const [event,setEvent] = useState([]);
    const [filter , setFilter] = useState([]);

    const [qwuery,setQwuery] = useState("");

    const handleOptionChange = (e) => {
        
        setSelectedOption(e.target.value);
        if(e.target.value = 'oldest'){

setFilter(event.reverse())

        }

       else setFilter(event)
      };





      function searchFunction(){

      

  const filtered = event.filter(
    (item) =>
      item.title.toLowerCase().includes(qwuery.toLowerCase()) ||
      item.description.toLowerCase().includes(qwuery.toLowerCase())
  );
  setFilter(filtered);

       
      }



      useEffect(()=>{


        const fetch =  async() =>{
        
      
        
          try{
        const {data : eventData} = await getAllEvents();
        setEvent(eventData);
        setFilter(eventData);
        
          }
          catch(error){
        
        console.log(error)
          }
        }
        
        
        fetch();
        
        
        
        
              },[])

              useEffect(()=>{

if(qwuery.length ==0){

  setFilter(event);
}


              },[qwuery])


           const sortBy = (ctg) =>{


setFilter(event.filter((element)=>element.category == ctg));


           }
    

    return(
        <>
         <div id="Events" className="container p-4">

<section className="events-search-section w-100">

<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex py-2 px-4 ns-heading">جستجوی رویداد ها</div>

<div style={{height:"44px"}} className="w-100 input-group d-flex">

<div className="input">
<input value={qwuery} onChange={(e) => setQwuery(e.target.value)} className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
</div>
<div onClick={searchFunction} className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>

</section>


<div className="row my-4">

 
 <div className="col-lg-4 col-md-4 col-sm-12 my-4 py-4">
<div>
<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">مرتب سازی بر اساس</div>

<form className=" category">

<select className="w-100 py-1 px-4" id="ordering-dropdown"  value={selectedOption} onChange={handleOptionChange}>

<option   value="newest">جدیدترین</option>
<option  value="oldest">قدیمی ترین</option>

</select>


</form>

</div>


<div className="my-4 d-block">
<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">طبقه بندی بر اساس</div>
<form>



<div className="checkBox my-3 px-4">
<input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" name="group" id="flexRadioDefault1"  value="دانشجویی" />
<label className="form-check-label px-2" htmlFor="flexRadioDefault1">دانشجویی</label>
</div>

<div className="checkBox my-3 px-4">
<input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" name="group" id="flexRadioDefault2" value="مذهبی" />
<label className="form-check-label px-2" htmlFor="flexRadioDefault2">مذهبی</label>
</div>

<div className="checkBox my-3 px-4">
<input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" name="group" id="flexRadioDefault3" value="فرهنگی و اجتماعی" />
<label className="form-check-label px-2" htmlFor="flexRadioDefault3">فرهنگی و اجتماعی</label>
</div>

<div className="checkBox my-3 px-4">
<input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" name="group" id="flexRadioDefault4"  value="سایر موضوعات" />
<label className="form-check-label px-2" htmlFor="flexRadioDefault4">سایر موضوعات</label>
</div>



</form>

</div>


<div>



</div>

 </div>
 
 
 <div className="col-lg-8 col-md-8 col-sm-12 my-4 py-4 ">

<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">نتایج جستجو</div>

<div className="my-3 px-2 d-flex"><span className="px-2">{filter.length}</span>نتیجه جستجو</div>

{filter.map((item)=>(

<div key={item.id} className="container mb-4 search-result px-4">

<div className="card h-100">
<div className="card-devide h-100">
<div className="row h-100">
<div  className="col-lg-5 d-flex p-0 h-100">
<img src={`http://127.0.0.1:8000${item.image}`} className="img-fluid w-100" alt="..."/>
</div>

<div className="col-lg-7 col-sm-12">
<div className="card-body h-100">
<Link to={`/events/${item.id}`} className="card-title d-flex pb-1 px-0">{item.title}</Link>
<p >{item.description}</p>
<div className="date-p ">
<i style={{marginRight:"1rem"}} className="fa-solid fa-calendar-days"></i>
<span className=" mb-2 mx-1">{moment(item.created).format('YYYY/MM/DD')}</span>
</div>

</div>
</div>
</div>
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


export default Events;