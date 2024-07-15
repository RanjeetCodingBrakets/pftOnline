import React from "react";
import logo from "../../assets/logo.jpeg";
// import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container text-center position-relative ">
          <div className="whatsapp_Banner position-absolute">
            <div>
              <RiWhatsappFill className="whatsapp-icon" />
            </div>
            <h6>Talk To Us?</h6>
          </div>

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
                <LuInstagram />
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
                  <Link to="#">Home</Link>
                </li>
                <div />
                <li className="footer_menu">
                  <Link to="#">Category</Link>
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
                    <FaLocationDot />
                    199 George St, The Rocks NSW 2000, Australia
                  </Link>
                </li>
                <div />
                <li className="footer_menu">
                  <Link to="#">
                    <FaFacebook />
                    +91 96635 20321
                  </Link>
                </li>
                <div />
                <li className="footer_menu">
                  <Link to="#">
                    <GrMail />
                    Lorem@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-policy">
              <h6>Copyright ©2024 all rights reserved</h6>
              <h6>Privacy Policy, Term & Conditions</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
