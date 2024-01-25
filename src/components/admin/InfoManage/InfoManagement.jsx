import { useParams } from "react-router-dom";
import {  getInfo, updateInfo } from "../../../service/gardoonService";
import Sidebar from "../Sidebar"
import { useState ,useEffect} from "react";
import toast,{ Toaster } from "react-hot-toast";


const InfoManagement = () => {


    const [side,setSide] = useState(true);

   
    const [holder,setHolder] = useState([])



    useEffect(()=>{


const fetch = async() =>{

const {data:infoData} = await getInfo();
setHolder(infoData);

}

fetch();

    },[])

  const handleChange = (event) => {  //for number input
    const regex =/^[0-9-\b]+$/; // regular expression to only allow numbers and dash
    const inputValue = event.target.value;

    if (inputValue === '' || regex.test(inputValue) && inputValue.length <= 12) { // check if the input value matches the regular expression
    
    setHolder({...holder,phone_number : inputValue})
    
 
    }
  };
    

  const dscHandle = (event) => {

    const inputValue = event.target.value;
    if (inputValue.length <= 160) {
      
      setHolder({...holder,description : inputValue})
      
   
     
    }
  }

  const handleChangeEmail = (event) => {

    const inputValue = event.target.value;
    setHolder({...holder,email : inputValue})
    
 

  }

  const handleAddress = (event) => {

    const inputValue = event.target.value;
    setHolder({...holder,address : inputValue})
    
 
 
  }
  
  
  
    useEffect(()=>{
  
      const page = document.querySelector('.info-manage')
          
      if(side == false) page.style.marginRight='5%'
      
      else page.style.marginRight = '15%'
  
  
    })
  
    const handleSubmit = async event => {
      event.preventDefault();

      try{

        const response = await updateInfo(holder,1)
        
        console.log(response.status)
        if (response.status == 201) {
          
          toast.success('رویداد با موفقیت اضافه شد', {
            duration: 4000,
            position: 'top-center',
          
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
        }
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

<textarea  className="input-admin" type="text" value={holder.description} onChange={dscHandle} />

<div className="d-flex align-items-center my-4">
<span className="d-flex my-4  input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>شماره</span>دانشگاه :</span>

<input  className="num-info mx-4" type="text" value={holder.phone_number} onChange={handleChange} />
</div>


<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>ایمیل</span>دانشگاه     :</span>

<input  className="num-info mx-4" type="email" value={holder.email} onChange={handleChangeEmail} />
</div>


<div className="d-flex align-items-center my-4">
<span className="d-flex my-4 input-label" style={{fontSize:"20px"}}><span className="mx-2" style={{color:"rgb(0,177,106)"}}>آدرس</span>دانشگاه     :</span>

<input  className="num-info mx-4" type="text" value={holder.address} onChange={handleAddress} />
</div>

</div>


<div className="btn-g">
<button className="btn btn-success"  type="submit">انتشار</button>

    </div>
      
        </form>
    <Toaster/>
    
    </>)
}



export default InfoManagement;