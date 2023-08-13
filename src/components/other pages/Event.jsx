import lamp from './../../assets/lamp.jpg'
import Comments from './Comments';
import Social from './Social';


const Event  = ()  => {

return(<>



<section className="container single-event my-4">
<div>
<span className="d-flex tit m-4">رویداد مسابقات برنامه نویسی کشوری به نمایندگی</span>
</div>
<div className="m-4 date-p d-flex">
    تاریخ ارسال :
<span className=" mb-2 mx-1">28 بهمن 1402</span>
</div>

<div className="img-c">
<img src={lamp} className="img-fluid"/>
</div>


<div className='dsc m-4 px-4'>

<p>بت‌نام سفر «اربعین»
پیاده‌روی نجف تا کربلا کاروان بسیج دانشجویی دانشگاه صنعتی امیرکبیر
کاروان طریق‌القدس ویژه برادران
لینک ثبت نام برادران:
https://survey.porsline.ir/s/DGgwhdTf
برای کسب اطلاعات بیشتر راجع به کاروان برادران: Tariq_bsj
 کاروان لواءالزینب ویژه خواهران
لینک ثبت نام خواهران:
https://b۲n.ir/p۹۲۷۷۱
برای کسب اطلاعات بیشتر راجع به کاروان خواهران: aadmiin_leva_zein_ab
مهلت ثبت نام تا ۱۱ مرداد
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