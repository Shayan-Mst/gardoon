import Sidebar from "../Sidebar";
import { useState,useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { gardoonContext } from "../../../context/gardoonContext";
import { getNews, updateNews } from "../../../service/gardoonService";
import toast, { Toaster } from 'react-hot-toast';




const NewsEdit = () => {

    const [side,setSide] = useState(true);

    const [isDragActive, setIsDragActive] = useState(false);

    const {newsId} = useParams();

    const {news,setNews} = useContext(gardoonContext);

    const [selectImg,setSelectImg] = useState(null);

    const [newq,setNewq] = useState({
   
    News:{}

    });

    const [updateContain,setUpdateContain] = useState({
      updated : {}
    })

  
    const navigate = useNavigate();

    useEffect(()=>{

      const fetchData = async () => {
           
        try{

            
         const {data : newData} = await getNews(newsId);
          
         setNewq(newData);
         setUpdateContain(newData)

          
        }
        catch(err){

            console.log(err);
          
        }

    

    }

fetchData();



    },[])


    

    useEffect(() => {

              const page = document.querySelector('.news-edit')
              
              if(side == false) page.style.marginRight='5%'
              
              else page.style.marginRight = '15%'
      
      
              
              })


              function handleDragOver(event) { event.preventDefault(); }
            
              function handleDragEnter() {setIsDragActive(true); }
            
              function handleDragLeave() { setIsDragActive(false);}
            
              function handleDrop(event) {
                event.preventDefault();
                setIsDragActive(false);
                const fileInput = document.getElementById('images');
                fileInput.files = event.dataTransfer.files;
              }

              const handleAx = async(event) => {

                const file = event.target.files[0];
               const base64  = await convertBase64(file);

                setSelectImg(base64);
                setUpdateContain({...updateContain,
                [event.target.name] : file
                
                });
              
              }


              const convertBase64 = (file) =>{


                return new Promise((resolve,reject) => {
              const fileReader = new FileReader();
              fileReader.readAsDataURL(file)
              
              fileReader.onload = () => {
              
                resolve(fileReader.result)
              }
              
              fileReader.onerror = (error) =>{
              
              reject(error)
              }
              
                })
              }


const onNewsChange = (event) =>{

 

  setUpdateContain( {
      ...updateContain,
      [event.target.name] : event.target.value,
  
});


  
  };

const notify = () =>  
  
  toast.success('ویرایش با موفقیت انجام شد.', {
    duration: 4000,
    position: 'top-center',
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });



const handleUpdate = async(event) =>{

  event.preventDefault();
  const modifiedContent = {}
  


if(newq.title != updateContain.title){
  
  modifiedContent['title'] = updateContain.title;
}

if(newq.description != updateContain.description){
  
  modifiedContent['description'] = updateContain.description;
}

if(newq.category != updateContain.category){
  
  modifiedContent['category'] = updateContain.category;
}

if(updateContain.image instanceof File){

  modifiedContent['image'] = updateContain.image
}
  
  
console.log(modifiedContent)

try{
const {status} = await updateNews(

  modifiedContent,newsId
)

if(status == 201){



setTimeout(() => {
  // Code to be executed after 5 seconds
  navigate('/page/admin/news-manage/update');
}, 5000);
}
}
catch(error){

console.log(error)
}

}
  


return(<>

<Sidebar setSide = {setSide}/>  

{Object.keys(newq).length && (


<form onSubmit={handleUpdate} className="news-edit">

<span className="d-flex tit">ویرایش<span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> خبر</span>

<div className="picture-container mb-3 d-flex">

<div className="col-lg-6">


    

<label onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
htmlFor="images" className="drop-container" id="dropcontainer">
  <span className="drop-title">Drop files here</span>
  or
  <input name="image" onChange={handleAx} type="file" id="images" accept="image/*"/>
</label>

</div>

<div className="col-lg-6">

<img className="img-fluid" src={selectImg == null ?`http://127.0.0.1:8000${newq.image}`:selectImg} alt="mamad"/>

</div>


</div>


<div className="text">
<span className="d-flex tit mb-4">ویرایش<span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> خبر</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span style={{color:"rgb(0,177,106)"}}>تیتر </span>خبر
</span>

<textarea maxLength="130" value={updateContain.title} onChange={onNewsChange} name="title" className="input-admin" placeholder="اینجا بنویسید..."></textarea>

<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-1" style={{color:"rgb(0,177,106)"}}>توضیحات</span>خبر</span>

<textarea value={updateContain.description} onChange={onNewsChange} name="description"  className="input-admin" placeholder="اینجا بنویسید..."/>
</div>


<div className="d-flex">

<div className="form-check m-4">
  <input  value = "دانشجویی" checked={updateContain.category == 'دانشجویی'} onChange={onNewsChange} className="form-check-input" type="radio" name="category" id="flexRadioDefault1"/>
  <label  className="form-check-label" htmlFor="flexRadioDefault1">
    دانشجویی
  </label>
</div>
<div className="form-check m-4">
  <input  value = "فرهنگی و اجتماعی" checked={updateContain.category == 'فرهنگی و اجتماعی'} onChange={onNewsChange} className="form-check-input" type="radio" name="category" id="flexRadioDefault2"/>
  <label  className="form-check-label" htmlFor="flexRadioDefault2">
    فرهنگی و اجتماعی
  </label>
</div>

<div className="form-check m-4">
  <input value = "ریاستی" checked={updateContain.category == 'ریاستی'} onChange={onNewsChange} className="form-check-input" type="radio" name="category" id="flexRadioDefault3"/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    ریاستی
  </label>
</div>
<div className="form-check m-4">
  <input  value = "ورزشی" checked={updateContain.category == 'ورزشی'} onChange={onNewsChange} className="form-check-input" type="radio" name="category" id="flexRadioDefault4"/>
  <label className="form-check-label" htmlFor="flexRadioDefault4">
    ورزشی
  </label>
</div>
<div className="form-check m-4">
  <input value = "سایر موضوعات" checked={updateContain.category == 'سایر موضوعات'} onChange={onNewsChange}  className="form-check-input" type="radio" name="category" id="flexRadioDefault5"/>
  <label className="form-check-label" htmlFor="flexRadioDefault5">
   سایر موضوعات
  </label>
  
</div>
</div>



<div className="btn-g">
<button className="btn btn-warning"  type="submit">ویرایش</button>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        انتخاب کنید
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  as="button"><Link to="/page/admin/news-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/news-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown>
    </div>





</form>

)}
<button onClick={notify}>toast!</button>


</>)

}

export default NewsEdit;