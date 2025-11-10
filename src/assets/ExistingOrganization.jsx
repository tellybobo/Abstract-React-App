import { useState } from "react";
import abstractLogo from "./abstract-logo.svg";
import { Link } from "react-router-dom"
import { StepIndicator } from "../Start-trial";
import image6 from "./icon-comment.png"


export default function Existingorganization() {
   const [currentStep, setCurrentStep] = useState(3);
      
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
    <>
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
</div>
<div className="your-inbox-container">
    <div className="your-inbox">
      <img src={image6} alt="" />
      <h1>Check your inbox!</h1>
      <div className="para">
        <p>Follow the link in the email we sent and we will <br /> connect you to your Abstract Organization.</p>
      <p>
        You can also reach out to one of your Organization Admins for an invitation.
      </p>
      </div>
     
      <button>Back to Abstract.com</button>
    </div>
  
</div>
  
    </>
  
  );



}
