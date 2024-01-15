import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logodemo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";

import contact from "../../assets/contact.png";
import "./Navbar.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [showMenu,setShowMenu]=useState(false);


  return (
    <navbar className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro"spy={true} smooth={true}  offset={-100}  duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills"spy={true} smooth={true}  offset={-50}  duration={500}  className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works"spy={true} smooth={true}  offset={-50}  duration={500} className="desktopMenuListItem">Protfolio</Link>
        <Link activeClass="active" to="clients"spy={true} smooth={true}  offset={-50}  duration={500}  className="desktopMenuListItem">Project</Link>
        <Link activeClass="active" to="resume"spy={true} smooth={true}  offset={-50}  duration={500}  className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behaveour:"smooth"});
      }}>
        Contact
        <FontAwesomeIcon icon={faCommentDots} className="icon" />

      </button>

    {/* Mobile Menu  */}
    <FontAwesomeIcon icon={faBars} className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />

    <div className="mobileMenu" style={{display:showMenu?'none': 'flex'}} >
      
        <Link activeClass="active" to="intro"spy={true} smooth={true}  offset={-100}  duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills"spy={true} smooth={true}  offset={-50}  duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="works"spy={true} smooth={true}  offset={-50}  duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Protfolio</Link>
        <Link activeClass="active" to="clients"spy={true} smooth={true}  offset={-50}  duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Project</Link>
        <Link activeClass="active" to="resume"spy={true} smooth={true}  offset={-50}  duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Resume</Link>
        <Link activeClass="active" to="contact"spy={true} smooth={true}  offset={-50}  duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>

    </navbar>
  );
}

export default Navbar;
