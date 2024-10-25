import React from 'react'
import ReviewPic from '../Assets/Bildersilicon/bildersida5/Reviews.svg'

function ClientSection() {
  return (
    <section className="client-section">
      <div className="Clients-wrapper">
        <div id="box-1" className="box">
          <h2>Clients are Loving Our App</h2>
        </div>
        <div id="box-2" className="box">
        <img src={ReviewPic} alt="reviews from clients" />
        </div>
      </div>
    </section>
  )
}

export default ClientSection