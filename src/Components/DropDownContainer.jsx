import React from 'react'
import { useState, useEffect } from 'react';

const DropDownContainer = () => {

    const [accordionData, setAccordionData] = useState([])
    const [openAccordion, setOpenAccordion] = useState(null)
    
    useEffect(() => {
      fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then(response => response.json())
      .then(data => setAccordionData(data))
      .catch(error => console.error('Error fetching data:', error))
    },[])

    const toggleAccordion = (id) => {
      setOpenAccordion(openAccordion === id ? null : id); // Växlar mellan att öppna och stänga
 
  }

  return (
    <section className="drop-down-menu-container">
        {accordionData.map((item) => 
          <div key={item.id} className="accordion-item">
            <div className={`accordion ${openAccordion === item.id ? 'active' : ''}`}
              onClick={() => toggleAccordion(item.id)}>
                {item.title} 
            </div>
            <div className={`panel ${openAccordion === item.id ? 'show' : ''}`}>
                <p>{item.content}</p>
            </div>
          </div>
          
      )}
            <a href="#" className="btn-purple">
              <span>Contact us now</span>
            </a>
    </section>
  );
};

export default DropDownContainer
              
            



            
          
            
            
            