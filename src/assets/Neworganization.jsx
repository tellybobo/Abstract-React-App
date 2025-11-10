import { useState } from "react";
import abstractLogo from "./abstract-logo.svg";
import { Link } from "react-router-dom"
import { StepIndicator } from "../Start-trial";
import "./Neworganization.css"


export default function Neworganization() {
  const [designers, setDesigners] = useState('');
  const designerNumbers = ['1', '2-5', '6-10', '11-50', '51-100', '100+'];
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
    <div className="neworganization-container">
  {/* Top Bar */}
  <div className="neworganization-top-bar">
    <div className="neworganization-left">
      <img src={abstractLogo} alt="Abstract Logo" className="neworganization-logo-img" />
    </div>
    <div className="neworganization-center">
      <StepIndicator currentStep={currentStep} />
    </div>
    <div className="neworganization-right"></div>
  </div>

  {/* Main Form Section */}
  <div className="new-organization">
    <h1>Create your <br/> Organization</h1>
    <p>Organizations are workspaces where you <br/>  collaborate on design files with your team.</p>
    <p>Your 14-day trial gives you an inclusive preview of <br/>  Abstract’s powerful capabilities.</p>

    <div className="organization-form">
      <label htmlFor="name">Organization name</label>
      <input type="text" id="name" placeholder="e.g. Acme or Acme-Design" />

      <div className="select-numbers">
        <label htmlFor="number">Number of designers in your company</label>
        <select
          name="number"
          id="number"
          value={designers}
          onChange={(e) => setDesigners(e.target.value)}
          required
        >
          <option value="">
            – Please Select –
          </option>
          {designerNumbers.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
<div className="select-terms">
  <div className="terms-wrapper">
    <input type="checkbox" />
    <p>I’ve read and accept the <Link to = "/Trial-agreement">Trial Agreement.</Link></p>
  </div>
</div>
        <button type="Submit">Create Organization</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}