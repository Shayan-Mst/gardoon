import Sidebar from "../Sidebar";

import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import { deleteAnounce, getAllAnounce } from "../../../service/gardoonService";



const AnounceUpdate = () => {

    const [side,setSide] = useState(true);
    const [allAnounce,setAllAnounce] = useState([])
    

    const [anounceId , setAnounceId] = useState();


    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = (e) => {
      
      e.preventDefault();
      setAnounceId(e.target.value)
      setShowModal(true)};

    useEffect(() => {




        const page = document.querySelector('.anounce-update')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'

        })


        useEffect(()=>{


          const fetch = async() => {
  
            try{
  const {data: newsData} = await getAllAnounce();
  
  setAllAnounce(newsData);
  
  
            }
  
            catch(error){
  console.log(error);
  
            }
  
          }
  
          fetch();
  
        })
        

        const handleDelete = async(event) =>{

          event.preventDefault();
  try{
  
  const response = await deleteAnounce(anounceId)
  
  console.log(response.status)
  
  if(response.status == 200){
    
    const {data: newsData} = await getAllAnounce();
    setAllAnounce(newsData);
    setShowModal(false)
    
  }
  }
  
  catch(error){
  
  
    console.log(error)
  }
  
  
          }

    return(<>
    
    <Sidebar setSide={setSide}/>
    
    
    <form className="anounce-update">

<span className="d-flex tit mb-4">اطلاعیه های<span className="mx-2" style={{color:"rgb(0,177,106)"}}> موجود</span> </span>


<div style={{height:"44px"}} className="w-100 input-group d-flex">

<div className="input">
<input className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
</div>
<div className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>
<div className="row">

{allAnounce.map((item)=>(
  <div key={item.id} className="col-lg-4">
<div className="card mt-3">
<figure className="image-container d-inline-block my-0">
<img src={item.image} className="card-img-top" alt="..."/>
</figure>
<div className="card-body">
<Link className="card-title d-flex">{item.title}</Link>
<div className="group mt-4 mx-4 d-flex justify-content-center">

<Link to={`/page/admin/anounce-manage/edit/${item.id}`} className="btn btn-warning mx-3">ویرایش</Link>

<button value={item.id} onClick={handleShow} className="btn btn-danger mx-3">حذف</button>


</div>
</div>
</div>

</div>
))}

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
      <Button variant="primary" onClick={handleDelete}>
        بله
      </Button>
    </Modal.Footer>
  </Modal>

</form>

    
    
    
    
    
    
    
    
    </>)
}

export default AnounceUpdate;