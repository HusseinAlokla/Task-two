import React from 'react';
import MyComponent from './GrayHeadphone';

const HalfScreenDiv = () => {
  return (
    <div className="half-screen min-w-full">
      <div className="bg-white p-4 md:p-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Technology Keeps Moving Forward
        </h1>
        <h6 className="text-sm md:text-base text-gray-500 mt-2">
          Excepteur sint occaecat cupidatat non proident, sunt oin cupla qui offici
        </h6>
      </div>

      <MyComponent />
    </div>
  );
};

export default HalfScreenDiv;
