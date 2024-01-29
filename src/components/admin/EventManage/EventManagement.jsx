import { useEffect, useState , useRef } from "react"
import Sidebar from "../Sidebar"
import Dropdown from 'react-bootstrap/Dropdown';
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { createEvent } from "../../../service/gardoonService";
import imgPlc from './../../../assets/plc.avif'
import toast,{ Toaster } from "react-hot-toast";


const EventManagement = () => {

  const [side,setSide] = useState(true);

  const [isDragActive, setIsDragActive] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const [events,setEvents] = useState({

    title :'',
    description:'',
    category:'',
    image : null

   })



  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{

    const page = document.querySelector('.event-manage')
        
    if(side == false) page.style.marginRight='5%'
    
    else page.style.marginRight = '15%'


  })


  const handleChangeTitr = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 100) {
      setEvents({...events,title:inputValue});
    }
  };

  
  const handleChangeDsc = (e) => {
    setEvents({...events,description:e.target.value});
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

  const handleAx = async (event) => {

    const file = event.target.files[0];
   const base64  = await convertBase64(file);
setSelectedImage(base64)
    setEvents({...events,image: file});
  
  }

  const handleClose = () => setShowModal(false);

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

const handleSubmit = async event => {


  event.preventDefault();

  console.log(events);


  if(events.title != '' && events.description != '' && events.category != ''){


   try{

     const response = await createEvent(events)
     
     console.log(response.status)

     if (response.status==201) {
      toast.success('رویداد با موفقیت اضافه شد', {
        duration: 4000,
        position: 'top-center',
      
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
     }
     }
     
     catch(error){
     
       console.log(error)
     }

  }

  else setShowModal(true)

}



return(
    <>

    <Sidebar setSide={setSide}/>

    <form className="event-manage" onSubmit={handleSubmit}>
    

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
  <input onChange={handleAx} type="file" id="images" accept="image/*"/>
</label>


</div>

<div className="col-lg-6">

<img className="img-fluid" src={selectedImage == null ? imgPlc : selectedImage} alt="mamad"/>

</div>


</div>

<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> رویداد</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر </span>رویداد</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">100 / {events.title.length}</span>

<textarea placeholder="اینجا بنویسید ..."  className="input-admin" type="text" value={events.title} onChange={handleChangeTitr} />


<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>رویداد</span>

<textarea value={events.description} onChange={handleChangeDsc} rows={1}  className="input-admin" placeholder="اینجا بنویسید..."/>

<div className="d-flex">
<div className="form-check m-4">
  <input value = "دانشجویی" onChange={e => setEvents({...events,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    دانشجویی
  </label>
</div>
<div className="form-check m-4">
  <input value = "فرهنگی و اجتماعی" onChange={e => setEvents({...events,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    فرهنگی و اجتماعی
  </label>
</div>

<div className="form-check m-4">
  <input value = "مذهبی" onChange={e => setEvents({...events,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    مذهبی
  </label>
</div>

<div className="form-check m-4">
  <input value = "سایر موضوعات" onChange={e => setEvents({...events,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
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
        <Dropdown.Item  as="button"><Link to="/page/admin/event-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/event-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
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

      <Toaster/>
    </>
)





}


export default EventManagement