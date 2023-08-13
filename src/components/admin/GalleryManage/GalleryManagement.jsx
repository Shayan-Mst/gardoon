
import Sidebar from "../Sidebar"
import { useState,useEffect,useRef } from "react";
import sem from './../../../assets/semnan.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import ReactQuill from 'react-quill';

import { Link } from "react-router-dom";





const GalleryManagement = () => {

    const [side,setSide] = useState(true);

    
  const [value, setValue] = useState('');

  const [isDragActive, setIsDragActive] = useState(false);


  const inputRef = useRef(['']);

  useEffect(()=>{

    const page = document.querySelector('.gallery-manage')
        
    if(side == false) page.style.marginRight='5%'
    
    else page.style.marginRight = '15%'


  })


  const handleGallery = (event) => {

    const inputValue = event.target.value;
    if (inputValue.length <= 85) {
      setValue(inputValue);
     
    }
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
  }


    return(<>
    
    
    
    <Sidebar setSide={setSide}/>
    
    <form className="gallery-manage">

    <span className="d-flex tit">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> گالری</span>


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

<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> عکس</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر </span>عکس</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">85 / {value.length}</span>

<textarea  className="input-admin" type="text" value={value} onChange={handleGallery} />



</div>

<div className="btn-g">
<button className="btn btn-success"  type="submit">انتشار</button>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        انتخاب کنید
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  as="button"><Link to="/page/admin/gallery-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/gallery-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown>
    </div>



    </form>
    
    
    </>)
}



export default GalleryManagement;