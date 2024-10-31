import React from 'react'
import HeaderMainContainer from './HeaderMainContainer'
import Brands from './Brands'
import AppFeatures from './AppFeatures'
import HowDoes from './HowDoes'
import MakeYour from './MakeYour'
import ClientSection from './ClientSection'
import FAQPage from './FAQPage'
import SubscribeContainer from './SubscribeContainer'
import Footer from './Footer'


const WholeWebsiteContainer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <section className="whole-website-size">
        <HeaderMainContainer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}  />
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
  )
}

export default WholeWebsiteContainer;
    

