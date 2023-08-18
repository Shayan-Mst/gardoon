import Sidebar from "../Sidebar";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import semnan2 from './../../../assets/semnan.jpg'







const NewsUpdate = () => {

    const [side,setSide] = useState(true)


    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = (e) => {
      
      e.preventDefault();
      
      setShowModal(true)};

    useEffect(() => {




        const page = document.querySelector('.news-update')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'

        })

       

    return(<>
    
    <Sidebar setSide={setSide}/>
    
    <form className="news-update">

    <span className="d-flex tit mb-4">اخبار<span className="mx-2" style={{color:"rgb(0,177,106)"}}> موجود</span> </span>


    <div style={{height:"44px"}} className="w-100 input-group d-flex">
  
  <div className="input">
  <input className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
  </div>
  <div className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>
<div className="row">

<div className="col-lg-4">
<div className="card mt-3">
  <figure className="image-container d-inline-block my-0">
  <img src={semnan2} className="card-img-top" alt="..."/>
   </figure>
  <div className="card-body">
  <Link className="card-title d-flex">عنوان خبر لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه .</Link>
    <p className="card-text my-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه شتشتتشتششششششششششششششششششششششششششششششششششششششششششششششششششششششششش.</p>
    <div className="group mt-4 mx-4 d-flex justify-content-center">

<Link to='/page/admin/news-manage/edit' className="btn btn-warning mx-3">ویرایش</Link>

<button onClick={handleShow} className="btn btn-danger mx-3">حذف</button>


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



export default NewsUpdate;