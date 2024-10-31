import React from 'react'
import Navbar from './Navbar'


const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header>
      <div className="navbar-container">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
    </header>

  )
}

export default Header

        
