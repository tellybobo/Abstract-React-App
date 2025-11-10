import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import abstractLogo from "./abstract-logo.svg";
import carPhoto from "./car-photo.svg"
import "./Trial-agreement.css"
import "./Pricing.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export default function Pricing() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted", email);
  }
  return (
    <>
     <div className="agreement-container">
           <div className="agreement-header">
       <img src= {abstractLogo} alt="" />
        <Link to= "/Signin">Sign in</Link>
        
      </div>
       <div className="pricing-plan">
    <h1>Pricing Plans</h1>
    <p>From small agencies to large enterprises with multiple teams, <br /> we are here to support you choosing a plan that works for you.</p>
   </div>
   <div className="version-control">
     <h1 style={{marginTop: '-80px'}}>Version Control For Sketch Files</h1>
     <p>Abstract is used by one in three of the Fortune 500 and loved by <br /> Designs all over the world</p>
   
   
   </div>
  <div className="table-price">
      <table>
      <thead>
        <tr>
           <th>Abstract Pro</th>
           <th className="abstract-enterprice">Abstract Enterprice</th>
       </tr>
  </thead>
  <tbody>
      <tr>
      <td><h2>$35</h2>
      <p style={{fontSize: '1rem', fontWeight: '500', marginTop: '-30px'}}>Per month, per contributor, if billed annually</p>
      <button>Get started</button>
   </td>
    <td><h2>Custom</h2>
      <p style={{fontSize: '1rem', fontWeight: '500', marginTop: '-30px'}}>Custom pricing, per contributor, billed annually.</p>
      <button>Contact sales</button>
   </td>
</tr>
      <tr>
      <td>
      <p style={{fontSize: '1.5rem', fontWeight: '500'}}>End-to-end design workflow.</p>
    </td>
    <td>
      <p style={{fontSize: '1.5rem', fontWeight: '500'}}>Everything in Pro, plus:</p>
    </td>
    
     </tr>
      <tr className="last-row">
      <td>
       
      <p> File management and version control up to 50GB of storage <br /> with unlimited viewers</p>
      
      <p> Review requests, Collections for reviews and presentation, <br /> use Inspect to see elements and assets for all specifications <br /> and CSS</p>
      <p> Price per contributor $44 if billed monthly</p>
     
   </td>
    <td>
     <p> Project Sections, Merge restrictions, Inspect with High-Res <br /> Preview, Branch Reporting, and no cap on seats or storage</p>
      
      <p> Advanced security features like SSO access for an SAML <br /> vendor with JIT provisioning</p>
      <p> Custom legal terms, security questionnaires and security <br /> documentation</p>
   </td>
    
     </tr>
   
  </tbody>
    </table>

     </div>
     <div className="design-insights">
      <div className="latest-design">
        <h1>Get the latest <br /> design insights <br /> delivered!</h1>
    <form className="email-form" onSubmit={handleSubmit}>
      <input type="email" 
      placeholder="Email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required/>
      <button type="submit">Submit</button>
    </form>
      </div>
      
    <img src={carPhoto} alt="" />
     </div>
     
       <div style={{marginTop: '0'}} className="agreement-footer">
        <div className="copy-right">
           <img src={abstractLogo} alt="" />
           <p>© Copyright 2025 <br />
              Abstract Studio Design, Inc. <br />
              ‍All rights reserved</p>
        </div>
        <div className="links">
           <div className="resources">
              <ul>
                 <li>
                    <h1>Resources</h1>
                    <Link>Blog</Link>
                    <Link>Help Center</Link>
                    <Link>Contact Support</Link>
                    <Link>Release Notes</Link>
                    <Link>Status</Link>
                 </li>
              </ul>
           </div>
           <div className="resources">
              <ul>
                 <li>
                    <h1>Company</h1>
                    <Link>About Us</Link>
                    <Link>Career</Link>
                    <Link>Legal</Link>
                    <Link>Privacy</Link>
                    <Link>Website Terms of Use</Link>
                 </li>
              </ul>
     
           </div>
           <div className="resources">
              <ul>
                 <li>
                    <h1>Social</h1>
                    <Link>Tweeter</Link>
                    <Link>LinkIn</Link>
                    <Link>Facebook</Link>
                    <Link>Dribbble</Link>
                    <Link>Status</Link>
                 </li>
              </ul>
           </div>
        </div>
    </div>
   </div>
    </>
  
  )
}