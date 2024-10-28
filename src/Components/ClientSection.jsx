// import React from 'react'
import ReviewPic from '../Assets/Bildersilicon/bildersida5/Reviews.svg'
import Quotes from '../Assets/Bildersilicon/bildersida5/Quotes.svg'
// import useState from 'react'
// import useEffect from 'react'
import React, { useState, useEffect } from 'react';

function ClientSection() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching testimonials', error))
  }, [])
  
  return (
    <section className="client-section">

        <div className="review-container">
        <div>
          <h2>Clients are Loving Our App</h2>
        </div>
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="quote-icon-card">
                <div className="quote-icon">
                  <img className="quotes-image" src={Quotes} />
                </div>
              </div>
              <div className="content-card">
                <div className="star-rating">
                  {[...Array(review.starRating)].map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
                </div>
                  
                <p>{review.comment}</p>
                
                <div className="author-info">
                  <img src={review.avatarUrl} alt={`${review.author}'s avatar`} />
                  <div className="author-job">
                    <h3>{review.author}</h3>
                    <p>{review.jobRole}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default ClientSection