
import react, { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import image1 from "./icon-versions.png"
import image2 from "./icon-account.png"
import image3 from "./icon-organizations.png"
import image4 from "./icon-billing.png"
import image5 from "./icon-authenticate.png"
import image6 from "./icon-comment.png"




const bodyFeatures = [
  {
    id: 1,
    image: image1,
    title: "Using Abstract",
    description: "Abstract lets you manage, version, and document your designs in one place.",
    link: "#"
  },

  {
    id: 2,
    image: image2,
    title: "Manage your account",
    description: "Configure your account settings, such as your email, profile details, and password.",
    link: "#"
  },

  {
    id: 3,
    image: image3,
    title: "Manage organizations, teams, and projects",
    description: "Use Abstract organizations, teams, and projects to organize your people and your work.",
    link: "#"
  },

  {
    id: 4,
    image: image4,
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
    link: "#"
  },

  {
    id: 5,
    image: image5,
    title: "Authenticate to Abstract",
    description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning",
    link: "#"
  },

  {
    id: 6,
    image: image6,
    title: "Abstract support",
    description: "Get in touch with a human",
    link: "#"
  }

]
export default function Body() {
  return (
    <>
     <div className="body-container">
      <h1>How Can We Help?</h1>
      <div className="input-container">
        <input type="text"
      placeholder="Search"
      className="body-input"
     />
      <FontAwesomeIcon icon={faLongArrowRight} 
      className="input-icon"
      />
      </div>
      
    </div>

    <div className="main-body">
      {bodyFeatures.map((feature) => (
        <div key={feature.id} 
        className="feature-box">
          <img src={feature.image} alt="" 
          className="feature-icon"/>
          <div className="features-description">
            <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <div className="learn-more">
            <a href={feature.link}>Learn More </a>
            <FontAwesomeIcon icon={faLongArrowRight} 
            className="learn-icon"
            />
          </div>
         
         </div>
      </div>
      ))}
    </div>
    </>
   
  )
}