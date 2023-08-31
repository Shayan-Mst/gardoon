import Sidebar from "../Sidebar"
import { useState ,useEffect,useRef } from "react";
import sem from './../../../assets/semnan.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import ReactQuill from 'react-quill';

import { Link } from "react-router-dom";


const AnounceManagement = () => {



    const [side,setSide] = useState(true);

    const [value, setValue] = useState('');
  
    const [isDragActive, setIsDragActive] = useState(false);
  
    const [titr,setTitr] = useState('')
  
    
  
    useEffect(()=>{
  
      const page = document.querySelector('.anounce-manage')
          
      if(side == false) page.style.marginRight='5%'
      
      else page.style.marginRight = '15%'
  
  
    })
  

    
    const handleChangeTitr = (event) => {
      const inputValue = event.target.value;
  
      if (inputValue.length <= 140) {
        setTitr(inputValue);
       
      }
    };
  
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
    }
  

    return(<>
    
    <Sidebar setSide={setSide}/>
    
    <form className="anounce-manage">
    

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
  <input type="file" id="images" accept="image/*" required/>
</label>



  
</div>

<div className="col-lg-6">

<img className="img-fluid" src={sem} alt="mamad"/>

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
  <input type="file" id="files" accept="*/*" required/>
</label>


<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> اطلاعیه</span>

<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر</span>اطلاعیه</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">140 / {titr.length}</span>

<textarea value={titr} onChange={handleChangeTitr} className="input-admin" placeholder="اینجا بنویسید..."></textarea>


<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>اطلاعیه</span>

<ReactQuill  style={{direction:"rtl"}} theme="snow" value={value} onChange={setValue} placeholder="اینجا بنویسید..."/>

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



export default AnounceManagement;