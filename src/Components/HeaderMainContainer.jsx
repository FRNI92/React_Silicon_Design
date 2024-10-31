import React from 'react'
import Header from './Header'
import Main from './Main'

const HeaderMainContainer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <section className="manage-all-background">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Main isDarkMode={isDarkMode} />
      </section>
    </>
    
  )
}

export default HeaderMainContainer
      
