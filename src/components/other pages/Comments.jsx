
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';










const Comments = ({setShow}) => {


    const [comment, setComment] = useState('');

    const [name,setName] = useState('');

    const [email,setEmail] = useState('');

    const [comments ,setComments] = useState({

      name :'',
      email : '',
      cm : ''
    })

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const location = useLocation();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) =>{

    setName(event.target.value)
  }


  const handleEmailChange = (event) =>{

    setEmail(event.target.value)
  }

   
  const handleCaptchaVerification = () => {
    // Verify the response with your backend server
    // and set the isCaptchaVerified state accordingly
    
    setIsCaptchaVerified(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (true) {
      
     setComments({...comments , name : name});
     setComments({...comments , email : email});
     setComments({...comments , cm : comment});
      console.log(comments)
    } else {
      // Display an error message or take appropriate action
      console.log("Please verify the CAPTCHA");
    }
  };



  const scrollToComment = () =>{

   
    setShow('comment');

    window.scrollTo({ top:450, behavior: 'smooth' });


  }

return(<>


<form onSubmit={handleSubmit} className="comment container">
    

<span className="d-flex tit">دیدگاه</span>


<div style={{height:"44px",width:"500px"}} className="d-flex mb-4">
  
  <div className="input">
  <label className='mx-1 d-flex align-items-center' htmlFor='name-input'>نام و نام خانوادگی</label>
  <input  className="py-2 px-2 " type="text" id="name-input" name="name"  value={name} onChange={handleNameChange} required/>
   </div>
  
</div>

<div style={{height:"44px",width:"500px"}} className="d-flex mb-4">
  
  <div className="input">
  <label className='mx-1 d-flex align-items-center' htmlFor='email-input'>پست الکترونیکی </label>
  <input  className="py-2 px-2 " type="email" id="email-input" name="email"  value={email} onChange={handleEmailChange} required/>
   </div>
  
</div>

<ReCAPTCHA className='captcha' style={{marginRight:"155px"}}  
        sitekey="6LeB7YMnAAAAAAAvmEzJO21uW-RMCHeWsHVuEA5G"
        onChange={handleCaptchaVerification}
      />

<textarea value={comment}
        onChange={handleCommentChange}
        placeholder="نظر خود را اینجا بنویسید..." required/>

<div className='d-flex butt'>
<button className='m-4 d-inline btn btn-success' type="submit">ارسال دیدگاه</button>

{location.pathname === '/events/eventId'? null : <span onClick={scrollToComment} className='m-4 d-inline btn btn-primary pt-3'>مشاهده دیدگاه ها</span>
}
</div>
</form>

</>)

}





export default Comments;