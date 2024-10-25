import React from 'react'
import CellPhone from '../Assets/Bildersilicon/bildersida2/mobileleft.svg'
import Icons1 from '../Assets/Bildersilicon/bildersida2/payment.svg'
import Icons2 from '../Assets/Bildersilicon/bildersida2/datasecurity.svg'
import Icons3 from '../Assets/Bildersilicon/bildersida2/coststatistics.svg'
import Icons4 from '../Assets/Bildersilicon/bildersida2/support.svg'
import Icons5 from '../Assets/Bildersilicon/bildersida2/regularcashback.svg'
import Icons6 from '../Assets/Bildersilicon/bildersida2/smiley.svg'

const AppFeatures = () => {
  return (
        <div className="App-features">
          <div className="mobil-app-features">
            <img src={CellPhone} alt="Cellphone with bank-application showing money transfers" />
          </div>
          <div className="App-feature-text">
            <h1 className="number-2-headline">App Features</h1>
            <p className="number-2-text">Lorem ipsum dolor sit amet,lutpat Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>
          <div className="Easy-payment-container">
            
            
            <div className="Payment-icon-1">
              <div className="image-easy-payment">
                <img src={Icons1} alt="purple creditcard" />
              </div>
              <div className="Easy-payment-icon-text-1">
                <h5>Easy Payments</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="Easy-payment-icon-2">
              <div className="image-easy-payment">
                <img src={Icons2} alt="purple shield" />
              </div>
              <div className="Easy-payment-icon-text-2">
                <h5>Data Security</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="Easy-payment-icon-3">
              <div className="image-easy-payment">
                <img src={Icons3} alt="Vertical purple graphs" />
              </div>
              <div className="Easy-payment-icon-text-3">
                <h5>Cost Statistics</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="Easy-payment-icon-4">
              <div className="image-easy-payment">
                <img src={Icons4} alt="thinking bubble with question mark in it" />
              </div>
              <div className="Easy-payment-icon-text-4">
                <h5>Support 24/7</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="Easy-payment-icon-5">
              <div className="image-easy-payment">
                <img src={Icons5} alt="purple wallet with cash" />
              </div>
              <div className="Easy-payment-icon-text-5">
                <h5>Regular Cashback</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="Easy-payment-icon-6">
              <div className="image-easy-payment">
                <img src={Icons6} alt="purple smiley" />
              </div>
              <div className="Easy-payment-icon-text-6">
                <h5>Top Standards</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
          
        </div>
      </div>
  )
}

export default AppFeatures
        
        