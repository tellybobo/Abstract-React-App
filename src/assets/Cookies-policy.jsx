import { Link } from "react-router-dom";

import abstractLogo from "./abstract-logo.svg";

import "./Trial-agreement.css"



export default function Cookiespolicy() {
  return (
 <>
     <div className="agreement-container">
        <div className="agreement-header">
    <img src= {abstractLogo} alt="" />
     <Link to= "/Signin">Sign in</Link>
   </div>


  <div className="agreement-body-container">
      <div className="agreement-body">
     <h1>
    Cookie Policy
    </h1>
    <p>Last Modified: March 14, 2022</p>

    <p style={{marginTop: "25px"}}>
      Abstract is a version control software platform, accessible through abstract.com  <br /> app.abstract.com (the "Websites") that allows you to upload, manage and grant other <br /> users permission to view and edit digital design documents, images and related materials <br /> (collectively, the "Abstract Service").
   </p>
    <p style={{marginTop: "10px"}}>
      The Abstract Service is provided to you by Abstract Studio Design, Inc. ("Abstract", "we", <br /> "our" or "us").
   </p>
    <p style={{marginTop: "10px"}}>
      We uses cookies and similar technologies (such as pixels and Local Storage Objects <br /> LSOs) on our Websites to help us provide you with a good user experience when you <br /> browse our Websites. They help us monitor and analyze how you use and interact with  <br /> website so that we can continue to improve our Websites. They also help us and our <br /> advertising partners to determine products and services that may be of interest to you,  <br /> order to serve you targeted advertisements.
   </p>

   <h2 style={{marginTop: "15px"}}>What are cookies?</h2>
    <p style={{marginTop: "10px"}}>
      Cookies are small files of letters and numbers stored on your browser or hard drive, which <br /> are created when you load a particular web page. They contain information that can be <br /> retrieved by websites to help users navigate the website efficiently and perform certain <br /> functions, such as authenticating users and keeping them logged in to certain areas of a <br /> website, and also managing how and what ads appear on a website.

   </p>
    <p style={{marginTop: "10px"}}>
      We have set out below descriptions of the types of cookies we use and what these cookies <br /> do.

   </p>

    <h2 style={{marginTop: "15px"}}>Strictly necessary cookies</h2>
    <p style={{marginTop: "10px"}}>
     These are cookies that are required for the operation of our Websites. They include, for <br /> example, cookies that enable you to log into (and stay logged in to) secure areas of our <br /> Websites, use a shopping cart or make use of e-billing services.



   </p>
    <h2 style={{marginTop: "15px"}}>Analytical / performance <br /> cookies</h2>
    <p style={{marginTop: "10px"}}>
      These cookies allow us to recognize and count the number of visitors and also, see how <br /> visitors move around our website. This helps us to improve the way our website works, for <br /> example by ensuring that users easily find what they are looking for.


   </p>

   
    <h2 style={{marginTop: "15px"}}>Functionality cookies
</h2>
    <p style={{marginTop: "10px"}}>
     These cookies are used to recognize you when you return to our website, enabling <br /> Abstract to personalize content for you, greet you by name and remember your <br /> preferences (for example, your choice of language or region).
   </p>

   
    <h2 style={{marginTop: "15px"}}>Online behavioral advertising
</h2>
    <p style={{marginTop: "10px"}}>
      We use cookies from third party advertising partners to deliver relevant advertisements to <br /> you on our website and on other websites. Below is a list of our advertising partners and <br /> information on how to opt out of their cookies.
   </p>

   
    <h2 style={{marginTop: "15px"}}>How to control or block <br /> cookies
</h2>
    <p style={{marginTop: "10px"}}>
     The cookies we use are designed to help you get the most from the website but if you do <br /> not wish to receive cookies, most browsers allow you to change your cookie settings. <br /> Please note that if you choose to refuse all cookies you may not be able to use the full <br /> functionality of our website. These settings will typically be found in the "options" or <br /> "preferences" menu of your browser. In order to understand these settings, the following <br /> links may be helpful, otherwise you should use the "Help" option in your browser for more <br /> details.
   </p>

    <h2 style={{marginTop: "15px"}}>How to control cookies
</h2>
    <p style={{marginTop: "10px"}}>
      You can delete any cookies that are already set on your computer and you can re-set most <br /> browsers to prevent them from being placed. However, if you block or delete cookies you <br /> may have to manually adjust some preferences every time you visit a site and some <br /> services and functionalities may not work. For further details about controlling and/or <br /> deleting cookies, please visit <Link to = "https://www.aboutcookies.org/">aboutcookies.org.</Link>
   </p>

   
    <h2 style={{marginTop: "15px"}}>
</h2>
    <p style={{marginTop: "10px"}}>
      If you would like to find out more about cookies and other similar technologies, please <br /> visit allaboutcookies.org or the Network Advertising Initiative's online sources at <br /> <Link to = "https://thenai.org/">networkadvertising.org.</Link>
   </p>

     </div>
</div>

  

  <div className="agreement-footer">
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
               <h1>Contact Us</h1>
            <p>duncantravis374@gmail.com</p>
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
              
            </li>
         </ul>
      </div>
   </div>
  </div>
     </div> 
    </>
    
     )

}
  
