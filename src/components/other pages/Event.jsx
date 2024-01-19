import { useEffect, useState } from 'react';
import lamp from './../../assets/lamp.jpg'
import Comments from './Comments';
import Social from './Social';
import { getEvent } from '../../service/gardoonService';
import { useParams } from 'react-router-dom';
import moment from 'jalali-moment';

const Event  = ()  => {


    const {eventId} = useParams()


const [event,setEvent] = useState([]);


    useEffect(()=>{

const fetch = async()=>{

const {data:eventData} = await getEvent(eventId)

setEvent(eventData)

}
fetch()

    },[])

return(<>



<section className="container single-event my-4">
<div>
<span className="d-flex tit m-4">{event.title}</span>
</div>
<div className="m-4 date-p d-flex">
    تاریخ انتشار :
<span className=" mb-2 mx-1">{moment(event.created).format('YYYY/MM/DD')}</span>
</div>

<div className="img-c">
<img src={`http://127.0.0.1:8000${event.image}`} className="img-fluid"/>
</div>


<div className='dsc m-4 px-4'>

<p>{event.description}
 </p>

</div>

<Comments/>

<div className='cms'>
<span className="d-flex tit m-4">مشاهده دیدگاه ها</span>


<ul >

<li  className="cm-section">
        

        <div className="cm-bio">
        <span  className='cm-name m-2 px-2'>محمد حسین </span>

<span className=" mb-2 mx-1 date-p">28 بهمن 1402</span>

<span className='reply'>پاسخ</span>

</div>
<p  className='cm-info m-2 px-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>

<div style={{height:"20px"}}></div>
    </li>
</ul>
</div>



</section>



<Social/>


</>)




}




export default Event;