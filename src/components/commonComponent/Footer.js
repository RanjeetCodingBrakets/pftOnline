import React from 'react';
import logo from '../../assets/logo.jpeg'
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (<>
    <div className='whatsapp_icon'>
      <div className=''><i class="fa-brands fa-whatsapp"></i>s</div>
      <div>Talk To Us?</div>
      </div>
    <div className='footer-section'>
      <div className='container text-center'>

      

      <div className='footer_logo'>
        <img src={logo} alt='logo' className='' width={100} height={100}/>
      </div>
      <div>
  <h4>Punjabi gmbh</h4>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
   Lorem Ipsum has been the industry's standard dummy text ever since<br/> the 1500s, when
    an unknown printer took a galley of type.
   It has survived</p>
   </div>

<div className="flex-row">
          <Link to="#" className="nav_icon_link">
            <i className="fa-brands fa-facebook nav_icon"></i>
          </Link>
          <Link to="#" className="nav_icon_link">
            <i className="fa-brands fa-instagram nav_icon"></i>
          </Link>
          <Link to="#" className="nav_icon_link">
            <i className="fa-brands fa-youtube nav_icon"></i>
          </Link>        
</div>
<div>
  <h4>Quick Links</h4>
  <ul className='list-unstyled d-flex justify-content-center '>
   <li className="footer_menu">
          <a href="#">Home</a>
        </li>
        <li className="footer_menu">
          <a href="#">Categoryt</a>
        </li>
        <li className="footer_menu">
          <a href="#">About Us</a>
        </li>
    <li className="footer_menu">
          <a href="#">Contact Us</a>
        </li>   
  </ul>  
</div>
<div>
  <h4>Contact Us</h4>
  <ul className='list-unstyled d-flex justify-content-center '>
   <li className="footer_menu">
          <a href="#"><i className="fa-solid fa-location-dot nav_icon"></i>
          199 George St, The Rocks NSW 2000, Australia</a>
        </li>
        <li className="footer_menu">
          <a href="#"><i className="fa-solid fa-phone nav_icon"></i>
          +91 96635 20321</a>
        </li>
        <li className="footer_menu">
          <a href="#">lorem@gmail.com</a>
        </li>
  
  </ul>  
</div>

      
      </div>
      
    </div>
    </>
  );
}

export default Footer;