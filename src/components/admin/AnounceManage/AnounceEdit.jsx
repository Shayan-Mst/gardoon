import Sidebar from "../Sidebar";
import { useState,useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { gardoonContext } from "../../../context/gardoonContext";
import { getAnounce, getSlide, updateAnounce, updateSlide } from "../../../service/gardoonService";
import toast, { Toaster } from 'react-hot-toast';
import imgPlc from './../../../assets/plc.avif'



const AnounceEdit = () => {






    const [side,setSide] = useState(true);

    const [isDragActive, setIsDragActive] = useState(false);

    const {anounceId} = useParams();

    const {news,setNews} = useContext(gardoonContext);

    const [selectImg,setSelectImg] = useState(imgPlc);

    const [anounce,setAnounce] = useState({ });

    const [updateContain,setUpdateContain] = useState({})

  
    const navigate = useNavigate();

    useEffect(()=>{

        const fetchData = async () => {
             
          try{
  
              
           const {data : newData} = await getAnounce(anounceId);
            
           setAnounce(newData);
            
          }
          catch(err){
  
              console.log(err);
            
          }
  
      }
  
  fetchData();
  
      },[])


      useEffect(()=>{

        const page = document.querySelector('.anounce-manage')
            
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

    const handleFile = async(event) => {

        const file = event.target.files[0];
    
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


const onAnounceChange = (event) =>{



setUpdateContain( {
...updateContain,
[event.target.name] : event.target.value

});



};

    const handleUpdate = async(event) =>{

        event.preventDefault();
        
        
      console.log(updateContain)
      
      try{
      const {status} = await updateAnounce(
      
        updateContain,anounceId
      )
      
      if(status == 201){
      
      
      
      setTimeout(() => {
        // Code to be executed after 5 seconds
        navigate('/page/admin/anounce-manage/update');
      }, 5000);
      }
      }
      catch(error){
      
      console.log(error)
      }
      
      }

    return(<>
    
    
    <Sidebar setSide={setSide}/>
    
    <form className="anounce-manage" onSubmit={handleUpdate}>
    

    <span className="d-flex tit">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> اطلاعیه</span>


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

<img className="img-fluid" src={anounce.image == null || selectImg != imgPlc ? selectImg : `http://127.0.0.1:8000${slide.image}`} alt="mamad"/>

</div>

</div>

<span className="d-flex tit">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> فایل</span> اطلاعیه</span>


<label onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
htmlFor="files" className="drop-container mb-3" id="dropcontainer">
  <span className="drop-title">Drop files here</span>
  or
  <input name="file" onChange={handleFile} type="file" id="files" accept="*/*"/>
</label>


<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> اطلاعیه</span>

<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر</span>اطلاعیه</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">140 / {anounce.length}</span>

<textarea name="title" value={anounce.title} onChange={onAnounceChange} className="input-admin" placeholder="اینجا بنویسید..."></textarea>


<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>اطلاعیه</span>

<textarea name="description" className="input-admin" value={anounce.description} onChange={onAnounceChange} placeholder="اینجا بنویسید..."/>

</div>

<div className="btn-g">
<button className="btn btn-success"  type="submit">انتشار</button>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        انتخاب کنید
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  as="button"><Link to="/page/admin/anounce-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/anounce-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown>
    </div>
      
        </form> 
    
    
    </>)




}


export default AnounceEdit;