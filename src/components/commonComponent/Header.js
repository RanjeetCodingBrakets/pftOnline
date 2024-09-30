import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import images from "../../constants/images";
import { AiOutlineMenu  } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import LoginSignup from "../LoginSignUp/LoginSignup";
import LiveTimer from "./liveTimer";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => { 
    setShowModal(true);
    setToggleMenu(false);
  };

  return (
    <nav className="app__navbar position-relative">
    <div className=" bottom-border-frame">
     <img src={images.frame9} alt="heroVector1" className="header-frame" />
     </div>
      <div className="app__navbar-logo">
      <Link to="/">
        <img src={images.logo} alt="app logo" />
        </Link>
      </div>
      <h2 className="mobile-header-heading">PUNJABI GMBH</h2> 
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle head-link "
            to="#"
            // role="button"
            // data-bs-toggle="dropdown"
            // aria-expanded="false"
          >
            Category
          </Link>
          <ul className="dropdown-menu header-drop-menu p-0">
            <li className="m-0 p-0">
              <Link className="dropdown-item drop-option" to="/product-Listing">
                All Products
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link className="dropdown-item drop-option" to="/promotionalPage">
                Offer Zone
              </Link>
            </li>
          </ul>
        </li>
        <li className="p__opensans">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contactUs">Contact Us</Link>
        </li>
        <li className="p__opensans">
          <Link to="/promotionalPage">Offer Zone</Link>
        </li>
      </ul>
      <div className="app__navbar-login nav__login">
        <button onClick={handleShow} className="btn custom-btn me-2">
          Login / Signup
        </button>
        <LoginSignup show={showModal} handleClose={handleClose} />
        <Link to="/promotionalPage">
          <span className="ms-2 d-flex">
          <h5 className="m-0 lh-0"><LiveTimer offerTimer="live-sale" initialHours={10} initialMinutes={0} initialSeconds={0} /></h5>      
          </span>
        </Link>
      </div>

      <div className="app__navbar-smallscreen">
        <AiOutlineMenu 
          color="#000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {/* {toggleMenu && ( */}
          <div className={`app__navbar-smallscreen_overlay flex__center slide-bottom ${toggleMenu && 'app__menu-hide'} `}>
            <IoCloseSharp
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links ">
              <li className="p__opensans">
                <Link to="/" onClick={() => setToggleMenu(false)}>Home</Link>
              </li>
              <li className="nav-item dropdown p__opensans">
                <Link
                  className="nav-link dropdown-toggle head-link "
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu dropdown__menu-box">
                  <li>
                    <Link className="dropdown-item drop-option" to="/product-Listing" onClick={() => setToggleMenu(false)}>
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item drop-option" to="/promotionalPage" onClick={() => setToggleMenu(false)}>
                      Offer Zone
                    </Link>
                  </li>
                </ul>
              </li> 
              <li className="p__opensans">
                <Link to="/about-us" onClick={() => setToggleMenu(false)}>About Us</Link>
              </li>
              <li className="p__opensans">
                <Link to="/contactUs" onClick={() => setToggleMenu(false)}>Contact Us</Link>
              </li>
              <li className="p__opensans">
                <Link to="/promotionalPage" onClick={() => setToggleMenu(false)}>Offer Zone</Link>
              </li>
            </ul>
            <div className="app__navbar-login d-flex align-items-center">
              <button onClick={handleShow} className="btn custom-btn me-2">
                Login / Signup
              </button>
              <LoginSignup show={showModal} handleClose={handleClose}  />
              
              <Link to="/promotionalPage" onClick={() => setToggleMenu(false)}>
          <span className="ms-2 d-flex">
          <h5><LiveTimer offerTimer="live-sale" initialHours={10} initialMinutes={0} initialSeconds={0} /></h5>
          </span>
        </Link>
            </div>

          </div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Header;


