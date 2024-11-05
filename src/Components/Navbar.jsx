import React, { useState, useEffect } from 'react'
import LightLogoType from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/logasilicon.svg'
import DarkLogoType from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/darklogasilicon.svg'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
      setIsDarkMode(!isDarkMode);
      // console.log("isDarkMode efter toggling:", !isDarkMode);
    };

    const toggleMenu = () => {
      console.log("Hamburgermeny klickad");
      setMenuOpen(!menuOpen);
    };
    useEffect(() => {
      console.log("menuOpen är nu:", menuOpen);
    }, [menuOpen]);

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
                <a href="#brands" className="feature-text">Contact</a>
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
              <div className="menu-container">
                <div className="hamburger" onClick={toggleMenu}>
                  ☰ 
                </div>
                {menuOpen && (
                <ul className="menu">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
                
                )}
              </div>
              


              
              
              <a href="#" className="btn-primary">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Sign In / Up</span>
              </a>
            </div>
          </nav>

  )
}

export default Navbar
              
              
       