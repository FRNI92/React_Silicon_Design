import React from 'react'
import CellPhone1 from '../Assets/Bildersilicon/bildersida3/mobil1.svg'
import CellPhone2 from '../Assets/Bildersilicon/bildersida3/mobil2.svg'
import CellPhone3 from '../Assets/Bildersilicon/bildersida3/mobil3.svg'

const HowDoes = () => {
  return (
    <section>
      <div className="How-does-wrapper">
        <div className="how-does-headline">
          <h1>How Does It Work?</h1>
        </div>
        
        <div className="mobiler">
          <img src={CellPhone1} alt="iphone screen with graphs on screen" />
          <img src={CellPhone2} alt="iphone with credit card and transactions on screen" />
          <img src={CellPhone3} alt="ihpone with money status and concact on screen" />
        </div>
        
        <div className="bottomtext">
          <h4 className="latest-transaction">Latest transaction history</h4>
          <p className="latest-transaction-text">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
        </div>
      </div>
    </section>
  )
}

export default HowDoes