import React from 'react';
import PurchaseButton from './purchaseButton';

  const BlueDiv = () => {
  return (
    <div className="bg-blue-700 min-w-full flex flex-col justify-center items-center"   >
      <div className="child-blue-div text-center px-4 sm:px-8 md:px-16 lg:px-24 sm:w-full lg:max-w-lg pb-10 pt-3">
        <h1 className="text-white font-bold text-4xl mb-2 pt-2">Discover The Power Of Great Music</h1>
        <h6 className="text-white text-sm lg:pb-1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan totam rem aperi.
        </h6>
        <PurchaseButton />
      </div>
    </div>
  );
};

export default BlueDiv;
