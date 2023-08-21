import Sidebar from "../Sidebar";
import { useState ,useEffect} from "react";
import semnan1 from './../../../assets/semnan.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";





const GalleryEdit = () => {


    const [side,setSide] = useState(true);
    const [titr, setTitr] = useState('');

    
    useEffect(()=>{

        const page = document.querySelector('.gallery-edit')
            
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'
    
    
      })

    
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


      const titrHandle = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 100) {
          setTitr(inputValue);
         
        }
      }
    



    return (
     <>
    <Sidebar setSide={setSide}/>

<form className="gallery-edit">
<span className="d-flex tit">ویرایش<span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> گالری</span>


<div className="picture-container m-3">



<label onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
htmlFor="images" className="drop-container" id="dropcontainer">
  <span className="drop-title">Drop files here</span>
  or
  <input type="file" id="images" accept="image/*" required/>
</label>


<img className="img-fluid mx-0 mt-4" src={semnan1} alt="mamad"/>


</div>

<div className="text">
<span className="d-flex tit mb-4">ویرایش<span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> عکس</span>


<span style={{fontSize:"10px"}} className="d-flex justify-content-end">100 / {titr.length}</span>

<textarea  className="input-admin" type="text" value={titr} onChange={titrHandle} />


</div>


<div className="btn-g">
<button className="btn btn-warning"  type="submit">ویرایش</button>
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
  };



  export default GalleryEdit;