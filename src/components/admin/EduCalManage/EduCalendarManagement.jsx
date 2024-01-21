import Sidebar from "../Sidebar"
import { useState,useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { createCalEdu } from "../../../service/gardoonService";



const EduCalendarManagement = () => {

    const [side,setSide] = useState(true);


    const [eduCal,setEducal] = useState([{
name1:"",
description1:"",

name2:"",
description2:"",

name3:"",
description3:"",

name4:"",
description4:"",

name5:"",
description5:""



    }])

   


    
    useEffect(() => {


        const page = document.querySelector('.educal-manage')
        
        if(side == false) page.style.marginRight='5%'
        
        else page.style.marginRight = '15%'



        console.log(eduCal)

        })
      
      
        const valueHandle1 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 300) {
            setEducal({...eduCal,description1:inputValue})
           
          }

        }
        const valueHandle2 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 300) {
            setEducal({...eduCal,description2:inputValue})
           
           
          }

        }
       

        const valueHandle3 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 300) {
            setEducal({...eduCal,description3:inputValue})
           
           
          }

        }

        const valueHandle4 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 300) {
            setEducal({...eduCal,description4:inputValue})
           
           
          }

        }
       
        const valueHandle5 = (event) =>{
          const inputValue = event.target.value;
          if (inputValue.length <= 300) {
            setEducal({...eduCal,description5:inputValue})
           
          }

        }
       


        const handle1 = (event) => {
          const inputValue = event.target.value;
          if (inputValue.length <= 25) {
            setEducal({...eduCal,name1:inputValue})
           
          }
          }

          const handle2 = (event) => {
            const inputValue = event.target.value;
          if (inputValue.length <= 25) {
            setEducal({...eduCal,name2:inputValue})
           
          }
          }


          const handle3 = (event) => {
            const inputValue = event.target.value;
          if (inputValue.length <= 25) {
            
            setEducal({...eduCal,name3:inputValue})
           
          }
          }

          const handle4 = (event) => {
            const inputValue = event.target.value;
            if (inputValue.length <= 25) {
             
              setEducal({...eduCal,name4:inputValue})
           
            }
          }

          const handle5 = (event) => {
            const inputValue = event.target.value;
            if (inputValue.length <= 25) {
             
              
              setEducal({...eduCal,name5:inputValue})
           
            }
          }
          
          const toServer = async(event)=>{

            event.preventDefault();

try{

  const response = await createCalEdu(eduCal);

  console.log(response.status)

}

catch(error){
console.log(error);

}

          }

    return(<>
    
    
    <Sidebar setSide={setSide}/>
    
    
    <form onSubmit={toServer} className="educal-manage">

    <span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>اول</span></span>


    <div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام اول :</span>

<input  className="num-info mx-4" type="text" value={eduCal.name1} onChange={handle1} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام اول :</span>


<textarea style={{height:"auto"}} value={eduCal.description1} onChange={valueHandle1} className="input-admin" placeholder="اینجا بنویسید..."></textarea>



<span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>دوم</span></span>

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام دوم:</span>

<input  className="num-info mx-4" type="text" value={eduCal.name2} onChange={handle2} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام دوم :</span>

<textarea style={{height:"auto"}} value={eduCal.description2} onChange={valueHandle2} className="input-admin" placeholder="اینجا بنویسید..."></textarea>





<span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>سوم</span></span>

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام سوم :</span>

<input  className="num-info mx-4" type="text" value={eduCal.name3} onChange={handle3} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام سوم :</span>

<textarea style={{height:"auto"}} value={eduCal.description3} onChange={valueHandle3} className="input-admin" placeholder="اینجا بنویسید..."></textarea>






<span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>چهارم</span></span>

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام چهارم :</span>

<input  className="num-info mx-4" type="text" value={eduCal.name4} onChange={handle4} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام چهارم :</span>

<textarea style={{height:"auto"}} value={eduCal.description4} onChange={valueHandle4} className="input-admin" placeholder="اینجا بنویسید..."></textarea>





<span className="d-flex tit my-4">بارگذاری  گام <span className="mx-2" style={{color:"rgb(0,177,106)"}}>پنجم</span></span>

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>نام</span> گام پنجم :</span>

<input  className="num-info mx-4" type="text" value={eduCal.name5} onChange={handle5} />
</div>
<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>گام پنجم :</span>


<textarea style={{height:"auto"}} value={eduCal.description5} onChange={valueHandle5} className="input-admin" placeholder="اینجا بنویسید..."></textarea>







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