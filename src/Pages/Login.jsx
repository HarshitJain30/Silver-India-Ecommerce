import React from 'react'
import './CSS/Login.css'
const Login = () => {
  return (
    <div className = "loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type = "text" placeholder = 'Name' />
          <input type = "email" placeholder = 'Email' />
          <input type = "password" placeholder = 'Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an Account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id = ''/>
          <p>By continuing, I agree to the Terms of Use & Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login
