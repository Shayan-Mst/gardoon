import { useState, useEffect } from "react";
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
{eduCal.slice(0,1).map((item)=>(
    item.name1
))}
</div>
</li>
<li  onClick={() => timeSwitch(2)} className={` ${step === 2 ? 'active': ''}`}>
<div className="step-inner">
{eduCal.slice(0,1).map((item)=>(
    item.name2
))}
</div>
</li>
<li  onClick={() => timeSwitch(3)} className={` ${step === 3 ? 'active': ''}`}>
<div className="step-inner">
{eduCal.slice(0,1).map((item)=>(
    item.name3
))}
</div>
</li>
<li  onClick={() => timeSwitch(4)} className={` ${step === 4 ? 'active': ''}`}>
<div className="step-inner">
{eduCal.slice(0,1).map((item)=>(
    item.name4
))}
</div>
</li>

<li  onClick={() => timeSwitch(5)} className={` ${step === 5 ? 'active': ''}`}>
<div className="step-inner">
{eduCal.slice(0,1).map((item)=>(
    item.name5
))}
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
        {eduCal.slice(0,1).map((item)=>(

<div className={`section-content ${step == 1 ? 'active':''}`}>

<h2>
{item.name1}
</h2>
<p>
    {item.description1}
</p>
</div>
        ))}
      




      {eduCal.slice(0,1).map((item)=>(

<div className={`section-content ${step == 2 ? 'active':''}`}>

<h2>
{item.name2}
</h2>
<p>
    {item.description2}
</p>
</div>
        ))}


{eduCal.slice(0,1).map((item)=>(

<div className={`section-content ${step == 3 ? 'active':''}`}>

<h2>
{item.name3}
</h2>
<p>
    {item.description3}
</p>
</div>
        ))}

{eduCal.slice(0,1).map((item)=>(

<div className={`section-content ${step == 4 ? 'active':''}`}>

<h2>
{item.name4}
</h2>
<p>
    {item.description4}
</p>
</div>
        ))}


{eduCal.slice(0,1).map((item)=>(

<div className={`section-content ${step == 5 ? 'active':''}`}>

<h2>
{item.name5}
</h2>
<p>
    {item.description5}
</p>
</div>
        ))}
    </div>
</div>


        
        </>
    )
}


export default TimeLine;