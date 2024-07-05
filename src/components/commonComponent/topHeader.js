import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./topHeader.css"; 


function TopHeader() {
  return (
    <Navbar expand="lg" variant="light" className="nav_topheader">
      <Container>
        <Nav className="me-auto d-flex flex-column flex-lg-row">
          <Nav.Link className="link_location" href="#location">
            <i className="fa-solid fa-location-dot nav_icon"></i>
            199 George St, The Rocks NSW 2000, Australia
          </Nav.Link>
          <Nav.Link className="link_location" href="tel:+919663520321">
            <i className="fa-solid fa-phone nav_icon"></i>
            +91 96635 20321
          </Nav.Link>
        </Nav>
        <Nav className="d-flex flex-column flex-lg-row align-items-center">
          <NavDropdown
            title="Language"
            id="basic-nav-dropdown"
            className=" mb-lg-0"
          >
            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Other Language
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="d-flex flex-row">
          <Nav.Link href="#" className="nav_icon_link">
            <i className="fa-brands fa-facebook nav_icon"></i>
          </Nav.Link>
          <Nav.Link href="#" className="nav_icon_link">
            <i className="fa-brands fa-instagram nav_icon"></i>
          </Nav.Link>
          <Nav.Link href="#" className="nav_icon_link">
            <i className="fa-brands fa-youtube nav_icon"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopHeader;
