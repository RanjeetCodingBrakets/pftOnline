import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ initialHours = 10, initialMinutes = 0, initialSeconds = 0 }) => {
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
  

  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light nav_Header">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width="30" height="30" className="nav_logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mr-auto nav_item" style={{ maxHeight: '150px' }}>
            <li className="nav-item">
              <Link className="nav-link" to="#action1">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarScrollingDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <a className="dropdown-item" href="#action3">Category</a>
                <a className="dropdown-item" href="#action4">Another action</a>
                <a className="dropdown-item" href="#action5">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#action2">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
          <button className="btn custom-btn ml-auto">
            Login / Signup
          </button>
          <div className='live-timer'>
            <Link to=''>Live Sale </Link>
            <span>
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
