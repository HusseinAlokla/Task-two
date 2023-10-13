import React from 'react';
import MyComponent from './GrayHeadphone';
import LeftDiv from './left-div';
const HalfScreenDiv = () => {
  const divStyle = {
    height: '90vh', // 50% of the viewport height
    backgroundColor: 'white', // You can set the background color
  };

  return (
    <div className="half-screen" style={divStyle}>
        <div class='mt-12'><h1 class='text-4xl font-bold text-center'>Technology Keeps Moving Forward</h1>
        <h6 class = 'text-sm text-gray-500 text-center  '>Excepteur sint occaecat cupidatat non proident, sunt oin cupla qui offici</h6>
        </div>
        
      <MyComponent />
     
    </div>
  );
};

export default HalfScreenDiv;
