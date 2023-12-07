
import Sidebar from "../Sidebar"
import { useState,useEffect,useRef } from "react";
import sem from './../../../assets/semnan.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import imgPlc from './../../../assets/plc.avif'
import { Link } from "react-router-dom";





const GalleryManagement = () => {

    const [side,setSide] = useState(true);

    
  const [Gallery, setGallery] = useState({
    title : '',
    image:null
  });

  const [isDragActive, setIsDragActive] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const inputRef = useRef(['']);

  useEffect(()=>{

    const page = document.querySelector('.gallery-manage')
        
    if(side == false) page.style.marginRight='5%'
    
    else page.style.marginRight = '15%'


  })


  const handleGallery = (event) => {

    const inputValue = event.target.value;
    if (inputValue.length <= 85) {
      setGallery({...value , title : inputValue});
     
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

  
  
  
const handleAx = async (event) => {

const file = event.target.files[0];
const base64  = await convertBase64(file);
setSelectedImage(base64)
setGallery({...Gallery,image: file});

}


const convertBase64 = (file) =>{


return new Promise((resolve,reject) => {

const fileReader = new FileReader();

fileReader.readAsDataURL(file);


fileReader.onload = () => {


resolve(fileReader.result)

}


fileReader.onerror = (error) =>{


reject(error)

}

})
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
  <input onChange={handleAx} type="file" id="images" accept="image/*" />
</label>

  
</div>

<div className="col-lg-6">

<img className="img-fluid" src={selectedImage == null ? imgPlc : selectedImage} alt="mamad"/>

</div>


</div>

<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> عکس</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر </span>عکس</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">85 / {Gallery.title.length}</span>

<textarea  className="input-admin" type="text" value={Gallery.title} onChange={handleGallery} />

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