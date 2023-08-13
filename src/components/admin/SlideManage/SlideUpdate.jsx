import Sidebar from "../Sidebar";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import semnan1 from './../../../assets/semnan.jpg'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";











const SlideUpdate = () => {

    const [side,setSide] = useState(true)


    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = (e) => {
      
      e.preventDefault();
      
      setShowModal(true)};

    useEffect(() => {




        const page = document.querySelector('.slide-update')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'

        })


    return(<>
    <Sidebar setSide={setSide}/>
    




    <form className="slide-update">


<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex my-4 py-2 px-4 ">اسلاید های صفحه اصلی</div>

<div style={{height:"44px"}} className="w-100 input-group d-flex">

<div className="input">
<input className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
</div>
<div className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>

<div className="grid py-3">

<div className="devi p-1">
  
        <div className="cnt">
        <i onClick={handleShow} className="fa-solid fa-trash"></i>
        <i className="fa-solid fa-pen"></i>
<img className="img-fluid" src={semnan1}/>

<div className="brief">
      <Link>توضیح درباره عکس از پایین به بالا فقط برای امتحان کردن ساخته شده است و تو انقدر احمق هستی</Link>
      <div style={{fontSize:"1rem"}}>
       <p>
       اعلام دانشگاه سمنان درباره امروز که اخبار بسیار مهمی را نشر داد
        
        </p> 
      </div>
 </div>
</div>
    

</div>





</div>




<Modal centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>حذف کردن اطلاعات</Modal.Title>
        </Modal.Header>
        <Modal.Body>آیا مطمئن هستید که میخواهید آن را پاک کنید؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            خیر
          </Button>
          <Button variant="primary" onClick={handleClose}>
            بله
          </Button>
        </Modal.Footer>
      </Modal>


</form>
    
    </>)
}



export default SlideUpdate;