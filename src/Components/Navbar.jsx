import React, { useState, useEffect } from 'react'
import LightLogoType from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/logasilicon.svg'
import DarkLogoType from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/darklogasilicon.svg'
import { Link } from 'react-router-dom';


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
              <Link to="/">
                <img src={isDarkMode ? DarkLogoType : LightLogoType} alt="Silicon crystal purple gradient with the text Si 14 written on top. Silicon Design" /></Link>
                <Link className="feature-text">Features</Link>
                <Link to="/contact" className="feature-text">Contact</Link>
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
                  <li><Link to="/">Home</Link></li>
                  <li><a href="#contact">Features</a></li>
                  <li><Link to="/Contact">Contact</Link></li>
                  <li><a href="#contact">Sign in / Sign Up</a></li>
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
              
              
       