


import { useEffect, useState } from "react";
import semnan1 from "./../../assets/semnan.jpg"
import { getAllGallery } from "../../service/gardoonService";
import moment from "jalali-moment";
import { useNavigate,Link } from "react-router-dom";








const Gallery = () => {


    const [gallery,setGallery] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{


    const fetch = async()=>{


const {data:galleryData} = await getAllGallery();
setGallery(galleryData);

    }


    fetch();

    },[])



    return(
    <>


    <div id="gallery">
    <div style={{backgroundColor:"rgb(0,177,106)",color:"white"}} className="w-100 d-flex my-4 py-2 px-4 ">گالری عکس ها</div>
    
<div className="grid m-4 p-3">
<div className="row m-2">
{gallery.map((item)=>(


 <div key={item.id} className="col-lg-4 my-2">
        <div className="cnt">
<img className="img-fluid" src={`http://127.0.0.1:8000${item.image}`}/>
<span className="g-date">{moment(item.created).local('fa').format('YYYY/MM/DD')}</span>
<div className="overlay">
   <div  className="image-caption"><Link to={`/gallery/${item.id}`} style={{textDecoration:"none",color:"white"}}>{item.title}</Link></div>
</div>
</div>
    </div>


))}
   


</div>

</div>

    </div>
    
    
    </>)
}

export default Gallery;