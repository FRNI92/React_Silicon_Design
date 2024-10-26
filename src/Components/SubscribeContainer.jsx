import React, { useEffect } from 'react'
import Icons1 from '../Assets/Bildersilicon/bildersida7/bildersida7.svg'
import Icons2 from '../Assets/Bildersilicon/bildersida7/mailsymbol.svg'
import {useState} from 'react';

const SubscribeContainer = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailReg.test(email);
  }
  const handleSubmit = (e) =>{

    e.preventDefault()
    
    if (validateEmail(email)) {
      setError('');
      alert('Subscribed Successfully');
    } else {
      setError('Please enter a valid email adress.');

    }

  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (e.target.value === '') {
      setError('')
    }

  }

    


  return (
      <section>
        <div className="subscribe-container">
          
          <div className="bell-icon">
            <img src={Icons1} alt="bellicon" />
          </div>
          <div className="subscribe-text">
            <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper mb1">
              <img className="input-icon" src={Icons2} alt="small white envelope" />
              <input 
              type="text"
              value={email} 
              onChange={handleEmailChange}
              className="form-input" 
              id="email" 
              placeholder="Your Email"
              minLength="1" />
            </div>
            <p className={`error-message ${error ? 'visible' : ''}`}>{error}</p>
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
      
        
      