import { useEffect, useRef, useState } from "react";






const SignUpIn = () => {

   //states for toggles

const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [loginForm , setloginForm] = useState(true);
  const [emailActive1 , setEmailActive1] = useState(false);
  const [passwordActive1,setPasswordActive1] = useState(false);
  const [passwordValidActive , setpasswordValidActive] = useState(false);

  //useRef for refrence to a DOM on state change
  const loginRef = useRef();
  const signUpRef = useRef();
  const inputRef = useRef([null])


  useEffect(() => {


if(inputRef.current['loginemail'].value.length != 0){setEmailActive(true)}



   console.log(emailActive)
  })
  //functions that handles focus or blur inputs
  const handleEmailFocus = () => {
    setEmailActive(true);
  };

  const handleEmailBlur = () => {
   if(inputRef.current['loginemail'].value.length == 0)
      setEmailActive(false);
   
   
  
  };

  const handleEmailFocus1 = () =>{
setEmailActive1(true)
  }

  const handleEmailBlur1 = () =>{
   if(inputRef.current['signupemail'].value.length == 0) setEmailActive1(false)
  
  }

  const handlePasswordFocus = () => {
    setPasswordActive(true);
  };

  const handlePasswordBlur = () => {

   if(inputRef.current['loginpassword'].value.length == 0)

      setPasswordActive(false);
    
  };

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
               <form className="login-form" action="#" method="post">
                  <div className="form-group">
                     <label className={emailActive ? 'active' : null}  htmlFor="loginemail">ایمیل</label>
                     <input disabled ={loginForm ? false : true} ref={el => inputRef.current['loginemail'] = el}  onFocus={handleEmailFocus} onBlur={handleEmailBlur}  type="email" name="loginemail" id="loginemail" required/>
                  </div>

                  <div className="form-group">
                     <label className={passwordActive ? 'active' : null} htmlFor="loginPassword">رمزعبور</label>
                     <input disabled ={loginForm ? false : true} ref={el => inputRef.current['loginpassword'] = el} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} type="password" name="loginPassword" id="loginPassword" required/>
                  </div>
      
                  <div className="CTA">
                     <input type="submit" value="ورود"/>
                     <small  onClick={switchForms} style={{cursor:"pointer"}} className={`switch ${loginForm ? 'active' : null}`}>حساب کاربری ندارم!</small>
                  </div>
               </form>
            </div>


            
            <div className="signup form-peice" ref={signUpRef}>
               <form className="signup-form" action="#" method="post">


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
                     <input type="submit" value="ثبت نام" id="submit"/>
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