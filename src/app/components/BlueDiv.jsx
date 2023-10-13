import React from 'react';
import PurchaseButton from './purchaseButton';
const BlueDiv = () => {
  const divStyle = {
    height: '70vh', // 50% of the viewport height
   // backgroundColor: 'blue', // You can set the background color
  };
  return (
    <div className="bg-blue-600 min-w-full flex flex-col justify-center items-center" style={divStyle}>
      <div className="child-blue-div">
        <h1 className="text-white font-bold text-4xl mb-2">Discover The Power Of Great Music</h1>
        <h6 className="text-white text-sm">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan totam rem aperi.
        </h6>
          
      </div>
      
    </div>
  );
};

export default BlueDiv;

