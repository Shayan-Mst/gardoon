
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllNews } from "../../service/gardoonService";
import moment from "jalali-moment";


const News = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const [filter , setFilter] = useState([]);

    const [qwuery,setQwuery] = useState("");


    const handleOptionChange = (event) => {
        
        setSelectedOption(event.target.value);

        if(event.target.value = 'oldest'){

          setFilter(news.reverse())
          
                  }
          
                 else setFilter(news)
      };

      const [news,setNews] = useState([]);


      useEffect(()=>{


        const fetch =  async() =>{
        
      
        
          try{
        const {data : newsData} = await getAllNews();
        setNews(newsData);
        setFilter(newsData)
        
          }
          catch(error){
        
        console.log(error)
        
        
        
          }
        }
        
      
        fetch();
        
        
        
        
              },[])


              useEffect(()=>{

                if(qwuery.length ==0){
                
                  setFilter(news);
                }
                
                
                              },[qwuery])
                
                
                           const sortBy = (ctg) =>{
                
               
              
                  setFilter(news.filter((element)=>element.category == ctg))
                
                
                
                           }


                           function searchFunction(){

      

                            const filtered = news.filter(
                              (item) =>
                                item.title.toLowerCase().includes(qwuery.toLowerCase()) ||
                                item.description.toLowerCase().includes(qwuery.toLowerCase())
                            );
                            setFilter(filtered);
                          
                                 
                                }
return(
    <>
    <div id="News" className="container p-4">

        <section className="news-search-section w-100">

<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex py-2 px-4 ns-heading">جستجوی اخبار</div>

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

         
         <div className="col-lg-4 col-md-4 my-4 py-4">
<div>
<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">مرتب سازی بر اساس</div>

<form className=" category">

      <select className="w-100 py-1 px-4" id="ordering-dropdown" value={selectedOption} onChange={handleOptionChange}>
        
        <option  value="newest">جدیدترین</option>
        <option value="oldest">قدیمی ترین</option>
       
        
      </select>
     

</form>

</div>


<div className="my-4 d-block">
<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">طبقه بندی بر اساس</div>
<form className="py-2 px-4" style={{backgroundColor:"white"}}>


    <div className="checkBox mb-3 ">
      <input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" id="check2" name="group" value="دانشجویی" />
      <label className="form-check-label px-2" htmlFor="check2">دانشجویی</label>
    </div>


    <div className="checkBox mb-3 ">
      <input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" id="check2" name="group" value="فرهنگی و اجتماعی" />
      <label className="form-check-label px-2" htmlFor="check2">فرهنگی و اجتماعی</label>
    </div>

    <div className=" mb-3 checkBox">
      <input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" id="check1" name="group" value="ریاستی"/>
      <label className="form-check-label px-2" htmlFor="check1">ریاستی</label>
    </div>

    <div className="checkBox mb-3 ">
      <input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" id="check2" name="group" value="ورزشی" />
      <label className="form-check-label px-2" htmlFor="check2">ورزشی</label>
    </div>

    


    <div className="checkBox mb-3 ">
      <input onChange={(e) => sortBy(e.target.value)} type="radio" className="form-check-input" id="check2" name="group" value="سایر موضوعات" />
      <label className="form-check-label px-2" htmlFor="check2">سایر موضوعات</label>
    </div>


</form>

</div>


<div>



</div>

         </div>
         
         
         <div className="col-lg-8 col-md-8 my-4 py-4 ">

<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="d-flex py-2 px-4 ns-heading">نتایج جستجو</div>

<div className="my-3 px-2 d-flex"><span className="px-2">{filter.length}</span>نتیجه جستجو</div>
{filter.map((item)=>(

<div key={item.id} className="container mb-4 search-result px-4">

<div className="card h-100">
  <div className="card-devide h-100">
<div className="row h-100">
<div  className="col-lg-5 col-sm-12 d-flex p-0 h-100">
  <img src={`http://127.0.0.1:8000${item.image}`} className="img-fluid w-100" alt="..."/>
  </div>

  <div className="col-lg-7 col-sm-12">
   <div className="card-body h-100">
    <Link to={`/news/${item.id}`} className="card-title d-flex pb-1 px-0">{item.title}</Link>
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


export default News;