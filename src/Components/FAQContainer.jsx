import React from 'react'
import Icons1 from '../Assets/Bildersilicon/bildersida6/Message-icon.svg'
import Icons2 from '../Assets/Bildersilicon/bildersida6/phone-icon.svg'

const FAQContainer = () => {
  return (
    <div className="FAQ-container">
      <div className="FAQ-text">
        <h2>Any questions?Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch?</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-box">
          <div className="img-and-text">
            <img src={Icons1} alt="ringing old phone" />
            <p>Still have questions?</p>
          </div>
          <a href="#" className="contact-button">
            <span>Contact Us</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        
        <div className="contact-box">
          <div className="img-and-text">
            <img src={Icons2} alt="message bubble with 3 dots" />
            <p>Don't like phone calls?</p>
          </div>
          <a href="#" className="contact-button-message">
            <span>Contact Us</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      
    </div>
  </div>
  )
}

export default FAQContainer