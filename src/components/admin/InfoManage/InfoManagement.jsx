import { createInfo } from "../../../service/gardoonService";
import Sidebar from "../Sidebar"
import { useState ,useEffect,useRef } from "react";


const InfoManagement = () => {


    const [side,setSide] = useState(true);

    const [info,setInfo] = useState({
      number:'',
      address:'',
      email:'',
      description:''
    })
  

  const handleChange = (event) => {  //for number input
    const regex =/^[0-9-\b]+$/; // regular expression to only allow numbers and dash
    const inputValue = event.target.value;

    if (inputValue === '' || regex.test(inputValue) && inputValue.length <= 12) { // check if the input value matches the regular expression
      setInfo({...info,number:inputValue});
    }
  };
    

  const dscHandle = (event) => {

    const inputValue = event.target.value;
    if (inputValue.length <= 160) {
      setInfo({...info, description : inputValue});
     
    }
  }

  const handleChangeEmail = (event) => {

    setInfo({...info, email : event.target.value});

  }

  const handleAddress = (event) => {

    setInfo({...info, address : event.target.value});

  }
  
  
    const inputRef = useRef(['']);
  
    useEffect(()=>{
  
      const page = document.querySelector('.info-manage')
          
      if(side == false) page.style.marginRight='5%'
      
      else page.style.marginRight = '15%'
  
  
    })
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try{

        const response = await createInfo(info)
        
        console.log(response.status)
        }
        
        catch(error){
        
          console.log(error)
        }

    }

    return(<>
    
    
    
    <Sidebar setSide={setSide}/>
    
    <form className="info-manage" onSubmit={handleSubmit}>
    
<div className="text">
<span className="d-flex tit mb-4">بارگذاری <span className="mx-2" style={{color:"rgb(0,177,106)"}}> متن</span> اطلاعات </span>

<span className="d-flex mb-4 mt-4" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>توضیحات</span>سایت صفحه اصلی آخر سایت</span>
<span style={{fontSize:"10px"}} className="d-flex justify-content-end">160 / {info.description.length}</span>

<textarea  className="input-admin" type="text" value={info.description} onChange={dscHandle} />

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4  input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>شماره</span>دانشگاه :</span>

<input  className="num-info mx-4" type="text" value={info.number} onChange={handleChange} />
</div>


<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>ایمیل</span>دانشگاه     :</span>

<input  className="num-info mx-4" type="email" value={info.email} onChange={handleChangeEmail} />
</div>


<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>آدرس</span>دانشگاه     :</span>

<input  className="num-info mx-4" type="text" value={info.address} onChange={handleAddress} />
</div>

</div>


<div className="btn-g">
<button className="btn btn-success"  type="submit">انتشار</button>

    </div>
      
        </form>
    
    
    </>)
}



export default InfoManagement;