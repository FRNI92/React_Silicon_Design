import React from 'react';

export default function Navbar() {
  return (
    <header>
      <div className="navbar-container">
        <nav id="navbar" aria-label="main navigation">
          <div className="left-nav">
            <a href="index.html">
              <img src="/Bildersilicon/Bildersida1/Desktop-sida1-mobil/logasilicon.svg" alt="Silicon logo" />
            </a>
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
      </div>
    </header>
  );
}