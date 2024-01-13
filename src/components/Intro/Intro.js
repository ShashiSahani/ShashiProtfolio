import React from "react";
import { Link } from 'react-scroll';
import "./Intro.scss";
import Profile from "../../assets/profiledemo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Shashi</span>
          <br />
          Front End Developer
        </span>
        <p className="introPara">Import React from 'react'</p>
        <Link to="hireMeSection" smooth={true} duration={500}>
          <button className="btn">
            Hire Me

          <FontAwesomeIcon icon={faLocationArrow} />

          </button>
        </Link>
      </div>
      <img src={Profile} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
