import React from 'react'
import LogoType from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/logasilicon.svg'

const Navbar = () => {
  return (

      <nav id="navbar" aria-label="main navigation">
            <div className="left-nav">
              <a href="index.html">
                <img src={LogoType} alt="Silicon crystal purple gradient with the text Si 14 written on top. Silicon Design" /></a>
                <a href="#brands" className="feature-text">Features</a>
            </div>
              
            <div className="right-nav">
              <p className="darkmodetext">Dark mode</p>
              <label className="adaptive-btn">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              
              <a href="#" className="btn-primary">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Sign In / Up</span>
              </a>
            </div>
          </nav>

  )
}

export default Navbar
              
              
       