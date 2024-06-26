import Sidebar from "../Sidebar";
import { useState,useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import { deleteNews, getAllNews } from "../../../service/gardoonService";
import imgPlc from './../../../assets/plc.avif'
import toast, { Toaster } from 'react-hot-toast';





const NewsUpdate = () => {

    const [side,setSide] = useState(true)

    const [allNews,setAllNews] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [newsId,setNewsId] = useState();

    const [filter , setFilter] = useState([]);

   const [qwuery,setQwuery] = useState("");

    const handleClose = () => setShowModal(false);

    const handleShow = (e) => {
      
      setNewsId(e.target.value)
      e.preventDefault();
      console.log(allNews);
      setShowModal(true)


      

    
    };

    useEffect(() => {

        const page = document.querySelector('.news-update')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%';

        

        })


        useEffect(()=>{


          const fetch = async() => {
  
            try{
  const {data: newsData} = await getAllNews();
  
  setAllNews(newsData);
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

const response = await deleteNews(newsId)

console.log(response.status)

if(response.status == 200){
  toast.success('حذف با موفقیت انجام شد.', {
    duration: 4000,
    position: 'top-center',
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
  
  const {data: newsData} = await getAllNews();
  setAllNews(newsData);
  setFilter(newsData);
  setShowModal(false)
  
}
}

catch(error){


  console.log(error)
}


        }



      function searchFunction(){

      

        const filtered = allNews.filter(
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
    
    <form   className="news-update">

    <span className="d-flex tit mb-4">اخبار<span className="mx-2" style={{color:"rgb(0,177,106)"}}> موجود</span> </span>


    <div style={{height:"44px"}} className="w-100 input-group d-flex">
  
  <div className="input">
  <input value={qwuery} onChange={(e) => setQwuery(e.target.value)} className="py-2 px-4 w-100" type="search" id="search-input" name="search" placeholder="جستجو ..."/>
  </div>
  <div  onKeyUp={handleKeyPress} onClick={searchFunction} className="search-icon d-flex justify-content-center align-items-center">
<i  className="fa-solid fa-magnifying-glass"></i>

</div>
</div>
<div className="row">



  {
  
  
  filter.map((item) => (
    
<div key={item.id} className="col-lg-4">
<div  className="card mt-3">
  <figure className="image-container d-inline-block my-0">
  <img src={item.image != null ? `http://127.0.0.1:8000${item.image}` :imgPlc} className="card-img-top" alt="..."/>
   </figure>
  <div className="card-body">
  <Link className="card-title d-flex">{item.title}</Link>
    <p className="card-text my-2">{item.description}</p>
    <div className="group mt-4 mx-4 d-flex justify-content-center">

<Link to={`/page/admin/news-manage/edit/${item.id}`} className="btn btn-warning mx-3">ویرایش</Link>

<button  onClick={handleShow} value={item.id} className="btn btn-danger mx-3">حذف</button>


</div>
  </div>
</div>

</div>

  ))}



</div>


<Modal onKeyDown={handleModalKeyPress} centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>حذف کردن اطلاعات</Modal.Title>
        </Modal.Header>
        <Modal.Body>آیا مطمئن هستید که میخواهید آن را پاک کنید؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            خیر
          </Button>
          <Button onClick={handleDelete} variant="primary">
            بله
          </Button>
        </Modal.Footer>
      </Modal>

<Toaster/>
    </form>
    
    
    
    
    </>)
}



export default NewsUpdate;