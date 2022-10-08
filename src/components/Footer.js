import "./FooterStyle.css"

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:" #fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Dia chi cuj ther</p>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{color:" #fff", marginRight:"2rem"}}/> 091209312</h4>
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{color:" #fff", marginRight:"2rem"}}/> 091209312</h4>
                </div>
            </div>
            <div className="right">
                <h4> About the company</h4>
                <p>Lorem</p>
                <div className="sosial"> 
                <FaFacebook size={30} style={{color:" #fff", marginRight:"2rem"}}/>
                <FaInstagram size={30} style={{color:" #fff", marginRight:"2rem"}}/>
                <FaGithub size={30} style={{color:" #fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer