import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import "./topHeader.css";

const  TopHeader = () => {
  const [languageValue, setlanguageValue] = useState('English');
  const languageChange = (value) =>{
    setlanguageValue(value);
  }
  return (
    <nav className="navbar navbar-expand-lg nav_topHeader">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column flex-lg-row topHeader-links">
          <Link to="#" className="nav-link d-flex align-items-center">
            <FaLocationDot className="me-2" />
            199 George St, The Rocks NSW 2000, Australia
          </Link>
          <Link className="nav-link d-flex align-items-center" to="tel:+919663520321">
            <FaPhone className="me-2" />
            +91 96635 20321
          </Link>
        </div>
        <div className="d-flex align-items-center">

          <div class="dropdown language-dropdown">
            <button class="btn btn-secondary dropdown-toggle headDrop-button" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              {languageValue}
            </button>
            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
              <li><a class="dropdown-item"  onClick={() => languageChange('Hindi')} >Hindi</a></li>
              <li><a class="dropdown-item"  onClick={() => languageChange('English')} >English</a></li>
            </ul>
          </div>

          <Link to="#" className="nav-link nav_icon_link ">
            <FaFacebookF className="nav_icon" />
          </Link>
          <Link to="#" className="nav-link nav_icon_link">
            <RiInstagramFill className="nav_icon" />
          </Link>
          <Link to="#" className="nav-link nav_icon_link">
            <FaYoutube className="nav_icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopHeader;

