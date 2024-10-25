import React from 'react'
import CheckIcon from '../Assets/Bildersilicon/Bildersida4/check.svg'
import Icons1 from '../Assets/Bildersilicon/Bildersida4/graphs.svg'
import Icons2 from '../Assets/Bildersilicon/Bildersida4/Visa-card.svg'
import Icons3 from '../Assets/Bildersilicon/Bildersida4/creditcardicon.svg'
import Icons4 from '../Assets/Bildersilicon/Bildersida4/walleticon.svg'


const MakeYour = () => {
  return (
    <div className="Make-your-wrapper">
      <div className="headline-box">
        <h2 className="p4headline">Make your money transfer simple and clear</h2>
        
          <div className="checkmark-andtext">
            <img src={CheckIcon} alt="small purple checkmark" />
            <p className="check-box-text">Banking transactions are free for you</p>
          </div>
          <div className="checkmark-andtext">
            <img src={CheckIcon} alt="small purple checkmark" />
            <p className="check-box-text">No monthly cash commission</p>
          </div>
          <div className="checkmark-andtext">
            <img src={CheckIcon} alt="small purple checkmark" />
            <p className="check-box-text">Manage payments and transactions online</p>
          </div>
          <div className="learn-more-button">
            <a href="#" className="btn-purple">
              <span>Learn More</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
            
            
            
          <div className="top-right-box">
            <img src={Icons1} alt="showing money spending on a timeline and contacts you can send money to" />
          </div>  
          <div className="bottom-left-container">
            <img src={Icons2} alt="visa card and contacts" />
          </div>

          <div className="recieve-payment-box">
            <div className="recieve-headline-box">
              <h2 className="recieve-headline-text">Receive payment from international bank details</h2>
            </div>
            <div className="Icon-recieve-1">
              <img src={Icons3} alt="purple creditcard" />
            </div>
            <div className="Icon-recieve-2">
              <img src={Icons4} alt="wallet with money sticking out" />
            </div>
            <div className="Icon-text-1">
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="Icon-text-2">
              <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </div>
            <div className="Icon-learn-btn">
              <div className="learn-more-button-down-right">
                <a href="#" className="btn-purple">
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            
            
            
            
          </div>
        
      </div>
  )
}

export default MakeYour