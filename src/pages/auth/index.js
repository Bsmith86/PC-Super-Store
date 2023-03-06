import React, { useState } from 'react'
import SignUpForm from '../../components/sign_up'
import Login from '../../components/logIn'
import './index.css';


const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleButtonClick = () => {
    setIsSignup(isSignup ? false : true);
  }

  return (
    <section className="auth-page">
      <div className="logo-container">
        <button className="login-button btn-md" onClick={handleButtonClick}>{isSignup ? "Login" : "Join Us"}</button>
      </div>

      {isSignup ?
      <SignUpForm />
      :
      <Login />
      }
      
    </section>
  )
}

export default Auth