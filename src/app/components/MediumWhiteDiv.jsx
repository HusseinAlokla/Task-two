import React from 'react';
import Threeheads from './ThreeHeads';

const MediumWhite = () => {
  return (
    <div className=" lg:max-w-screen sm:max-w-screen ">
      <div className="bg-white p-4 md:p-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Different Colours & Different Choices
        </h1>
        <h6 className="text-sm md:text-base text-gray-500 mt-2">
          Excepteur sint occaecat cupidatat non proident, sunt oin cupla qui offici
        </h6>
      </div>
      <div className="lg:flex justify-center items-center min-w-screen gap-2 sm:max-w-screen">
<div ><Threeheads /></div>  
        <Threeheads />
    <div><Threeheads /></div>  
 
</div>

    </div>
  );
};

export default MediumWhite
  ;
