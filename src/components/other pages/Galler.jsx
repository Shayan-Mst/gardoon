import { useEffect, useState } from 'react';
import lamp from './../../assets/semnani.jpg'
import Social from './Social';
import { getGallery } from '../../service/gardoonService';
import { useParams } from 'react-router-dom';



const Galler = () => {

    const {galleryId} = useParams();

    const[gal,setGal] = useState([]);

    useEffect(()=>{

const fetch = async()=>{
    const {data : galData} = await getGallery(galleryId);
    setGal(galData);
}

fetch();


    },[])


    return(<>
    
    
    <section className="container single-pic">

    <div className="img-c p-4">
<img src={`http://127.0.0.1:8000${gal.image}`} className="img-fluid"/>
</div>

<div className='dsc mx-4 px-4'>

<p>{gal.title}
 </p>

</div>



    </section>
    
    <Social/>
    
    
    
    
    </>)
}




export default Galler;