



import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAnounce } from '../../service/gardoonService';






const Anounce = () => {

const [download,setDownload] = useState(false);

const [anounce,setAnounce] = useState([]);

const {anounceId} = useParams();

    function handleClick(){

      setDownload(prev => !prev)

    }





    useEffect(()=>{

const fetch = async()=>{

const {data:anounceData} = await getAnounce(anounceId);

setAnounce(anounceData);

}

fetch()

    },[])

    return(<>
    
    <section className='container single-anounce' >
    
    <div className="img-c">
<img src={`http://127.0.0.1:8000${anounce.image}`} className="img-fluid"/>
</div>

<div className='tc'>
<h5>
  {anounce.title}

</h5>

<p>
{anounce.description}

</p>

<Link className='download p-3'>
    <i className='fa-solid fa-cloud'/>
    <span className='mx-2'>دانلود فایل اطلاعیه</span>
    </Link>


</div>


    </section>
    </>)
}





export default Anounce;