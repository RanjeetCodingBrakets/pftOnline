import React from "react";
import { Link } from "react-router-dom";
import {  FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import "./topHeader.css";

function TopHeader() {
  return (
    <nav className="navbar navbar-expand-lg nav_topheader">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column flex-lg-row header-links">
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
          <div className="nav-item dropdown me-3">
            <Link
              className="nav-link dropdown-toggle headDrop-button "
              to="#"
              id="basic-nav-dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </Link>
            <ul className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
              <li>
                <Link className="dropdown-item" to="#action/3.1">
                  English
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#action/3.2">
                  Other Language
                </Link>
              </li>
            </ul>
          </div>
          <Link to="#" className="nav-link nav_icon_link">
          <FaFacebookF className="nav_icon" />
          </Link>
          <Link to="#" className="nav-link nav_icon_link">
          <RiInstagramFill  className="nav_icon" />
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













// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "./topHeader.css";

// function TopHeader() {
//   return (
//     <nav className="navbar navbar-expand-lg nav_topheader">
//       <div className="container d-flex justify-content-between align-items-center">
//         <div className="d-flex flex-column flex-lg-row header-links">
//           <Link to="#" className="nav-link d-flex align-items-center">
//             <FaLocationDot className="me-2" />
//             199 George St, The Rocks NSW 2000, Australia
//           </Link>
//           <Link className="nav-link d-flex align-items-center" to="tel:+919663520321">
//             <FaPhoneAlt className="me-2" />
//             +91 96635 20321
//           </Link>
//         </div>
//         <div className="d-flex align-items-center">
//           <div className="nav-item dropdown me-3 ">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="basic-nav-dropdown"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Language
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
//               <li>
//                 <a className="dropdown-item" href="#action/3.1">
//                   English
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#action/3.2">
//                   Other Language
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <Link to="#" className="nav-link nav_icon_link">
//             <FaFacebook className="nav_icon" />
//           </Link>
//           <Link to="#" className="nav-link nav_icon_link">
//             <FaInstagram className="nav_icon" />
//           </Link>
//           <Link to="#" className="nav-link nav_icon_link">
//             <FaYoutube className="nav_icon" />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default TopHeader;
