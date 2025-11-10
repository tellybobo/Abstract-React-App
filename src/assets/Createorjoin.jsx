import { useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { StepIndicator } from "../Start-trial";
import abstractLogo from "./abstract-logo.svg";


export default function organization() {
    const [currentStep, setCurrentStep] = useState(2);
    
   function StepIndicator({ currentStep }) {
   
    const steps = [1, 2, 3, 4];
    return (
      <div className="step-indicator">
        {steps.map((step) => (
          <div
            key={step}
            className={`step ${currentStep === step ? "active" : ""}`}
          ></div>
        ))}
      </div>
    );
  }
  
  return (
   <div className="start-trial-container">
      <div className="top-bar">
        <div className="left">
          <img src={abstractLogo} alt="Abstract Logo" className="logo-img" />
        </div>
        <div className="center">
           <StepIndicator currentStep={currentStep} />
        </div>
        <div className="right"></div>
      </div>

      <div className="create-or-join">
       
        <h1>Create or join an Organization</h1>
        <p>In Abstract, everything happens in
           an Organization. This is where 
           your team gathers to 
           communicate and get work done.</p>
        <Link>Skip this step for now</Link>
      </div>
       <div className="organize">
        <div className="join-organization">
        <FontAwesomeIcon icon={faPuzzlePiece} 
        style = {{
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: ' rgb(206, 206, 6)',
          fontSize: '5rem',
          fontWeight: '500',
          transform: 'rotate(-40deg)',
          padding: '10px',
          marginTop: '20px',
         
        }}
        />
       <h1>Join an existing Organization</h1>
       <p>Confirm your email address and
         request access to your 
         team’s Abstract Organization.
         </p>
        <Link to = "/existingorganization"><button>Join</button></Link>
      </div>
      <div className="join-organization">
           <FontAwesomeIcon icon={faTimes}
        style={{
          transform: 'rotate(-45deg)',
           display:'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
           fontSize: '5rem',
          fontWeight: '500',
          backgroundColor: 'blue',
          border:'2px solid #000',
          borderRadius: '20px',
          padding: '10px',
          marginTop: '20px',

        }} />
          <h1>Create a new Organization</h1>
          <p>Explore Abstract. Create a new 
            collaborative workspace 
            for your team or company.
            </p>
            <Link to = "/new-organization"><button>Create new</button></Link>
            <span>14-DAY TRIAL</span>

      </div>
 </div>
     
  </div>
  )
}
