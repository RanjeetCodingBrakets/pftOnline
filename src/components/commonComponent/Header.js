import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

import "./Header.css";
import LoginSignup from "../LoginSignUp/LoginSignup";

const Header = ({
  initialHours = 10,
  initialMinutes = 0,
  initialSeconds = 0,
}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, hours]);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav_Header ">
      <div className="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand header-logo" href="#">
          <img src={logo} alt="logo" className="nav_logo" />
        </a>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div>
            <ul className="navbar-nav mr-auto nav_item">
              <li className="nav-item">
                <Link className="nav-link head-link" to="#action1">
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle head-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item ">
                <a className="nav-link head-link" href="#action2">
                  About Us
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link head-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div class="d-inline">
            <button onClick={handleShow} className="btn custom-btn me-2">
              Login / Signup
            </button>
            <button className="head-live-timer">
              Live Sale
              <span className="ms-2">
                {hours < 10 ? `0${hours}` : hours}:
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
              <LoginSignup show={showModal} handleClose={handleClose} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
