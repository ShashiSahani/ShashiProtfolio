import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logodemo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";

import contact from "../../assets/contact.png";
import "./Navbar.scss";
function Navbar() {
  return (
    <navbar className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Protfolio</Link>
        <Link className="desktopMenuListItem">Project</Link>
        <Link className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuBtn">
        <FontAwesomeIcon icon={faCommentDots} className="icon" />
        Contact Me
      </button>
    </navbar>
  );
}

export default Navbar;
