import Sidebar from "../Sidebar"
import { useState,useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";



const EduCalendarManagement = () => {

    const [side,setSide] = useState(true);

    const [value5, setValue5] = useState('');

    const [value1, setValue1] = useState('');

    const [value2, setValue2] = useState('');

    const [value3, setValue3] = useState('');

    const [value4, setValue4] = useState('');


    const [step1,setStep1] = useState('')

    const [step2,setStep2] = useState('')

    const [step3,setStep3] = useState('')

    const [step4,setStep4] = useState('')

    const [step5,setStep5] = useState('')


    
    useEffect(() => {


        const page = document.querySelector('.educal-manage')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'

        })
      
      
        const valueHandle1 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 750) {
            setValue1(inputValue);
           
          }

        }
        const valueHandle2 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 750) {
            setValue2(inputValue);
           
          }

        }
       

        const valueHandle3 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 750) {
            setValue3(inputValue);
           
          }

        }

        const valueHandle4 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 750) {
            setValue4(inputValue);
           
          }

        }
       
        const valueHandle5 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 750) {
            setValue5(inputValue);
           
          }

        }
       


        const handle1 = (event) => {
          const inputValue = event.target.value;
          if (inputValue.length <= 15) {
            setStep1(inputValue);
           
          }
          }

          const handle2 = (event) => {
            const inputValue = event.target.value;
          if (inputValue.length <= 15) {
            setStep2(inputValue);
           
          }
          }


          const handle3 = (event) => {
            const inputValue = event.target.value;
          if (inputValue.length <= 15) {
            setStep3(inputValue);
           
          }
          }

          const handle4 = (event) => {
            const inputValue = event.target.value;
            if (inputValue.length <= 15) {
              setStep4(inputValue);
             
            }
          }

          const handle5 = (event) => {
            const inputValue = event.target.value;
            if (inputValue.length <= 15) {
              setStep5(inputValue);
             
            }
          }
          

    return(<>
    
    
    <Sidebar setSide={setSide}/>
    
    
    <form className="educal-manage">

    <span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>اول</span></span>


    <div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام اول :</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">15 / {step1.length}</span>

<input  className="num-info mx-4" type="text" value={step1} onChange={handle1} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام اول :</span>

<span style={{fontSize:"10px"}} className="d-flex justify-content-end">750 / {value1.length}</span>

<textarea style={{height:"auto"}} value={value1} onChange={valueHandle1} className="input-admin" placeholder="اینجا بنویسید..."></textarea>



<span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>دوم</span></span>

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام دوم:</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">15 / {step2.length}</span>

<input  className="num-info mx-4" type="text" value={step2} onChange={handle2} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام دوم :</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">750 / {value2.length}</span>

<textarea style={{height:"auto"}} value={value2} onChange={valueHandle2} className="input-admin" placeholder="اینجا بنویسید..."></textarea>





<span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>سوم</span></span>

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام سوم :</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">15 / {step3.length}</span>

<input  className="num-info mx-4" type="text" value={step3} onChange={handle3} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام سوم :</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">750 / {value3.length}</span>

<textarea style={{height:"auto"}} value={value3} onChange={valueHandle3} className="input-admin" placeholder="اینجا بنویسید..."></textarea>






<span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>چهارم</span></span>

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام چهارم :</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">15 / {step4.length}</span>

<input  className="num-info mx-4" type="text" value={step4} onChange={handle4} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام چهارم :</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">750 / {value4.length}</span>

<textarea style={{height:"auto"}} value={value4} onChange={valueHandle4} className="input-admin" placeholder="اینجا بنویسید..."></textarea>





<span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>پنجم</span></span>

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام پنجم :</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">15 / {step5.length}</span>

<input  className="num-info mx-4" type="text" value={step5} onChange={handle5} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام پنجم :</span>

<span style={{fontSize:"10px"}} className="d-flex justify-content-end">750 / {value5.length}</span>

<textarea style={{height:"auto"}} value={value5} onChange={valueHandle5} className="input-admin" placeholder="اینجا بنویسید..."></textarea>







<div className="btn-g">
<button className="btn btn-success"  type="submit">انتشار</button>
<Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        انتخاب کنید
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  as="button"><Link to="/page/admin/anounce-manage" >منتشر کردن</Link></Dropdown.Item>
        <Dropdown.Item as="button"><Link to="/page/admin/anounce-manage/update" >ویرایش و حذف</Link></Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown>
    </div>


    </form>
    
    
    </>)
}



export default EduCalendarManagement;