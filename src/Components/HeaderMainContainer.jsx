import React from 'react'
import Header from './Header'
import Main from './Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'

const HeaderMainContainer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
        <BrowserRouter>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Routes>
          <Route path="/" element={<Main isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    </>
    
  );
}

export default HeaderMainContainer
                

      
