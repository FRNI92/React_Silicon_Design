import React from 'react'
import HeaderMainContainer from './HeaderMainContainer'
import Brands from './Brands'
import AppFeatures from './AppFeatures'
import HowDoes from './HowDoes'
import MakeYour from './MakeYour'
import ClientSection from './ClientSection'
import FAQPage from './FAQPage'
import SubscribeContainer from './SubscribeContainer'


const WholeWebsiteContainer = () => {
  return (
    <>
      <section className="whole-website-size">
        <HeaderMainContainer />
          <Brands />
          <AppFeatures />
          <HowDoes />
          <MakeYour />
          <ClientSection />
          <FAQPage />
          <SubscribeContainer />
     </section>
    </>
  )
}

export default WholeWebsiteContainer
    

