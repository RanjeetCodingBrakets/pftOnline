import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsFillChatFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import "./contactUs.css";

const Contactus = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="row">
          <div className="col-12 contact-head">
            <h2>Home &#x3e; Contact Us</h2>
            
          </div>
        </div>
        <div className="row pt-5 mb-50 m-contact">
          <div className="col-md-6 connect-us">
            <h3>Get In Touch With Us</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <ul className="list-unstyled">
              <li className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <span>+91 96635 20321</span>
              </li>
              <li className="contact-item">
                <GrMail className="contact-icon" />
                <span>Lorem@gmail.com</span>
              </li>
              <li className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>199 George St, The Rocks NSW 2000, Australia</span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
          <div className="contact-form p-5">
            <form>
              <div className="form-group form-l">
                <label htmlFor="firstName">Name</label>
                <input type="text" className="form-control form-i" id="firstName" placeholder="Enter Name" required />
              </div>
              <div className="form-group form-l">
                <label htmlFor="lastName">Phone Number</label>
                <input type="text" className="form-control form-i" id="lastName" placeholder="Enter Phone Number" required />
              </div>
              <div className="form-group form-l">
                <label htmlFor="email">Email </label>
                <input type="email" className="form-control form-i" id="email" placeholder="Enter Email" required />
              </div>
              <div className="form-group form-l">
                <label htmlFor="message">Message</label>
                <textarea className="form-control form-i" id="message" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn custom-btn">Send Message</button>
            </form>
            </div>
          </div>
        </div>

            <div className="row " id="contact-row">
                <div className="col-lg-3 contact-info">
                    <div className="image-email">
                    <GrMail className="c-icon" />
                    </div>
                    <div className="inquiry-headings">
                        <h4>E-mail Us</h4>
                        <p className="text-center">Lorem ipsum is placeholder text commonly used in the graphic.</p>
                    </div>
                </div>
                <div className="col-lg-3 contact-info">
                    <div className="image-email image-email-1">
                    <BsFillChatFill className="c-icon" />
                    </div>
                    <div className="inquiry-headings">
                        <h4>Chat</h4>
                        <p className="text-center">Lorem ipsum is placeholder text commonly used in the graphic.</p>
                    </div>
                </div>
                <div className="col-lg-3 contact-info">
                    <div className="image-email">
                    <FaPhoneAlt className="c-icon" />
                    </div>
                    <div className="inquiry-headings">
                        <h4>Call Us</h4>
                        <p className="text-center">Lorem ipsum is placeholder text commonly used in the graphic.</p>
                    </div>
                </div>
                <div className="col-lg-3 contact-info">
                    <div className="image-email image-email-1">
                    <FaCalendarDays className="c-icon" />
                    </div>
                    <div className="inquiry-headings">
                        <h4>Working Days/Hours</h4>
                        <p className="text-center">Lorem ipsum is placeholder text commonly used in the graphic.!</p>
                    </div>
                </div>
            </div>
        
    </div>
      </div>
  
  );
};

export default Contactus;
