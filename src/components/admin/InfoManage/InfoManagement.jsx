
import Sidebar from "../Sidebar"
import { useState ,useEffect,useRef } from "react";
import sem from './../../../assets/semnan.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import ReactQuill from 'react-quill';

import { Link } from "react-router-dom";

const InfoManagement = () => {


    const [side,setSide] = useState(true);

    const [value, setValue] = useState('');
  
    const [number, setNumber] = useState('');

    const [address,setAddress] = useState('');

    const [email, setEmail] = useState('');

  const handleChange = (event) => {
    const regex =/^[0-9-\b]+$/; // regular expression to only allow numbers and dash
    const inputValue = event.target.value;

    if (inputValue === '' || regex.test(inputValue) && inputValue.length <= 12) { // check if the input value matches the regular expression
      setNumber(inputValue);
    }
  };
    

  const dscHandle = (event) => {

    const inputValue = event.target.value;
    if (inputValue.length <= 160) {
      setValue(inputValue);
     
    }
  }

  const handleChangeEmail = (event) => {
setEmail(event.target.value)

  }

  const handleAddress = (event) => {


    setAddress(event.target.value)
  }
  
  
    const inputRef = useRef(['']);
  
    useEffect(()=>{
  
      const page = document.querySelector('.info-manage')
          
      if(side == false) page.style.marginRight='5%'
      
      else page.style.marginRight = '15%'
  
  
    })
  

    return(<>
    
    
    
    <Sidebar setSide={setSide}/>
    
    <form className="info-manage">
    
<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> اطلاعات </span>



<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>سایت صفحه اصلی آخر سایت</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">160 / {value.length}</span>

<textarea  className="input-admin" type="text" value={value} onChange={dscHandle} />

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4  input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>شماره</span>دانشگاه :</span>

<input  className="num-info mx-4" type="text" value={number} onChange={handleChange} />
</div>


<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>ایمیل</span>دانشگاه     :</span>

<input  className="num-info mx-4" type="email" value={email} onChange={handleChangeEmail} />
</div>





<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>آدرس</span>دانشگاه     :</span>

<input  className="num-info mx-4" type="email" value={address} onChange={handleAddress} />
</div>




</div>




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



export default InfoManagement;