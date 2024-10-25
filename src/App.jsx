// App.jsx
import React from 'react'
import './Assets/Css/css/styles.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Brands from './Components/Brands'
import AppFeatures from './Components/AppFeatures'
import HowDoes from './Components/HowDoes'
import MakeYour from './Components/MakeYour'
import ClientSection from './Components/ClientSection'
import FAQPage from './Components/FAQPage'
import SubscribeContainer from './Components/SubscribeContainer'
import Footer from './Components/Footer'



export default function App() {
  return (
    <>
      <section className="whole-website-size">
        <section className="manage-all-background">
          <Header />
            <Main />
            </section>
            {/* tar slut innan brands */}
            <Brands />
            <AppFeatures />
            <HowDoes />
            <MakeYour />
            <ClientSection />
            <FAQPage />
            <SubscribeContainer />

          <Footer />
      </section>
    
    </>
    
  );
}

