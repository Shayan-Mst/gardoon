
import { useState,useEffect } from "react";
import Sidebar from "../Sidebar";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { deleteGallery, getAllGallery } from "../../../service/gardoonService";



const GalleryUpdate = () => {


    const [side,setSide] = useState(true);

    const [showModal, setShowModal] = useState(false);

    const [allGallery,setAllGallery] = useState([]);

    const [galleryId,setGalleryId] = useState();


    useEffect(() => {


      const page = document.querySelector('.gallery-update')
      
      if(side == false) page.style.marginRight='5%'
      
      else page.style.marginRight = '15%'

      })


    const handleClose = () => setShowModal(false);

    const handleShow = (e) => {
      
      e.preventDefault();
     // setGalleryId(e.target.value);
      setShowModal(true);
      console.log(allGallery);
    };
    

    


        useEffect(() =>{

          const fetch = async() => {
  
            try{
  const {data: newsData} = await getAllGallery();
  
  setAllGallery(newsData);
  
  
            }
  
            catch(error){
  console.log(error);
  
            }
  
          }
  
          fetch();
  
  
  
          },[])
         


          const handleDelete = async(e) =>{

            e.preventDefault();
    try{
    
    const response = await deleteGallery(galleryId)
    
    console.log(response.status)
    
    if(response.status == 200){
      
      const {data: newsData} = await getAllGallery();
      setAllGallery(newsData);
      setShowModal(false)
      
    }
    }
    
    catch(error){
    
    
      console.log(error)
    }
    
    
            }
  
 
return(<>

<Sidebar setSide={setSide}/>

<form className="gallery-update">


<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex my-4 py-2 px-4 ">گالری عکس ها</div>

<div style={{height:"44px"}} className="w-100 input-group d-flex">

<div className="input">
<input className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
</div>
<div className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>

<div className="grid py-3">
<div className="row my-4">

{
 allGallery.map((item) => (

    <div key={item.id} className="col-lg-4">
        <div className="cnt">
        <i onClick={handleShow} value={item.id} className="fa-solid fa-trash"></i>

       <Link to={`/page/admin/gallery-manage/edit/${item.id}`}> <i className="fa-solid fa-pen"></i></Link>

<img className="img-fluid" src={item.image != null ? `http://127.0.0.1:8000${item.image}` :imgPlc}/>

<span className="g-date">{item.created}</span>
<div className="overlay">
   <div className="image-caption">{item.title}</div>
</div>
</div>
    </div>
  ))
}
    

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
          <Button variant="primary" onClick={handleDelete}>
            بله
          </Button>
        </Modal.Footer>
      </Modal>


</form>






</>)



}


export default GalleryUpdate;