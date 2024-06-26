import Sidebar from "../Sidebar";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteSlide, getAllSlide } from "../../../service/gardoonService";

import toast,{ Toaster } from "react-hot-toast";



const SlideUpdate = () => {

    const [side,setSide] = useState(true)

    
    const [allSlide,setAllSlide] = useState([])

    const [showModal, setShowModal] = useState(false);

    const [slideId , setSlideId] = useState();

    const [filter , setFilter] = useState([]);

   const [qwuery,setQwuery] = useState("");

    const handleClose = () => setShowModal(false);
    const handleShow = (e) => {
      
      e.preventDefault();
      setSlideId(e.target.id);
      console.log(slideId)
      setShowModal(true)};

    useEffect(() => {

        const page = document.querySelector('.slide-update')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'

        })

        useEffect(()=>{


          const fetch = async() => {
  
            try{
  const {data: newsData} = await getAllSlide();
  
  setAllSlide(newsData);
  setFilter(newsData);
  
            }
  
            catch(error){
  console.log(error);
  
            }
  
          }
  
          fetch();
  
        },[])
        

        const handleDelete = async(event) =>{

          event.preventDefault();
  try{
  
  const response = await deleteSlide(slideId)
  
  console.log(response.status)
  
  if(response.status == 200){
    toast.success(' با موفقیت انجام شد.', {
      duration: 4000,
      position: 'top-center',
    
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
    
    const {data: newsData} = await getAllSlide();
    setAllSlide(newsData);
    setFilter(newsData);
    setShowModal(false)
    
  }
  }
  
  catch(error){
  
  
    console.log(error)
  }
  
  
          }


          function searchFunction(){

      

            const filtered = allSlide.filter(
              (item) =>
                item.title.toLowerCase().includes(qwuery.toLowerCase()) ||
                item.description.toLowerCase().includes(qwuery.toLowerCase())
            );
            setFilter(filtered);
          }
    
          const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
              searchFunction();
            }
          };
    
          const handleModalKeyPress = (e) => {
            if (e.key === 'Enter') {
              e.stopPropagation(); // Prevent event propagation
              e.preventDefault();
              
            }
          };
    

    return(<>

    <Sidebar setSide={setSide}/>
    

    <form className="slide-update">


<div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex my-4 py-2 px-4 ">اسلاید های صفحه اصلی</div>

<div style={{height:"44px"}} className="w-100 input-group d-flex">

<div className="input">
<input value={qwuery} onChange={(e) => setQwuery(e.target.value)} className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
</div>
<div onKeyUp={handleKeyPress} onClick={searchFunction} className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>

<div className="grid py-3">

{filter.map((item)=>(

<div key={item.id} className="devi p-1">
  
  <div className="cnt">
  <i id={item.id} onClick={handleShow} className="fa-solid fa-trash"></i>
  <Link to={`/page/admin/slide-manage/edit/${item.id}`}><i className="fa-solid fa-pen"></i></Link>
<img className="img-fluid" src={`http://127.0.0.1:8000${item.image}`}/>

<div className="brief">
<Link >{item.title}</Link>
<div style={{fontSize:"1rem"}}>
 <p>
 {item.description}
  
  </p> 
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


<Toaster/>
    
    </>)
}



export default SlideUpdate;