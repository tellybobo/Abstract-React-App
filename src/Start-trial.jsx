import { Link } from 'react-router-dom'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import abstractLogo from "./assets/abstract-logo.svg";


 export function StepIndicator({ currentStep }) {
    
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

export default function StartTrial() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
   const [currentStep, setCurrentStep] = useState(1);
   const [accountCreated, setAccountCreated] = useState(false);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' }); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Please fill out this field";
    if (!formData.name.trim()) newErrors.name = "Please fill out this field";
    if (!formData.password.trim()) newErrors.password = "Please fill out this field";
    if (!isTermsChecked) {newErrors.terms = "Please check this box if you want to proceed"}

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Form submitted:", formData);
      // Handle submission or API call here
    }

    if(Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);

      setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
    }

    if (Object.keys(newErrors).length === 0) {
      setAccountCreated (true);
    }
  };

  if (accountCreated) {
    window.location.href = "/createorjoin"
    return null
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

      <div className="signin-form">
        <div className="account-setup">
          <h1>A little bit about yourself</h1>
          <h2>Let's get your account setup!</h2>
          <p>Already have an account? <Link to = "/Signin">Sign In Here</Link></p>
        </div>

        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                id="email"
                placeholder="duncantravis374@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
             {errors.email && (
  <div className="custom-error">
    <span className="icon">!</span>
    <span>{errors.email}</span>
    <div className="error-arrow"></div>
  </div>
)}
 </div>

    <div className="form-group">
      <label htmlFor="name">Full Name</label>
    <input
      type="text"
      id="name"
      placeholder="Duncan Travis"
      value={formData.name}
      onChange={handleChange}
    />
               {errors.name && (
  <div className="custom-error">
    <span className="icon">!</span>
    <span>{errors.email}</span>
    <div className="error-arrow"></div>
  </div>
)}
            </div>

            <div className="form-group password-field">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="................"
                value={formData.password}
                onChange={handleChange}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className={`password-icon ${showPassword ? "active" : ""}`}
                onClick={() => setShowPassword(!showPassword)}
              />
               {errors.password && (
  <div className="custom-error">
    <span className="icon">!</span>
    <span>{errors.email}</span>
    <div className="error-arrow"></div>
  </div>
)}
            </div>

            <div className="checkbox-group">
              <div className="checkbox-item">
                <input type="checkbox" id="option1" name="option1" />
                <label htmlFor="option1">Send me product news and training emails.</label>
              </div>
              <div className="checkbox-item terms-checkbox">
                <input type="checkbox" 
                id="option2"
                 name="option2"
                 checked = {isTermsChecked} 
                 onChange={(e) =>
                  setIsTermsChecked(e.target.checked)
                 }
                 />
      
                <label htmlFor="option2">
                  I’ve read and accept the <a href="#">Terms of Service.</a>
                </label>

                {errors.terms && (
                  <div className="custom-error checkbox-error">
                   <span className="icon">!</span>
                    <span>{errors.terms}</span>
                    <div className="checkbox-error-arrow">

                    </div>
                  </div>
                )}
              </div>
            </div>
              <div className="create-account">
            <button type="submit">Create account</button>
          </div>
           
          </form>
         
        </div>
      </div>
    </div>
  );
}