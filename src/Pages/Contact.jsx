import React from 'react'
import gpsmap from '../Assets/Bildersilicon/contactpage/map-image.svg'
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { useEffect, useRef } from 'react';
import { useEffect, useState } from 'react'



const containerStyle = {
  width: '600px',
  height: '500px'
};

const center = {
  lat: 37.15367130259117,
  lng: -83.76188997134105
};
  
const Contact = () => {
  
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    const regex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    if (!regex.test(value)) {
      setFullNameError('Please enter a valid full name.');
    } else {
      setFullNameError('');
    }
  };

  const [email, setEmail] = useState ('')
  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (e) => {

    const value = e.target.value;
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(value)) {
      setEmailError('Please enter a valid email');
    }else setEmailError('')
  }

  const [specialist, setSpecialist] = useState('');
  const [specialistError, setSpecialistError] = useState('');

    const handleSpecialistChange = (e) => {
    const value = e.target.value;
    setSpecialist(value);
    if (value === 'Select a specialist') {
      setSpecialistError('Please select a specialist.');
    } else {
      setSpecialistError('');
    }
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!specialist) {
    setSpecialistError('Please select a specialist');
    return;
  }
    // Kontrollera om fullName och email är giltiga
if (fullNameError || emailError || !fullName || !email) {
  alert('Please correct the errors in the form.');
  return; // Avbryt formulärets inskickning
}

alert('Din tid är bokad!');
};

  return (
    <>
    <section className="contact-section">
    
    <div className="navigation-trail">
      <Link to="/"><i className="fa-solid fa-house"></i>Homepage</Link> &raquo; <span>Contact</span>
    </div>
    <div className="contact-header">
      <h1>Contact Us</h1>
    </div>
    

    <div className="contact-consultation-wrapper"> 
      
      <div className="online-consultation-wrapper">
        <form className="online-consultation" accept="#" method="POST" onSubmit={handleSubmit} noValidate>
          <h2>Get Online Consultation</h2>

          <div className="form-field">
            <label for="full-name">Full name</label>
            <input
            type="text" 
            id="fullname" 
            name="full-name" 
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Please Enter You Full name" />
            {fullNameError && <p className="form-field-error">{fullNameError}</p>}
          </div>

          <div className="form-field">
            <label for="email">Email address</label>
            <input
            type="email" 
            id="email" 
            name="email"
            value={email} 
            onChange={handleEmailChange}
            placeholder="Please enter your email adress" />
            {emailError && <p className="form-field-error">{emailError}</p>}
          </div>

          <div className="form-field">
            <label for="specialist">Specialist</label>
            <select 
            id="specialist" 
            name="specialist" 
            value={specialist}
            onChange={handleSpecialistChange}
            >
              <option value="">Select a specialist</option>
              <option value="specialist-1">Select a specialist 1</option>
              <option value="specialist-2">Select a specialist 2</option>
              <option value="specialist-3">Select a specialist 3</option>
            </select>
              {specialistError && <p className="form-field-error">{specialistError}</p>}
          </div>

          <button type="submit" className=" submit-button"><span>Make an appointment</span></button>
        </form>
    </div>
      <div className="contact-options">
        
        <div className="contact-card">
          <div className="icon">
            <i className="fa-regular fa-envelope"></i>
          </div>

          <div className="contact-info">
            <h2>Email us</h2>
            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
            <a href="#" className="contact-link">Leave a message <i className="fa-solid fa-arrow-right"></i></a>
          </div>


        </div>

        <div className="contact-card">
          <div className="icon">
            <i className="fa-solid fa-user-plus"></i>
          </div>

          <div className="contact-info">
            <h2>Careers</h2>
            <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
            <a href="#" className="contact-link">Send an application <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          
        </div>      
    </div>
  </div>
        
        
        
        

  </section>
    
  

<section className="map-medical">
  <div className="map">
    <LoadScript googleMapsApiKey="AIzaSyBQEMocrJEsThl5GGOsMBzv5d9VNNSOv9Y">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16} 
           
            >
            </GoogleMap>
          </LoadScript>
  </div>

  <div className="medical-info">
    <div className="medical-card">
      <h2>Medical Center 1</h2>
      <p>
        <i className="fa-solid fa-location-dot"></i>4517 Washington Ave. Manchester, Kentucky 39495
      </p>
      <p>
        <i className="fa-solid fa-phone-volume"></i>(406) 555-0120
      </p>
      <p>
        <i className="fa-regular fa-clock"></i>Mon – Fri: 9:00 am – 22:00 am
        Sat – Sun: 9:00 am – 20:00 am
      </p>
  
    </div>
  
    
    <div className="medical-card">
      <h2>Medical Center 2</h2>
      <p>
        <i className="fa-solid fa-location-dot"></i>2464 Royal Ln. Mesa,New Jersey 45463
      </p>
      <p>
        <i className="fa-solid fa-phone-volume"></i>(406) 544-0123
      </p>
      <p>
        <i className="fa-regular fa-clock"></i>
        Mon – Fri: 9:00 am – 22:00
        Sat – Sun: 9:00 am – 20:00 am
      </p>
    </div>
  
    <div className="social-media medical-card">
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-youtube"></i>
    </div>


  </div>

</section>
      
    
    </>
  )
}

export default Contact