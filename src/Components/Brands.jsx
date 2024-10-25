import React from 'react'
import Brand1 from '../Assets/Bildersilicon/bildersida2/log1left.svg'
import Brand2 from '../Assets/Bildersilicon/bildersida2/log2left.svg'
import Brand3 from '../Assets/Bildersilicon/bildersida2/log3left.svg'
import Brand4 from '../Assets/Bildersilicon/bildersida2/log4left.svg'
import Brand5 from '../Assets/Bildersilicon/bildersida2/log5left.svg'
import Brand6 from '../Assets/Bildersilicon/bildersida2/log6left.svg'

const Brands = () => {
  return (
    <section id="brands">
          <div className="container">
            <div id="brand-1" className="brand-box">
              <img src={Brand1} alt="logo1" />
            </div>
            <div id="brand-2" className="brand-box">
              <img src={Brand2} alt="logo2" />
            </div>
            <div id="brand-3" className="brand-box">
              <img src={Brand3} alt="logo3" />
            </div>
            <div id="brand-4" className="brand-box">
              <img src={Brand4} alt="logo4" />
            </div>
            <div id="brand-5" className="brand-box">
              <img src={Brand5} alt="logo5" />
            </div>
            <div id="brand-6" className="brand-box">
              <img src={Brand6} alt="logo6" />
            </div>
          </div>

  </section> 
  )
}

export default Brands


