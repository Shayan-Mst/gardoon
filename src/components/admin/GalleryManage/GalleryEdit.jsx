import Sidebar from "../Sidebar";
import { useState ,useEffect} from "react";
import imgPlc from './../../../assets/plc.avif'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link,useNavigate,useParams } from "react-router-dom";
import { getGallery, updateGallery } from "../../../service/gardoonService";





const GalleryEdit = () => {


    const [side,setSide] = useState(true);
   

    const {galleryId} = useParams();

    const [selectImg,setSelectImg] = useState(imgPlc);
    
    useEffect(()=>{

        const page = document.querySelector('.gallery-edit')
            
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'
    
    
      })


      const [Gallery,setGallery] = useState({});
    
        const [updateContain,setUpdateContain] = useState({})
    
        useEffect(()=>{

          console.log(updateContain)
        },[updateContain])
      
        const navigate = useNavigate();
    
        useEffect(()=>{
    
          const fetchData = async () => {
               
            try{
    
                
             const {data : newData} = await getGallery(galleryId);
              
             setGallery(newData);
          
    
              
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
        image : file
        
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


      const onGalleryChange = (e) => {

        
        
        setUpdateContain( {
          ...updateContain,
          title : e.target.value,
      
    });
        
      }


      const handleUpdate = async(event) =>{

        event.preventDefault();
        
      try{
      const {status} = await updateGallery(
      
        updateContain,galleryId
      )
      
      if(status == 201){
      
      
      setTimeout(() => {
        // Code to be executed after 5 seconds
        navigate('/page/admin/gallery-manage/update');
      }, 5000);
      }
      }
      catch(error){
      
      console.log(error)
      }
      
      }
    



    return (
     <>
    <Sidebar setSide={setSide}/>

<form className="gallery-edit" onSubmit={handleUpdate}>
<span className="d-flex tit">ویرایش<span className="mx-2" style={{color:"rgb(0,177,106)"}}> عکس </span> گالری</span>


<div className="picture-container m-3">



<label onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
htmlFor="images" className="drop-container" id="dropcontainer">
  <span className="drop-title">Drop files here</span>
  or
  <input onChange={handleAx} type="file" id="images" accept="image/*"/>
</label>


<img className="img-fluid mx-0 mt-4" src={Gallery.image == null || selectImg != imgPlc ? selectImg : `http://127.0.0.1:8000${Gallery.image}`} alt=""/>


</div>

<div className="text">
<span className="d-flex tit mb-4">ویرایش<span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> عکس</span>


<textarea maxLength={85}  name="title"  className="input-admin" type="text" value={Gallery.title} onChange={onGalleryChange} />


</div>


<div className="btn-g"> 
<button className="btn btn-warning"  type="submit">ویرایش</button>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        انتخاب کنید
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  as="button"><Link to="/page/admin/gallery-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/gallery-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown>
    </div>

    </form>
     </>
    )
  };



  export default GalleryEdit;