import React from 'react';
import logo from "../images/logo.png";
import { Navbar, Nav, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink to="/" className="navbar-brand">
        <img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="GPW Logo"
      /> GPW</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
            <NavLink exact activeClassName="active_class" to="/about">About</NavLink>
            <NavLink exact activeClassName="active_class" to="/gallery">Gallery</NavLink>
            {/* <NavLink exact activeClassName="active_class" to="/service">Service</NavLink>
            <NavLink exact activeClassName="active_class" to="/contactUs">ContactUs</NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
}

export default Header;