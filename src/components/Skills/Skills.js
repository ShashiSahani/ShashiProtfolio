import React from "react";
import "./Skills.scss";
import UIDesign from "../../assets/UIDesing.jpg";
import WebDesign from "../../assets/WebDesing.jpg";
import AppDesign from "../../assets/AppDesing.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum velit optio ratione voluptates culpa! Id illum illo nulla eos inventore?
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIdesign" className="skillBarImg" />
          <div className="skillbarText">
            <h2>UI Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, assumenda.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillbarText">
            <h2>App Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, assumenda.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillbarText">
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, assumenda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
