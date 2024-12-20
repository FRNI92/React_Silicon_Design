import React from 'react'
import gpsmap from '../Assets/Bildersilicon/contactpage/map-image.svg'
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { useEffect, useRef } from 'react';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';



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
  const [ fullNameGreenText, setFullNameGreenText] = useState ('')

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    const regex = /^[a-zA-ZÀ-Öà-ö]+(?:[-'´ ][a-zA-ZÀ-Öà-ö]+)*$/;;
    if (!regex.test(value)) {
      setFullNameError('Please enter a valid full name. (e.g., Anders Andersson)');
      setFullNameGreenText('')
    } else {
      setFullNameError('');
      setFullNameGreenText('You have entered a valid name')
    }
  };

  const [email, setEmail] = useState ('')
  const [emailError, setEmailError] = useState('')
  const [emailGreenText, setEmailGreenText] = useState('')

  const handleEmailChange = (e) => {

    const value = e.target.value;
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(value)) {
      setEmailError('Please enter a valid email: (e.g., email@example.com)');
      setEmailGreenText('');
    } else { setEmailError('');
          setEmailGreenText('You have entered a valid email');
  }
}

  const [specialist, setSpecialist] = useState('');
  const [specialistError, setSpecialistError] = useState('');
  const [specialistGreenText, setSpecialistGreenText] = useState('')

    const handleSpecialistChange = (e) => {
    const value = e.target.value;
    setSpecialist(value);
    if (value === 'Select A Specialist') {
      setSpecialistError('Please select a specialist.');
      setSpecialistGreenText('')
    } else {
      setSpecialistError('');
      setSpecialistGreenText('You have selected a specialist')
    }
};
const [contactServer, setContactServer] = useState()

const handleSubmit = (e) => {
  e.preventDefault()

    if (!fullName || !email || !specialist || fullNameError || emailError || specialistError){
      setContactServer ('There was an issue submitting your form. You need to Enter your first and last name. your email adress and select one of our specialists. Then click Make an appointment');
      setTimeout(() => {
        setContactServer('');
      }, 10000);
      return;
    }

      fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
    method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        fullName, email, specialist})
      })
      .then(response => { 
        console.log('Response status', response.status); 
        // return response.text();}) den verkar vara tom, går ej men json då
        if (response.ok) {  // Kontrollerar om statusen är 200-299 istället för att kolla om den är === 200
          setContactServer('Your form has been successfully submitted!');
          setTimeout(() => {
            setContactServer('');
          }, 4000);
          setFullName('');
          setEmail('');
          setSpecialist('');
          setFullNameError('');
          setEmailError('');
          setSpecialistError('');
          setFullNameGreenText('');
          setEmailGreenText('');
          setSpecialistGreenText('');
        } else {
          setContactServer('There was an issue submitting your form. You need to Enter your first and last name. your email adress and select one of our specialists. Then click Make an appointment');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setContactServer('An unexpected error occurred. Please try again.');
      });
    }

    

  return (
    <>
    <section className="contact-section">
    
    <div className="navigation-trail">
      <Link to="/"><i className="fa-solid fa-house"></i><span>Homepage</span></Link><span> &raquo; </span><span>Contact</span>
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
            placeholder="Please Enter Your Full Name" />
            {fullNameError && <p className="form-field-error">{fullNameError}</p>}
            {fullNameGreenText && <p className="form-field-greenText">{fullNameGreenText}</p>}
          </div>

          <div className="form-field">
            <label for="email">Email address</label>
            <input
            type="email" 
            id="email" 
            name="email"
            value={email} 
            onChange={handleEmailChange}
            placeholder="Please Enter Your Email Adress" />
            {emailError && <p className="form-field-error">{emailError}</p>}
            {emailGreenText && <p className="form-field-greenText">{emailGreenText}</p>}
          </div>

          <div className="form-field">
            <label for="specialist">Specialist</label>
            <select 
            id="specialist" 
            name="specialist" 
            value={specialist}
            onChange={handleSpecialistChange}
            >
              <option value="Select A Specialist">Select A Specialist</option>
              <option value="specialist-1">Select specialist Hans</option>
              <option value="specialist-2">Select specialist Therése</option>
              <option value="specialist-3">Select specialist Joakim</option>
            </select>
              {specialistError && <p className="form-field-error">{specialistError}</p>}
              {specialistGreenText && <p className="form-field-greenText">{specialistGreenText}</p>}

          </div>

            <div className="form-footer">
            {contactServer && (
            <p className="contact-server-message">{contactServer}</p>
            )}
            <button type="submit" className="submit-button"><span>Make an appointment</span></button>
            </div>

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