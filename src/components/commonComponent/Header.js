import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import LoginSignup from "../LoginSignUp/LoginSignup";
import LiveTimer from "./liveTimer";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

 const [showModal, setShowModal] = useState(false);

 const handleClose = () => setShowModal(false);
 const handleShow = () => setShowModal(true);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle head-link "
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item drop-option" to="/product-Listing">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item drop-option" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
        <li className="p__opensans">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </ul>
      <div className="app__navbar-login nav__login">
      <button onClick={handleShow} className="btn custom-btn me-2">
                Login / Signup
              </button>
              <LoginSignup show={showModal} handleClose={handleClose} />
             
            
                <span className="ms-2">
                <LiveTimer offerTimer="header-timer" initialHours={10} initialMinutes={0} initialSeconds={0} />
                  </span>
          
        {/* <a href="#login" className="p__opensans">
          login / Register
        </a> */}
        
        {/* <a href="/" className="p__opensans">
          Book Table
        </a> */}
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (

        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <IoCloseSharp 
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="app__navbar-smallscreen_links ">
          <li className="p__opensans">
          <Link to="/">Home</Link>
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
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item drop-option" to="/product-Listing">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item drop-option" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="p__opensans">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contactUs">Contact Us</Link>
        </li>
          </ul>
          <div className="app__navbar-login">
      <button onClick={handleShow} className="btn custom-btn me-2">
                Login / Signup
              </button>
              <LoginSignup show={showModal} handleClose={handleClose} />
             <button className="head-live-timer">
               Live Sale
                <span className="ms-2">
                <LiveTimer initialHours={10} initialMinutes={0} initialSeconds={0} />
                  </span>
              </button>
      </div>
          
        </div>
        
      )}
      </div>
    </nav>
  );
};

export default Header;









// import React, { useState, useEffect } from "react";
// import logo from "../../assets/logo.jpeg";
// import { Link } from "react-router-dom";
// import images from '../../constants/images';
// import "./Header.css";
// import LoginSignup from "../LoginSignUp/LoginSignup";

// const Header = ({
//   initialHours = 10,
//   initialMinutes = 0,
//   initialSeconds = 0,
// }) => {
//   const [hours, setHours] = useState(initialHours);
//   const [minutes, setMinutes] = useState(initialMinutes);
//   const [seconds, setSeconds] = useState(initialSeconds);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       } else {
//         if (minutes > 0) {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         } else {
//           if (hours > 0) {
//             setHours(hours - 1);
//             setMinutes(59);
//             setSeconds(59);
//           }
//         }
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [seconds, minutes, hours]);

//   const [showModal, setShowModal] = useState(false);

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   return (
//     <div className="header-section position-relative">
//     <div className=" bottom-border-frame">
//     <img src={images.frame9} alt="heroVector1" className="header-frame" />
//     </div> 
//     <div className="container">
//     <div className="row">
//       <nav className="navbar navbar-expand-lg navbar-light nav_Header header-nav">
//         <div className="col-sm-4 col-lg-2">
//           <Link className="navbar-brand header-logo" to="/">
//             <img src={logo} alt="logo" className="nav_logo" />
//           </Link>
//         </div>
//         <button
//           className="navbar-toggler toggle-btn"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
//           <div className="col-lg-7  col-sm-6 col-md-6 d-lg-block">
//             <ul className="navbar-nav mr-auto nav_item menu-item-header">
//               <li className="nav-item">
//                 <Link className="nav-link head-link " to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle head-link "
//                   to="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Category
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item drop-option" to="/product-Listing">
//                       All Products
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item drop-option" to="#">
//                       Another action
//                     </Link>
//                   </li>
//                   {/* <li>
//                     <Link className="dropdown-item" to="">
//                       Something else here
//                     </Link>
//                   </li> */}
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link head-link " to="/about-us">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link head-link " to="/contactUs">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-5 col-md-6 col-sm-6 login-sec">
//             <div className="d-inline">
//               <button onClick={handleShow} className="btn custom-btn me-2">
//                 Login / Signup
//               </button>
//               <LoginSignup show={showModal} handleClose={handleClose} />
//               <button className="head-live-timer">
//                 Live Sale
//                 <span className="ms-2">
//                   {hours < 10 ? `0${hours}` : hours}:
//                   {minutes < 10 ? `0${minutes}` : minutes}:
//                   {seconds < 10 ? `0${seconds}` : seconds}
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   </div>
//   </div>
//   );
// };

// export default Header;
