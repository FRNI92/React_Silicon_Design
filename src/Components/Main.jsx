import AppStore from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/AppStore-desktop.svg'
import GooglePlay from '../Assets/Bildersilicon/Bildersida1/Desktop-sida1-mobil/GooglePlay-desktop.svg'
import CellPhones from '../Assets/Bildersilicon/Bildersida1/2mobiler.svg'
import React from 'react'

const Main = () => {
  return (
    <main id="main">
      <section id="hero">
        <div className="container">
          <div className="headline-hero">
            <h1>Manage All Your Money in One App</h1>
            <p>We offer you a new generation of the mobile banking.<br />
              Save, spend & manage money in your pocket.</p>

          <div className="buttons">
              <a className="btn-app-download" href="https://www.apple.com/se/app-store/" target="_blank"><img src={AppStore} alt="App Store" /></a>
              <a className="btn-app-download" href="https://play.google.com/store/games?device=windows" target="_blank"><img src={GooglePlay} alt="Google Play" /></a>
            </div>
          </div>
              
            <div className="content">
              <a href="#FAQ" className="discovermore">
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
                <span>Discover more</span>
              </a>
            </div>
          
          <div className="images">
            <img className="img-mobile" src={CellPhones} alt="2 purple and black " />
            
          </div>
        </div>
      </section>
      
    </main> 
  )
}

export default Main