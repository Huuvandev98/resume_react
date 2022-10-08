import "./HeroImgStyle.css";

import React from "react";
import IntroImg from "../assets/images/into.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FRONTEND DEVELOPER</p>
        <h1>REACT DEV</h1>
        <div>
          <Link to="/project" className="btn">Project</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
