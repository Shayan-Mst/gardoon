import Sidebar from "../Sidebar"
import { useState,useEffect,useRef } from "react";

import sem from './../../../assets/semnan.jpg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const SlideManagement = () => {

    

    const [isDragActive, setIsDragActive] = useState(false);

    const [value, setValue] = useState('');

    const [value1,setValue1] = useState('');

    const [side,setSide] = useState(true)

    

    useEffect(() => {


        const page = document.querySelector('.slide-manage')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'

        })


        const handleValue = (event) => {
          const inputValue = event.target.value;
          if (inputValue.length <= 85) {
            setValue(inputValue);
           
          }
        }

        const handleValue1 = (event) => {
          const inputValue = event.target.value;
          if (inputValue.length <= 110) {
            setValue1(inputValue);
           
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
    
    <form className="slide-manage">

<span className="d-flex tit">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> اسلاید صفحه اصلی</span>


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
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> اسلاید</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر </span>اسلاید</span>

<span style={{fontSize:"10px"}} className="d-flex justify-content-end">85 / {value.length}</span>

<textarea value={value} onChange={handleValue} className="input-admin" placeholder="اینجا بنویسید..."></textarea>


<span className="d-flex my-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیح</span>اسلاید</span>

<span style={{fontSize:"10px"}} className="d-flex justify-content-end">110 / {value1.length}</span>

<textarea value={value1} onChange={handleValue1} className="input-admin" placeholder="اینجا بنویسید..."></textarea>



</div>

<div className="btn-g">
<button className="btn btn-success"  type="submit">انتشار</button>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        انتخاب کنید
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  as="button"><Link to="/page/admin/slide-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/slide-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown>
    </div>


</form>
    
    
    
    </>)
}



export default SlideManagement;