import React from 'react';
import { FaHeadphones } from "react-icons/fa";
import LeftDiv from './left-div';
import RightDiv from './right-div';

function MyComponent() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <LeftDiv />
      <div className="flex items-center justify-center">
        <FaHeadphones size={300} color='gray' className='Gray-headphone md:w-500' />
      </div>
      <RightDiv />
    </div>
  );
}

export default MyComponent;
