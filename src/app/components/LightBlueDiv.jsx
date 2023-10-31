import React from 'react';
import PurchaseButton from './purchaseButton';

const LightBlueDiv = () => {

  return (
    <div className="bg-blue-400 flex justify-center items-end p-4 sm:p-8">
      <div className=" text-left px-4 sm:px-8 md:px-16 lg:px-24 lg:w-1/2  sm:w-screen   lg:justify-center lg:items-center">
        <h1 className="text-black font-bold text-2xl sm:text-4xl mb-2">Krado Modern Design With Wireless Gadget</h1>
        <h6 className="text-gray-900 text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudan totam rem aperiam eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptat.
        </h6>
        <br />
        <PurchaseButton />
      </div>
    </div>
  );
};

export default LightBlueDiv;
