import { useEffect,useRef,useState } from "react";
import 'react-quill/dist/quill.snow.css';
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { createNews } from "../../../service/gardoonService";
import imgPlc from './../../../assets/plc.avif'
import  Modal  from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'





const NewsManagement = () => {



    const inputRef = useRef(null);


    const [isDragActive, setIsDragActive] = useState(false);

    const [selectedImage, setSelectedImage] = useState(null);

    const [news,setNews] = useState({

     title :'',
     description:'',
     category:'',
     image : null

    })

    const [side,setSide] = useState(true)


    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
   
   

    useEffect(() => {
  const page = document.querySelector('.news-manage')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'

        })


        const handleChangeTitr = (event) => {
          const inputValue = event.target.value;
      
          if (inputValue.length <= 130) {
            setNews({...news,title:inputValue});
          }
        };


        
        const handleChangeDsc = (event) => {
          setNews({...news,description:event.target.value});
        };

const handleAx = async (event) => {

  const file = event.target.files[0];
 const base64  = await convertBase64(file);
setSelectedImage(base64)
  setNews({...news,image: file});

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


          function handleDragOver(event) { event.preventDefault();}
        
          function handleDragEnter() {setIsDragActive(true);}
        
          function handleDragLeave() {setIsDragActive(false);}
        
          function handleDrop(event) {
            event.preventDefault();
            setIsDragActive(false);
            const fileInput = document.getElementById('images');
            fileInput.files = event.dataTransfer.files;
            setSelectedImage(fileInput.files);
          }


          const handleSubmit = async event =>{

             event.preventDefault();
             console.log(news);


             if(news.title != '' && news.description != '' && news.category != ''){


            
              try{

                const response = await createNews(news)
                
                console.log(response.status)
                }
                
                catch(error){
                
                  console.log(error)
                }

             }

             else setShowModal(true)
          
 
    

          }



       
return(<>

<Sidebar setSide = {setSide}/>  

<form   encType="multipart/form-data"  onSubmit={handleSubmit} className="news-manage">

<span className="d-flex tit">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> خبر</span>


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

<img className="img-fluid" src={selectedImage == null ? imgPlc : selectedImage}/>

</div>


</div>

<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> خبر</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span style={{color:"rgb(0,177,106)"}}>تیتر </span>خبر
</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">130 / {news.title.length}</span>
<textarea   ref={inputRef} value={news.title} onChange={handleChangeTitr} className="input-admin" placeholder="اینجا بنویسید..."></textarea>

<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-1" style={{color:"rgb(0,177,106)"}}>توضیحات</span>خبر</span>

<textarea value={news.description} onChange={handleChangeDsc}  className="input-admin" placeholder="اینجا بنویسید..."/>

<div className="d-flex">

<div className="form-check m-4">
  <input   value = "دانشجویی" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label  className="form-check-label" htmlFor="flexRadioDefault1">
    دانشجویی
  </label>
</div>
<div className="form-check m-4">
  <input  value = "فرهنگی و اجتماعی" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label  className="form-check-label" htmlFor="flexRadioDefault2">
    فرهنگی و اجتماعی
  </label>
</div>

<div className="form-check m-4">
  <input value = "ریاستی" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    ریاستی
  </label>
</div>
<div className="form-check m-4">
  <input value = "ورزشی" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
  <label className="form-check-label" htmlFor="flexRadioDefault4">
    ورزشی
  </label>
</div>
<div className="form-check m-4">
  <input value = "سایر موضوعات" onChange={e => setNews({...news,category:e.target.value})} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
  <label className="form-check-label" htmlFor="flexRadioDefault5">
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
        <Dropdown.Item  as="button"><Link to="/page/admin/news-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/news-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
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




export default NewsManagement;