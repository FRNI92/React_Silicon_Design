
import Icons1 from '../Assets/Bildersilicon/bildersida7/bildersida7.svg'
import Icons2 from '../Assets/Bildersilicon/bildersida7/mailsymbol.svg'
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const SubscribeContainer = () => {


  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const isValid = emailReg.test(email)
    if (!isValid) {
      setError('Please enter your email address.');
    } else {
      setError(''); // Rensa felmeddelande om e-posten är giltig
      setSuccess('Email is valid!'); // Sätt framgångsmeddelandet
    }
  
    return isValid;
  };
  

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  
    if (inputEmail === '') {
      setError(''); // Rensa felmeddelande om fältet är tomt
      setSuccess('') //tar bort gröna texten om det är tomt
    } else if (!validateEmail(inputEmail)) {
      setError('Please enter a valid email adress. example@email.domain');
      setSuccess(''); //ta bort gröna texten om det är tomt
    } 
    else {
      validateEmail(inputEmail); // Validera e-post och sätt felmeddelande direkt
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return; // Stoppa här om e-posten är ogiltig
    }
  
    if (validateEmail(email)) {
      fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST', //vanliga fetch verkar vara inställd på GET som default
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      .then(response => {
        if (response.status === 200) {
          console.log('Request was successful! Status:', response.status);
          toast.success('You have successfully subscribed');
        }
      })
      // .catch(error => {
      //   console.error('Fetch error:', error);
      // });
      }
    };

    
  return (
      <section>
        <div className="subscribe-container">
          <div className="icon-text-wrapper">
            <div className="bell-icon">
              <img src={Icons1} alt="bellicon" />
            </div>
            <div className="subscribe-text">
              <h4 className="desktop-text">Subscribe to our newsletter to stay informed about latest updates</h4>
              <h4 className="mobile-text">Subscribe to our newsletter</h4>
            </div>
          </div>


          <div className="form-button-wrapper">
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
            <div>
              <button
              type="submit"
              className="btn-subscribe-purple">
                <span>Subscribe</span>
              </button>
            </div>
              </div>
              <p className={`error-message ${error ? 'visible' : ''}`}>{error}</p>
              <p className={`success-message ${success ? 'visible' : ''}`}>{success}</p>
              <ToastContainer />
            </form>

          </div>

      </div>
    </section>
  )
}

export default SubscribeContainer

      
        
      