import React from "react";
import { BiStopCircle } from "react-icons/bi";
import LearnMoreButton from "./LearnMore";

function GreenBlack() {
  return (
    <div className="lg:min-w-screen flex sm:min-w-screen">
      <div className="bg-green-600 flex-1 w-1/2 pb-5 pt-5 pl-3">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">
            The science of today is the technology of tomorrow
          </h1>
          <h6 className="text-white text-sm md:text-base mt-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudan totam rem aperiam eaque ipsa quae ab illo
            inven.
          </h6>
          
          <LearnMoreButton />
        </div>
      </div>
      <div className="bg-black flex-1 w-1/2 sm:flex items-center justify-center">
  <div className="flex flex-col justify-center items-center">
    <p className="text-green-400 text-2xl md:text-4xl font-bold">Watch</p>
    <BiStopCircle color="white" size={100} />
    <p className="text-green-400 text-2xl md:text-4xl font-bold">Video</p>
  </div>
</div>

    </div>
  );
}

export default GreenBlack;
