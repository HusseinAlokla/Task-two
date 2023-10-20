import React from 'react';
import PurchaseButton from './purchaseButton';

  const BlueDiv = () => {
  const divStyle = {
    // You can adjust the inline style as needed
    height: '70vh', // 70% of the viewport height
    //backgroundColor: 'blue', // Set the background color
  };

  return (
    <div className="bg-blue-700 min-w-full flex flex-col justify-center items-center" style={divStyle}>
      <div className="child-blue-div text-center px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-white font-bold text-4xl mb-2">Discover The Power Of Great Music</h1>
        <h6 className="text-white text-sm">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan totam rem aperi.
        </h6>
        <PurchaseButton />
      </div>
    </div>
  );
};

export default BlueDiv;
