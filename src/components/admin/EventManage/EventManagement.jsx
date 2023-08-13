import { useEffect, useState , useRef } from "react"
import Sidebar from "../Sidebar"
import sem from './../../../assets/semnan.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import ReactQuill from 'react-quill';

import { Link } from "react-router-dom";



const EventManagement = () => {

  const [side,setSide] = useState(true);

  const [titr, setTitr] = useState('');

  const [dsc,setDsc] = useState('')

  const [isDragActive, setIsDragActive] = useState(false);


  const inputRef = useRef(['']);

  useEffect(()=>{

    const page = document.querySelector('.event-manage')
        
    if(side == false) page.style.marginRight='5%'
    
    else page.style.marginRight = '15%'


  })


  const titrHandle = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 100) {
      setTitr(inputValue);
     
    }
  }


  const dscHandle = (event) => {

   
      setDsc(event.target.value);
     
    
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

return(
    <>

    <Sidebar setSide={setSide}/>

    <form className="event-manage">
    

    <span className="d-flex tit">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> رویداد</span>


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
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> رویداد</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر </span>رویداد</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">100 / {titr.length}</span>

<textarea  className="input-admin" type="text" value={titr} onChange={titrHandle} />


<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>رویداد</span>

<ReactQuill  style={{direction:"rtl"}} theme="snow" value={dsc} onChange={dscHandle} placeholder="اینجا بنویسید..."/>

</div>

<div className="btn-g">
<button className="btn btn-success"  type="submit">انتشار</button>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        انتخاب کنید
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  as="button"><Link to="/page/admin/event-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/event-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown>
    </div>
      
        </form>
    </>
)





}


export default EventManagement