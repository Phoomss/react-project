import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingUp = () => {
  const navigate = useNavigate();

  return (
    <div className="display-login">
    <div className="wrapper">
      <div className="title">
        Sing Up
      </div>
      <form action="#">
        <div className="field">
          <input type="text" required />
          <label>Name</label>
        </div>
        <div className="field">
          <input type="text" required />
          <label>Email</label>
        </div>
        <div className="field">
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="field">
          <input type="submit" defaultValue="Login" onClick={() => navigate("/sing in")} />
        </div>
      </form>
    </div>
    </div> 
  )
}

export default SingUp