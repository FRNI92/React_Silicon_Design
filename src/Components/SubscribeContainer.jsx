import React from 'react'
import Icons1 from '../Assets/Bildersilicon/bildersida7/bildersida7.svg'
import Icons2 from '../Assets/Bildersilicon/bildersida7/mailsymbol.svg'

const SubscribeContainer = () => {
  return (
      <section>
        <div className="subscribe-container">
          
          <div className="bell-icon">
            <img src={Icons1} alt="bellicon" />
          </div>
          <div className="subscribe-text">
            <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
          </div>
          <form>
            <div className="input-wrapper mb1">
              <img className="input-icon" src={Icons2} alt="small white envelope" />
              <input type="text" className="form-input" id="firstName" placeholder="Your Email" />
            </div>
          </form>
          <div>
            <a href="#" className="btn-subscribe-purple">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Subscribe</span>
            </a>
          </div>
      </div>
    </section>
  )
}

export default SubscribeContainer
      
        
      