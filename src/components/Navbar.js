import React from "react";
import logo from "../images/logo.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
            
        {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="로고..." /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} /> 
        </button> */}
        <a></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" className="nav-link" href="#">contacts</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
