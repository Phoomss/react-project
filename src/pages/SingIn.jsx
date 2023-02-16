import React from 'react'
import '../pages/csslogin/login.css'
import { useNavigate } from 'react-router-dom'

const SingIn = () => {
  const navigate = useNavigate();

  return (
    <div className="display-login">
    <div className="wrapper">
      <div className="title">
        Login Form
      </div>
      <form action="#">
        <div className="field">
          <input type="text" required />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="field">
          <input type="submit" defaultValue="Login" onClick={() => navigate("/")}/>
        </div>
      </form>
    </div>
    </div> 

  )
}

export default SingIn