import React, { useState, useEffect } from 'react'
import LightLogoType from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/logasilicon.svg'
import DarkLogoType from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/darklogasilicon.svg'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const handleToggle = () => {
      setIsDarkMode(!isDarkMode);
      // console.log("isDarkMode efter toggling:", !isDarkMode);
    };


    useEffect(() => {
      if (isDarkMode) {
        document.body.setAttribute('dark-theme', 'dark');
      }else {
        document.body.removeAttribute('dark-theme')
      }
    }, [isDarkMode])

  return (

      <nav id="navbar" aria-label="main navigation">
            <div className="left-nav">
              <a href="index.html">
                <img src={isDarkMode ? DarkLogoType : LightLogoType} alt="Silicon crystal purple gradient with the text Si 14 written on top. Silicon Design" /></a>
                <a href="#brands" className="feature-text">Features</a>
            </div>
              
            <div className="right-nav">
              <p className="darkmodetext">Dark mode</p>
              <label className="adaptive-btn">
                <input 
                type="checkbox"
                checked={isDarkMode}
                onChange={handleToggle} 
                />
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
              
              
       