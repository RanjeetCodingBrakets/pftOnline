import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.jpeg'
import './topHeader.css';

const Header=()=> {
  return (
    <div className='container'>
    <Navbar expand="lg" className="nav_Header">
      <Container fluid>
      <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width="30" height="30" className="nav_logo" />
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav_item"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Category</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#" >
              Contact Us
            </Nav.Link>
            <button className="btn custom-btn">
             Login / Signup
             </button>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;