import React from "react";
import "./Works.scss";
import PortFolio1 from "../../assets/portfolioone.jpeg";
import PortFolio2 from "../../assets/portfoliotwo.jpeg";
import PortFolio3 from "../../assets/portfoliothree.jpeg";
import PortFolio4 from "../../assets/portfoliofour.jpg";
import PortFolio5 from "../../assets/portfoliofive.jpg";
function Works() {
  return (
    <section id="works">
      <div className="worksTitle">
        <h2>My Prortfolio</h2>
        <span className="workDesc">
          I take pride in playing attention to the smallest details and
        </span>
      </div>
      <div className="workImage">
        <img src={PortFolio1} alt="" className="workImg" />
        <img src={PortFolio2} alt="" className="workImg" />
        <img src={PortFolio3} alt="" className="workImg" />
        <img src={PortFolio3} alt="" className="workImg" />
        <img src={PortFolio3} alt="" className="workImg" />
        <img src={PortFolio3} alt="" className="workImg" />
        <img src={PortFolio4} alt="" className="workImg" />
        <img src={PortFolio5} alt="" className="workImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;
