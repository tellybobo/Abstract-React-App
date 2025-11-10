import { Link } from 'react-router-dom'
import abstractLogo from "./abstract-logo.svg"

export default function Signin() {
  return (
    <div className="new-account-container">
        <div className="signin-top-bar">
           <img src={abstractLogo} alt="Abstract Logo" />
       </div>
       <div className="new-account">
        <h1>Sign in</h1>
          <p>New to Abstract? <Link to = "/startTrial">Create a new account</Link></p>
          <div className="user-input">
             <label htmlFor="email">Email or username</label>
           <input type="email" 
           placeholder='duncan@gmail.com or duncantravis'
           />
           <p>Enter a valid email address or username</p>
          </div>
          <div className="account-btn">
            <button>Create account</button>
          </div>
          
       </div>
    </div>
   
        
  )
}