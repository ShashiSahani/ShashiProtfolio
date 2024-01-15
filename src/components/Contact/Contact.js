import React from "react";
import "./Contact.scss";
import one from "../../assets/facebook.jpg";
import two from "../../assets/infosys.png";
import three from "../../assets/instagram.png";
import four from "../../assets/tcs.jpeg";
import five from "../../assets/wipro.png";
import facebook from "../../assets/facebook-svg.svg";

import instagram from "../../assets/instagram-icon.webp";
import twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.svg";

function Contact() {
  return (
    <section id="contactPage">
      <div className="clients">
        <h1 className="contactPageTitle">My Client</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={one} alt="Client" className="clientImg" />
          <img src={two} alt="Client" className="clientImg" />
          <img src={three} alt="Client" className="clientImg" />
          <img src={four} alt="Client" className="clientImg" />
          <img src={five} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the from below to discuss any work opportunities.
        </span>
        <form action="" className="contactFrom">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Your Meassage"
            className="msg"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={facebook} alt="" className="link" />
            <img src={instagram} alt="" className="link" />
            <img src={twitter} alt="" className="link" />
            <img src={Youtube} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
