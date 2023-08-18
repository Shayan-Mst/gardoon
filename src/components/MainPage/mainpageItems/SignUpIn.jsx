import {  useRef, useState } from "react";
import { useCookies } from 'react-cookie';


const SignUpIn = () => {

   //states for toggles

const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [loginForm , setloginForm] = useState(true);
  const [emailActive1 , setEmailActive1] = useState(false);
  const [passwordActive1,setPasswordActive1] = useState(false);
  const [passwordValidActive , setpasswordValidActive] = useState(false);
  const [type, setType] = useState('password');
const [icon, setIcon] = useState('eye-on');
const [cookies, setCookie] = useCookies([]);


const tokenAccess = '';


  //useRef for refrence to a DOM on state change
  const loginRef = useRef();
  const signUpRef = useRef();
  const inputRef = useRef([null]);
  const errorRef = useRef([null]);
  const iconRef = useRef();


 
  //functions that handles focus or blur inputs
  const handleUserFocus = () => {
    setEmailActive(true);
    };

  const handleUserBlur = () => {
   if(inputRef.current['loginuser'].value.length == 0){
      
      errorRef.current['usererror'].style.display = 'flex'
      
   setEmailActive(false);
   }
   if(inputRef.current['loginuser'].value.length != 0) { errorRef.current['usererror'].style.display = 'none'}
      

   if( inputRef.current['loginuser'].value.length >= 1 && inputRef.current['loginuser'].value.length < 4){

      errorRef.current['usererror1'].style.display = 'flex'
   }
  if(inputRef.current['loginuser'].value.length >= 4) {errorRef.current['usererror1'].style.display = 'none'}
  
   
  };


  const handlePasswordFocus = () => {
    setPasswordActive(true);
  };


  const handlePasswordBlur = () => {

   if(inputRef.current['loginpassword'].value.length == 0)
{
      
      errorRef.current['passerror'].style.display = 'flex'
      setPasswordActive(false);
      }
      if(inputRef.current['loginpassword'].value.length != 0)  errorRef.current['passerror'].style.display = 'none'
   

      if( inputRef.current['loginpassword'].value.length >= 1 && inputRef.current['loginpassword'].value.length < 8){

         errorRef.current['passerror1'].style.display = 'flex'
      }
     if(inputRef.current['loginpassword'].value.length >= 8) {errorRef.current['passerror1'].style.display = 'none'}
     
   
    
  };



  const handleEmailFocus1 = () =>{
   setEmailActive1(true)
     }
   
   
     const handleEmailBlur1 = () =>{
      if(inputRef.current['signupemail'].value.length == 0) setEmailActive1(false)
     
     }


  const handlePasswordFocus1 = () => {
   setPasswordActive1(true);
 };


 const handlePasswordBlur1 = () => {
   if(inputRef.current['signuppassword'].value.length == 0)
   setPasswordActive1(false);
 };


const handleValidPasswordFocus = () => {
setpasswordValidActive(true);
}


const handleValidPasswordBlur = () => {
   if(inputRef.current['signuppasswordvalid'].value.length == 0)
   setpasswordValidActive(false);
   }
   
//function that handles form switch

 const switchForms = () => {

setloginForm(prev => !prev)


if(loginForm == false){

loginRef.current.classList.add('switched')
signUpRef.current.classList.remove('switched')

}
else if(loginForm == true) {

signUpRef.current.classList.add('switched')
loginRef.current.classList.remove('switched')

}
   
 }

function handleLoginSubmit(event) {
   event.preventDefault();


   if(inputRef.current['loginpassword'].value.length == 0)  errorRef.current['passerror'].style.display = 'flex'
  
   if(inputRef.current['loginuser'].value.length == 0)  errorRef.current['usererror'].style.display = 'flex'


   if(true){
  
      const value = 'your_value_here';
      setCookie('tokenAccess', value, { path: '/signin' });
   
   
   }
 

}


  
 

const handleShowPass = () => {

   if (type==='password'){
      setIcon(null);
      iconRef.current.classList.remove('eye-off')
      setType('text')
   } else {
      setIcon('eye-off')
      iconRef.current.classList.add('eye-off')
      setType('password')
   }
}





return(
 <>
 
 <div className="signinup">

   <section id="formHolder">

<div className="row">

<div className="col-lg-6 brand">
            

            <div className="heading">
               <h2>گردون</h2>
               <p style={{color:"rgb(0,177,106)"}}>دانشگاه سمنان</p>
            </div>

            <div className="success-msg">
               <p>ثبت نام با موفقیت انجام شد!</p>
               
            </div>
   </div>

   <div className="col-lg-6 form">

            
            <div className="login form-peice switched"  ref={loginRef}>
               <form onSubmit={handleLoginSubmit} className="login-form" action="#" method="post">
                  <div className="form-group">
                     <label className={emailActive ? 'active' : null}  htmlFor="loginuser">نام کاربری</label>
                     <input disabled ={loginForm ? false : true} ref={el => inputRef. current['loginuser'] = el} onFocus={handleUserFocus} onBlur={handleUserBlur}  type="text" name="loginuser" id="loginuser" />
                 <span ref={el => errorRef.current['usererror'] = el} className="mt-2">لطفا نام کاربری را پر کنید</span>
                 <span ref={el => errorRef.current['usererror1'] = el} className="mt-2">نام کاربری نمیتواند کمتر از 4 کاراکتر باشد</span>
              
                  </div>

                  <div className="form-group">
                     <label className={passwordActive ? 'active' : null} htmlFor="loginPassword">رمزعبور</label>
                     <input disabled ={loginForm ? false : true} ref={el => inputRef.current['loginpassword'] = el} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} type={type} name="loginPassword" id="loginPassword" />
                     <span ref={el => errorRef.current['passerror1'] = el} className="mt-2">نام کاربری نمیتواند کمتر از 8 کاراکتر باشد</span>
                     <span ref={el => errorRef.current['passerror'] = el} className="mt-2">لطفا رمزعبور را پر کنید</span>
                     <i ref={iconRef} onClick={handleShowPass} className="fa-solid fa-eye"/>
                  </div>
      
                  <div className="CTA">
                     <button type="submit">ورود</button>
                     <small  onClick={switchForms} style={{cursor:"pointer"}} className={`switch ${loginForm ? 'active' : null}`}>حساب کاربری ندارم!</small>
                  </div>
               </form>
            </div>


            
            <div className="signup form-peice" ref={signUpRef}>
               <form onSubmit={handleLoginSubmit} className="signup-form" action="#" method="post">


                  <div className="form-group">
                     <label className={emailActive1 ? 'active' : null} htmlFor="email">ایمیل</label>
                     <input disabled ={loginForm ?  true : false} ref={el => inputRef.current['signupemail'] = el} onFocus={handleEmailFocus1} onBlur={handleEmailBlur1} type="email" name="emailAdress" id="email" className="email"/>
                     <span className="error"></span>
                  </div>

                  

                  <div className="form-group">
                     <label className={passwordActive1 ? 'active' : null} htmlFor="password">رمز عبور</label>
                     <input disabled ={loginForm ?  true : false} ref={el => inputRef.current['signuppassword'] = el} onFocus={handlePasswordFocus1} onBlur={handlePasswordBlur1} type="password" name="password" id="password" className="pass"/>
                     <span className="error"></span>
                  </div>

                  <div className="form-group">
                     <label className={passwordValidActive ? 'active' : null} htmlFor="passwordCon">تایید رمز عبور</label>
                     <input disabled ={loginForm ?  true : false} ref={el => inputRef.current['signuppasswordvalid'] = el} onFocus={handleValidPasswordFocus} onBlur={handleValidPasswordBlur} type="password" name="passwordCon" id="passwordCon" className="passConfirm"/>
                     <span className="error"></span>
                  </div>

                  <div className="CTA">
                  <button type="submit">ثبت نام</button>
                   <small onClick={switchForms}  style={{cursor:"pointer"}}  className={`switch ${loginForm ? null : 'active'}`}>حساب کاربری دارم!</small>
                  </div>
               </form>
            </div>
         </div>

</div>



   </section>


 </div>
 
 
 </>






)}

export default SignUpIn;