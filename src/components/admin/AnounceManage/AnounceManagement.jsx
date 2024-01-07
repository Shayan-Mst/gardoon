import Sidebar from "../Sidebar"
import { useState ,useEffect,useRef } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { createAnounce } from "../../../service/gardoonService";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import imgPlc from './../../../assets/plc.avif'

const AnounceManagement = () => {



    const [side,setSide] = useState(true);

    const [anounce, setAnounce] = useState({
      title:'',
      description:'',
      image:null,
      notif_file:null
    });
  
    const [isDragActive, setIsDragActive] = useState(false);
  
    const [showModal, setShowModal] = useState(false);

    const [selectedImage, setSelectedImage] = useState(null);
    const handleClose = () => setShowModal(false);
  
    useEffect(()=>{
  
      const page = document.querySelector('.anounce-manage')
          
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
  
    
    const onAnounceChange = (event) =>{

      setAnounce({...anounce,[event.target.name] : event.target.value})
      
                }
      
                const handleAx = async (event) => {
      
                  const file = event.target.files[0];
                 const base64  = await convertBase64(file);
                setSelectedImage(base64)
                  setAnounce({...anounce,image: file});
                
                }

                const handleFile = async (event) => {
      
                  const file = event.target.files[0];
                  setAnounce({...anounce,notif_file: file});
                
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
                
      
                const handleSubmit = async event =>{
      
                  event.preventDefault();
                  console.log(anounce);
      
      
                  if(anounce.title != '' && anounce.description != '' && anounce.image != null){
      
                   
                   try{
      
                     const response = await createAnounce(anounce)
                     
                     console.log(response.status)
                     }
                     
                     catch(error){
                     
                       console.log(error)
                     }
      
                  }
      
                  else setShowModal(true)
               
      
         
      
               }
      

    return(<>
    
    <Sidebar setSide={setSide}/>
    
    <form className="anounce-manage" onSubmit={handleSubmit}>
    

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
  <input onChange={handleAx} type="file" id="images" accept="image/*"/>
</label>



  
</div>

<div className="col-lg-6">

<img className="img-fluid" src={selectedImage == null ? imgPlc : selectedImage} alt="mamad"/>

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
  <input onChange={handleFile} type="file" id="files" accept="*/*"/>
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
    
        <Modal centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>خطا در عملیات</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"red"}}>لطفا فیلد های مورد نظر را پر کنید</Modal.Body>
        <Modal.Footer>
          <Button style={{width:"200px"}} variant="dark" onClick={handleClose}>
            متوجه شدم!
          </Button>
          
        </Modal.Footer>
      </Modal>
    
    
    </>)
}



export default AnounceManagement;