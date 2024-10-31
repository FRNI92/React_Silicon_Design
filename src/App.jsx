// App.jsx
import React, { useState } from 'react';
import './Assets/Css/css/styles.css'
import WholeWebsiteContainer from './Components/WholeWebsiteContainer';


  export default function App() {

    const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <WholeWebsiteContainer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
    
  );
}

