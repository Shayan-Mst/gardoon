import { useState,useEffect } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { deleteEvent, getAllEvents } from "../../../service/gardoonService";




const EventUpdate = () => {


    const [side,setSide] = useState(true);

    const [eventId,setEventId] = useState();

    const [allEvent , setAllEvent] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [filter , setFilter] = useState([]);

    const [qwuery,setQwuery] = useState("");

    const handleClose = () => setShowModal(false);
    const handleShow = (e) => {
      
      e.preventDefault();
      setEventId(e.target.value)
      setShowModal(true)
      console.log(eventId)
    };

    useEffect(() => {


        const page = document.querySelector('.event-update')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'

        })

        useEffect(()=>{

          const fetch = async() => {
  
            try{
  const {data: newsData} = await getAllEvents();
  
  setAllEvent(newsData);
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
  
  const response = await deleteEvent(eventId)
  
  console.log(response.status)
  
  if(response.status == 200){
    
    const {data: newsData} = await getAllEvents();
    setAllEvent(newsData);
    setFilter(newsData);
    setShowModal(false)
    
  }
  }
  
  catch(error){
  
  
    console.log(error)
  }
  
  
          }
  
  
          function searchFunction(){

      

            const filtered = allEvent.filter(
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
    
    

    <form className="event-update">

<span className="d-flex tit mb-4">رویداد های<span className="mx-2" style={{color:"rgb(0,177,106)"}}> موجود</span> </span>


<div style={{height:"44px"}} className="w-100 input-group d-flex">

<div className="input">
<input value={qwuery} onChange={(e) => setQwuery(e.target.value)} className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
</div>
<div onKeyUp={handleKeyPress} onClick={searchFunction} className="search-icon d-flex justify-content-center align-items-center">
<i className="fa-solid fa-magnifying-glass"></i>

</div>
</div>
<div className="row">

{filter.map((item) => (
  <div key={item.id} className="col-lg-4">
  <div className="card mt-3">
  <figure className="image-container d-inline-block my-0">
  <img src={`http://127.0.0.1:8000${item.image}`} className="card-img-top" alt="..."/>
  </figure>
  <div className="card-body">
  <Link className="card-title d-flex">{item.title}</Link>
  <p className="card-text my-2">{item.description}</p>
  <div className="group mt-4 mx-4 d-flex justify-content-center">
  
  <Link to={`/page/admin/event-manage/edit/${item.id}`} className="btn btn-warning mx-3">ویرایش</Link>
  
  <button onClick={handleShow} value={item.id} className="btn btn-danger mx-3">حذف</button>
  
  
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



export default EventUpdate;