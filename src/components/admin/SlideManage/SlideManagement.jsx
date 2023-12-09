import Sidebar from "../Sidebar"
import { useState,useEffect,useRef } from "react";
import imgPlc from './../../../assets/plc.avif'
import 'react-quill/dist/quill.snow.css';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { createSlide } from "../../../service/gardoonService";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'

const SlideManagement = () => {

    

    const [isDragActive, setIsDragActive] = useState(false);

   const [slide,setSlide] = useState({})

    const [side,setSide] = useState(true)

    const [selectedImage, setSelectedImage] = useState(null);

    const handleClose = () => setShowModal(false);

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {


        const page = document.querySelector('.slide-manage')
        
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

          const onSlideChange = (event) =>{

setSlide({...slide,[event.target.name] : event.target.value})

          }

          const handleAx = async (event) => {

            const file = event.target.files[0];
           const base64  = await convertBase64(file);
          setSelectedImage(base64)
            setSlide({...slide,image: file});
          
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
            console.log(slide);


            if(slide.title != '' && slide.description != '' && slide.image != null){

             
             try{

               const response = await createSlide(slide)
               
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
    
    <form className="slide-manage" onSubmit={handleSubmit}>

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
  <input onChange={handleAx} type="file" id="images" accept="image/*"/>
</label>



  
</div>

<div className="col-lg-6">

<img className="img-fluid" src={selectedImage == null ? imgPlc : selectedImage} alt="mamad"/>

</div>


</div>

<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> اسلاید</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر </span>اسلاید</span>

<span style={{fontSize:"10px"}} className="d-flex justify-content-end">85 / {slide.length}</span>

<textarea name="title" maxLength={85} value={slide.title} onChange={onSlideChange} className="input-admin" placeholder="اینجا بنویسید..."></textarea>


<span className="d-flex my-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیح</span>اسلاید</span>

<span style={{fontSize:"10px"}} className="d-flex justify-content-end">110 / {slide.length}</span>

<textarea name="description" maxLength={110} value={slide.description} onChange={onSlideChange} className="input-admin" placeholder="اینجا بنویسید..."></textarea>



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



export default SlideManagement;