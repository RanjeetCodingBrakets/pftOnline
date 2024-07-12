import React from 'react';
import logo from '../../assets/logo.jpeg'
// import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
  <>
    
    <div className='footer-section'>
      <div className='container text-center'>
      
     
      <div className='footer_logo'>
        <img src={logo} alt='logo' className='footer_logo_image' width={100} height={90}/>
      </div>
    
      <div className='footer_content'>
  <h4 >Punjabi gmbh</h4>
  <p className='footer_content'>Lorem ipsum is placeholder text commonly used in the graphic, 
  print, and publishing industries for previewing <br/>layouts and visual mockups. 
  Lorem ipsum is placeholder text commonly used in the graphic, print, and <br/>
  publishing industries for previewing layouts and visual mockups.</p>
   </div>

<div className="footer_icon">
          <Link to="#" className="footer_icon_link">
          <FaFacebook/>
          </Link>
          <Link to="#" className="footer_icon_link">
          <LuInstagram />
          </Link>
          <Link to="#" className="footer_icon_link">
          <FaYoutube />
          </Link>        
</div>
<div>
<h4 className='footer_content'>Quick Links</h4>
</div>
<div className='footer_links'>
  <ul className='list-unstyled d-flex justify-content-center '>
   <li className="footer_menu">
          <Link to="#">Home</Link>
        </li>
        <div/>
        <li className="footer_menu">
          <Link to="#">Category</Link>
        </li>
        <div/>
        <li className="footer_menu">
          <Link to="#">About Us</Link>
        </li>
        <div/>
    <li className="footer_menu">
          <Link to="#">Contact Us</Link>
        </li>   
  </ul>  
</div>
<h4 className='footer_content'>Contact Us</h4>
<div className='footer_links'>
  
  <ul className='list-unstyled d-flex justify-content-center '>
   <li className="footer_menu">
          <Link to="#"><FaLocationDot />
          199 George St, The Rocks NSW 2000, Australia</Link>
        </li>
        <div/>
        <li className="footer_menu">
          <Link to="#"><FaFacebook />
          +91 96635 20321</Link>
        </li>
        <div/>
        <li className="footer_menu">
        <Link to='#'><GrMail />Lorem@gmail.com</Link>
          
        </li>
  
  </ul>  
</div>

      
      </div>
      
    </div>
    </>
  );
}

export default Footer;