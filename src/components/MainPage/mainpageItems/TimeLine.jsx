import { useState,useRef, useEffect } from "react";
import { getEduCal } from "../../../service/gardoonService";






const TimeLine = () =>{
     
    
   
    const [step,setStep] = useState(1);

    const [eduCal,setEducal] = useState([]);

    useEffect(()=>{

const fetch = async() =>{

try{

    const {data : eduData} = await getEduCal();
    setEducal(eduData);
    

}

catch(error){

    console.log(error)
}



}

fetch();

    },[])
   

function timeSwitch(index){

    if (index !== step) {
       
    
       
        const currentActiveDiv = document.querySelector('active');
        if (currentActiveDiv) {
          currentActiveDiv.classList.remove('active');
        }
        setStep(index);
       
      }
      
}


    return(
        <>
        
        <h2 className="my-4 tq"><span style={{color:"rgb(0,177,106)"}}>تقویم</span> آموزشی </h2>

<div className="py-4 proccess-wrapper">
    <div id="progress-bar-container" >

        <ul>
<li  onClick={() => timeSwitch(1)} className={` ${step === 1 ? 'active': null}`} >
<div className="step-inner">
  انتخاب واحد
</div>
</li>
<li  onClick={() => timeSwitch(2)} className={` ${step === 2 ? 'active': ''}`}>
<div className="step-inner">
    حذف و اضافه
</div>
</li>
<li  onClick={() => timeSwitch(3)} className={` ${step === 3 ? 'active': ''}`}>
<div className="step-inner">
   شروع کلاس ها
</div>
</li>
<li  onClick={() => timeSwitch(4)} className={` ${step === 4 ? 'active': ''}`}>
<div className="step-inner">
   شروع امتحانات
</div>
</li>

<li  onClick={() => timeSwitch(5)} className={` ${step === 5 ? 'active': ''}`}>
<div className="step-inner">
     پایان امتحانات
</div>
</li>

        </ul>

<div id="line">
  
    <div 
       
    className={
        
        `line-proccess ${step ==1 ? 'step1':''}
        ${step ==2 ? 'step2':''}
        ${step ==3 ? 'step3':''}
        ${step ==4 ? 'step4':''}
        ${step ==5 ? 'step5':''}
    
    `}
    
    
    ></div>
</div>
    </div>



    <div id="progress-content-section">
        <div className={`section-content ${step == 1 ? 'active':''}`}>
            <h2>
                انتخاب واحد
            </h2>
            <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.
       
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.
            </p>
        </div>




        <div className={`section-content ${step == 2 ? 'active':''}`}>
            <h2>
                حذف و اضافه
            </h2>
            <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.   
            </p>
        </div>



        <div className={`section-content ${step == 3 ? 'active':''}`}>
            <h2>
                شروع کلاس ها
            </h2>
            <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.
            </p>
        </div>


        <div className={`section-content ${step == 4 ? 'active':''}`}>
            <h2>
                شروع امتحانات
            </h2>
            <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.
            </p>
        </div>



        <div className={`section-content ${step == 5 ? 'active':''}`}>
            <h2>
                پایان امتحانات
            </h2>
            <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه.
            </p>
        </div>
    </div>
</div>


        
        </>
    )
}


export default TimeLine;