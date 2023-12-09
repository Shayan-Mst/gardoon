import Sidebar from "../Sidebar";
import sem from './../../../assets/semnan.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState,useEffect } from "react";
import { getEvent , updateEvent } from "../../../service/gardoonService";
import { Link , useNavigate , useParams} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import imgPlc from './../../../assets/plc.avif'



const EventEdit = () => {

    const [side,setSide] = useState(true);

    const [isDragActive, setIsDragActive] = useState(false);
  
    const {eventId} = useParams();

    const [updateContain,setUpdateContain] = useState({})
    const [Event,setEvent] = useState({});

      const [selectImg,setSelectImg] = useState(imgPlc);
  
    const navigate = useNavigate();


    useEffect(()=>{

        const page = document.querySelector('.event-edit')
            
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'
    
    
      })

      useEffect(()=>{

        const fetchData = async () => {
             
          try{
  
              
           const {data : newData} = await getEvent(eventId);
            
           setEvent(newData);
         
  
            
          }
          catch(err){
  
              console.log(err);
            
          }
  
      }
  
  fetchData();
  
      },[])

      
    
  


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



      const handleAx = async(event) => {

        const file = event.target.files[0];
       const base64  = await convertBase64(file);

        setSelectImg(base64);
        setUpdateContain({...updateContain,
        [event.target.name] : file
        
        });
      
      }


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

      const onEventChange = (event) =>{

        setEvent({...Event,[event.target.name] : event.target.value})
        
        setUpdateContain( {
            ...updateContain,
            [event.target.name] : event.target.value,
        
      });
      
     
        
        };



        const notify = () =>  
  
  toast.success('ویرایش با موفقیت انجام شد.', {
    duration: 4000,
    position: 'top-center',
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });



const handleUpdate = async(event) =>{

  event.preventDefault();
 
try{
const {status} = await updateEvent(

  updateContain,eventId
)

if(status == 201){



setTimeout(() => {
  // Code to be executed after 5 seconds
  navigate('/page/admin/event-manage/update');
}, 5000);
}
}
catch(error){

console.log(error)
}

}



return(<>

<Sidebar setSide={setSide}/>
   
<form className="event-edit" onSubmit={handleUpdate}>

<span className="d-flex tit">ویرایش<span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> رویداد</span>


<div className="picture-container mb-3 d-flex">

<div className="col-lg-6">


<label onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
htmlFor="images" className="drop-container" id="dropcontainer">
  <span className="drop-title">Drop files here</span>
  or
  <input name="image" onChange={handleAx} type="file" id="images" accept="image/*" required/>
</label>

</div>

<div className="col-lg-6">

<img className="img-fluid" src={Event.image == null ?selectImg : `http://127.0.0.1:8000${Event.image}`} alt=""/>

</div>


</div>


<div className="text">
<span className="d-flex tit mb-4">ویرایش<span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> رویداد</span>


<span className="d-flex mb-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>تیتر </span>رویداد</span>


<textarea  name="title" maxLength={130} onChange={onEventChange}  className="input-admin" type="text" value={Event.title} placeholder="اینجا بنویسید..." />


<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>رویداد</span>

<textarea  name="description" className="input-admin" value={Event.description} onChange={onEventChange} placeholder="اینجا بنویسید..."/>
</div>


<div className="d-flex">

<div className="form-check m-4">
  <input   value = "دانشجویی" checked={Event.category == 'دانشجویی'} onChange={onEventChange} className="form-check-input" type="radio" name="category" id="flexRadioDefault1"/>
  <label  className="form-check-label" htmlFor="flexRadioDefault1">
    دانشجویی
  </label>
</div>
<div className="form-check m-4">
  <input  value = "فرهنگی و اجتماعی" checked={Event.category == 'فرهنگی و اجتماعی'} onChange={onEventChange} className="form-check-input" type="radio" name="category" id="flexRadioDefault2"/>
  <label  className="form-check-label" htmlFor="flexRadioDefault2">
    فرهنگی و اجتماعی
  </label>
</div>

<div className="form-check m-4">
  <input value = "ریاستی" checked={Event.category == 'ریاستی'} onChange={onEventChange} className="form-check-input" type="radio" name="category" id="flexRadioDefault3"/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    ریاستی
  </label>
</div>
<div className="form-check m-4">
  <input  value = "ورزشی" checked={Event.category == 'ورزشی'} onChange={onEventChange} className="form-check-input" type="radio" name="category" id="flexRadioDefault4"/>
  <label className="form-check-label" htmlFor="flexRadioDefault4">
    ورزشی
  </label>
</div>
<div className="form-check m-4">
  <input value = "سایر موضوعات" checked={Event.category == 'سایر موضوعات'} onChange={onEventChange}  className="form-check-input" type="radio" name="category" id="flexRadioDefault5"/>
  <label className="form-check-label" htmlFor="flexRadioDefault5">
   سایر موضوعات
  </label>
  
</div>
</div>

<div className="btn-g">
<button className="btn btn-warning"  type="submit">ویرایش</button>
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



</>)



}





export default EventEdit;