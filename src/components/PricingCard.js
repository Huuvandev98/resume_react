import "./PricingCardStyle.scss"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic - </h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <Link to="/contact" className="btn">Mua Ngay</Link>
            </div>
            <div className="card">
                <h3>- Basic - </h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <Link to="/contact" className="btn">Mua Ngay</Link>
            </div>
            <div className="card">
                <h3>- Basic - </h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <Link to="/contact" className="btn">Mua Ngay</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard