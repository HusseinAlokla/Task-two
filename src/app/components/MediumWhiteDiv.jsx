import React from 'react';
import Threeheads from './ThreeHeads';

const MediumWhite = () => {
  return (
    <div className=" lg:min-w-screen sm:min-w-screen">
      <div className="bg-white p-4 md:p-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Different Colours & Different Choices
        </h1>
        <h6 className="text-sm md:text-base text-gray-500 mt-2">
          Excepteur sint occaecat cupidatat non proident, sunt oin cupla qui offici
        </h6>
      </div>
      <div className="flex justify-center items-center lg:min-w-screen sm:min-w-screen">
  <div className="Three-heads">
    <Threeheads />
  </div>
  <div className="Three-heads1">
    <Threeheads />
  </div>
  <div className="Three-heads">
    <Threeheads />
  </div>
</div>

    </div>
  );
};

export default MediumWhite
  ;
