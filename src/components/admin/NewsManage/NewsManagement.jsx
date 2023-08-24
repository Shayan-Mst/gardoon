import { useEffect,useRef,useState } from "react";
import sem from './../../../assets/semnan.jpg'
import 'react-quill/dist/quill.snow.css';
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { createNews, getNews } from "../../../service/gardoonService";






const NewsManagement = () => {

    const [isDragActive, setIsDragActive] = useState(false);

    const [titr, setTitr] = useState('');

    const [dsc,setDsc] = useState('');


    const [selectedImage, setSelectedImage] = useState();

    const [news,setNews] = useState({

     title :'',
     description:'',
     category:'',
     image : null

    })

    const [side,setSide] = useState(true)

   

    useEffect(() => {
  const page = document.querySelector('.news-manage')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'
console.log(news)
        })


        const handleChangeTitr = (event) => {
          const inputValue = event.target.value;
      
          if (inputValue.length <= 130) {
            setTitr(inputValue);
            setNews({...news,title:titr});
          }
        };


        
        const handleChangeDsc = (event) => {
          
          setDsc(event.target.value);
          setNews({...news,description:dsc});
        };

const handleAx = async (event) => {

  const file = event.target.files[0];
  setSelectedImage(URL.createObjectURL(file))
  const base64  = await convertBase64(file);
  setNews({...news,image: base64});

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


        function handleDragOver(event) {
            event.preventDefault();
          }
        
          function handleDragEnter() {
            setIsDragActive(true);
          }
        
          function handleDragLeave() {
            setIsDragActive(false);
          }
        
          function handleDrop(event) {
            event.preventDefault();
            setIsDragActive(false);
            const fileInput = document.getElementById('images');
            fileInput.files = event.dataTransfer.files;
            setSelectedImage(fileInput.files);
          }


          const handleSubmit = async event =>{

             event.preventDefault();
             console.log(news);

          
   try{

    const response = await createNews(news)
    
    console.log(response.status)
    }
    
    catch(error){
    
      console.log(error)
    }
    

          }

return(<>

<Sidebar setSide = {setSide}/>  

<form  onSubmit={handleSubmit} className="news-manage">

<span className="d-flex tit">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> خبر</span>


<div className="picture-container mb-3 d-flex">

<div className="col-lg-6">


<label onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
htmlFor="images" className="drop-container" id="dropcontainer">
  <span className="drop-title">Drop files here</span>
  or
  <input onChange={handleAx} type="file" id="images" accept="image/*"/>
</label>

  
</div>

<div className="col-lg-6">

<img className="img-fluid" src={selectedImage} alt="mamad"/>

</div>


</div>

<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> خبر</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span style={{color:"rgb(0,177,106)"}}>تیتر </span>خبر
</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">130 / {titr.length}</span>
<textarea value={titr} onChange={handleChangeTitr} className="input-admin" placeholder="اینجا بنویسید..."></textarea>

<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-1" style={{color:"rgb(0,177,106)"}}>توضیحات</span>خبر</span>

<textarea value={dsc} onChange={handleChangeDsc}  className="input-admin" placeholder="اینجا بنویسید..."/>

<div className="d-flex">

<div className="form-check m-4">
  <input   value = "دانشجویی" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label  className="form-check-label" htmlFor="flexRadioDefault1">
    دانشجویی
  </label>
</div>
<div className="form-check m-4">
  <input  value = "فرهنگی و اجتماعی" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label  className="form-check-label" htmlFor="flexRadioDefault2">
    فرهنگی و اجتماعی
  </label>
</div>

<div className="form-check m-4">
  <input value = "ریاستی" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    ریاستی
  </label>
</div>
<div className="form-check m-4">
  <input value = "ورزشی" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
  <label className="form-check-label" htmlFor="flexRadioDefault4">
    ورزشی
  </label>
</div>
<div className="form-check m-4">
  <input value = "سایر موضوعات" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
  <label className="form-check-label" htmlFor="flexRadioDefault5">
   سایر موضوعات
  </label>
</div>
</div>

</div>

<div className="btn-g">
<button className="btn btn-success"  type="submit">انتشار</button>
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


</form></>)

}




export default NewsManagement;