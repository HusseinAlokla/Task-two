import React from 'react';
import { FaHeadphones } from "react-icons/fa";
//import myImage from '../images/head1.png';
import LeftDiv from './left-div';
import RightDiv from './right-div';


function MyComponent() {
  const centerStyle = {
    display: 'flex',
    alignItems: 'center',     // Center vertically
    justifyContent: 'center', // Center horizontally
    height: '100vh', 
    
  };

  return (
    <div style={centerStyle}>
        <LeftDiv />
      <FaHeadphones  size={500} color='gray' className='Gray-headphone'  />
      <RightDiv/>
    </div>
  );
}

export default MyComponent;
