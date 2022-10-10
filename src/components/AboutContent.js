import "./AboutContentStyle.scss"

import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>tooi la ai</h1>
            <p>toois laf mojtj laap trinhf viene</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stacktop">
        <img src="" className="img" alt="true"/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent