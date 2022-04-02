import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
 import {db} from '../firebase.config'
import visibility from '../assets/svg/visibilityIcon.svg'

const SignIn = () => {
  const [showPassword, setShowPassword ] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:''
  })
   const {name,email,password} = formData
   
  const navigate = useNavigate(); 

  const onChangeHandler = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id] : e.target.value
    })) 
   
  }


  // onSubmit Handler for submitting form

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try{
      const auth = getAuth()
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      updateProfile(auth.currentUser, {
        displayName:name,
      })

      navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  return (    
    <>
      <div className="pageContainer">
        <header>
         <p className="pageHeader">Welcome Back!</p>
        </header>

          {/* SignIn form  */}
          <form onSubmit={onSubmitHandler} >
           
            <input type="text" 
            className="nameInput" 
            placeholder="Name" 
            id="name" 
            value={name} 
            onChange={onChangeHandler}/>              {/* Name Input */}   

           <input type="email" 
            className="emailInput" 
            id="email" value={email} 
            placeholder="Email"
            onChange={onChangeHandler}/>  {/* Email Input */}

           <div className="passwordInputDiv">
             <input type={showPassword ? 'text' : 'password'}
              className="passwordInput" 
              id="password" 
              placeholder="Password"            
              value={password} 
             onChange={onChangeHandler}/>                   {/* Password Input */}

             <img src={visibility} 
             alt='show password'
             className="showPassword"
              onClick={() =>setShowPassword((prevState) => !prevState)} />
            </div>

            <Link to="/forget-password" className="forgotPasswordLink">                     {/* forgotpasswordlink */}
              Forgot Password
            </Link>

            <div className="signUpBar">
              <p className="signUpText">
                Sign Up
              </p>
              <button className="signUpButton">
               <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          {/* Google OAuth */}
          <Link to='/sign-in' className="registerLink">
            Sign In Instead 
          </Link>
        </div>
      
   
      
      
      
    </> 
  ) 
}

export default SignIn;
