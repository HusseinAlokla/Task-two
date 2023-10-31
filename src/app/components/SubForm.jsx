'use client';
import React, { useState } from 'react';
function SubForm(){
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
            
    };
    return (
        <form className = "subscribeForm" onSubmit={handleSubmit}>
         <div class = 'flex lg:w-max sm:max-w md:max-w'>
            
          <input
            type="email"
            placeholder="Enter Your Email" // Default text
            value={email}
            onChange={handleEmailChange}
            
          />
          <button type="submit" class = ''>Subscribe</button>
      </div>  </form>
        
      );
    }
export default SubForm;