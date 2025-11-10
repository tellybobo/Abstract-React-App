import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="abstract">
        <h3>Abstract</h3>
        <ul>
         <li><Link to="/startTrial">Start Trial</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/Downnload">Download</Link></li>
         </ul>
      </div>
      <div className="resources">
         <h3>Resources</h3>
          <ul>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to= "/Help-center">Help Center</Link></li>
        <li><Link to= "/Release-notes">Release Note</Link></li>
        <li><Link to= "/Status">Status</Link></li>
      </ul>
      </div>
      <div className="community">
         <h3>Community</h3>
        <ul>
        <li><Link to= "">Tweeter</Link></li>
        <li><Link to= "">LinkedIn</Link></li>
        <li><Link to= "">Facebook</Link></li>
        <li><Link to= "">Dribbble</Link></li>
        <li><Link to= "">Podcast</Link></li>
      </ul>
         
      </div>
      <div className="company">
      <h3>Company</h3>
       <ul>
        <li><Link to="/About-us">About Us</Link></li>
        <li><Link to="/Career">Career</Link></li>
        <li><Link to="/Legal">Legal</Link></li>
        <div className="contact">
          <li>Contact Us</li>
          <p><Link to="">duncantravis374@gmail.com</Link></p>
        </div>
       </ul>
      </div>
      <div className="copy-right">
        <h3><FontAwesomeIcon icon={faCamera} /></h3>
        <p>© Copyright 2025</p>
        <p>Abstract Studio Design, Inc</p>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}