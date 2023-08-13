



import { useState } from 'react';
import { Link } from 'react-router-dom';
import homework from './../../assets/homework.jpg'






const Anounce = () => {

const [download,setDownload] = useState(false);

    function handleClick(){

      setDownload(prev => !prev)

    }

    return(<>
    
    <section className='container single-anounce' >
    
    <div className="img-c">
<img src={homework} className="img-fluid"/>
</div>

<div className='tc'>
<h5>
    درخواست کارآموزی فقط تا 17 تیر

</h5>

<p>
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر
درخواست کارآموزی فقط تا 17 تیر

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