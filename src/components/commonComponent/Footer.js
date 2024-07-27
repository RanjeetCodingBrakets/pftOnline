import React from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import images from "../../constants/images";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container text-center position-relative ">
          <div className="footer_logo position-absolute">
            <img src={logo} alt="logo" className="footer_logo_image" />
          </div>
          <div className="footer-section1">
            <div className="pt-4 text-white">
              <h4>Punjabi gmbh</h4>
              <p className="text-white w-75 mx-auto text-center">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing
                layouts and visual mockups. Lorem ipsum is placeholder text
                commonly used in the graphic, print, and
                publishing industries for previewing layouts and visual mockups.
              </p>
            </div>

            <div className="footer_icon">
              <Link to="#" className="footer_icon_link">
                <FaFacebook />
              </Link>
              <Link to="#" className="footer_icon_link">
              <AiFillInstagram />
              </Link>
              <Link to="#" className="footer_icon_link">
                <FaYoutube />
              </Link>
            </div>
            <div>
              <h4 className="pt-4 text-white">Quick Links</h4>
            </div>
            <div className="footer_links">
              <ul className="list-unstyled d-flex justify-content-center ">
                <li className="footer_menu">
                  <Link to="/">Home</Link>
                </li>
                <div />
                <li className="footer_menu">
                  <Link to="/product-category">Category</Link>
                </li>
                <div />
                <li className="footer_menu">
                  <Link to="#">About Us</Link>
                </li>
                <div />
                <li className="footer_menu">
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <h4 className="text-white">Contact Us</h4>
            <div className="footer_links">
              <ul className="list-unstyled d-flex justify-content-center ">
                <li className="footer_menu">
                  <Link to="#">
                    <FaLocationDot className="f-icon" />
                    199 George St, The Rocks NSW 2000, Australia
                  </Link>
                </li>
                <div />
                <li className="footer_menu">
                  <Link to="#">
                  <FaPhone  className="f-icon" />
                    +91 96635 20321
                  </Link>
                </li>
                <div />
                <li className="footer_menu">
                  <Link to="#">
                    <GrMail className="f-icon" />
                    Lorem@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
       <div className="bottom-footer position-relative">
       <div className="bottom-footer-frame">
        <img src={images.frame1} alt="" className="bottom-frame"/>
        <img src={images.frame1} alt="" className="bottom-frame"/>
        <img src={images.frame1} alt="" className="bottom-frame"/>
        <img src={images.frame1} alt="" className="bottom-frame"/>
        <img src={images.frame1} alt="" className="bottom-frame"/>
        <img src={images.frame1} alt="" className="bottom-frame"/>
        
       </div>

         <div className="container">
             <div className="footer-policy">
                <h6>Copyright ©2024 all rights reserved</h6>
                <h6>Privacy Policy, Term & Conditions</h6>
              </div>
            </div>                  
        </div>
        <div className="whatsapp_Banner">
          <Link to=''>
            <div className="whatsapp-icon">
              <RiWhatsappFill className="w-icon" />
            </div>
            <h6 className="mt-2 color-black">Talk To Us?</h6>
            </Link>
          </div>  
    </>
  );
};

export default Footer;
