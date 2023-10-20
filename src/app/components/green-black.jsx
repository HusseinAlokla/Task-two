import React from "react";
import { BiStopCircle } from "react-icons/bi";
import LearnMoreButton from "./LearnMore";

function GreenBlack() {
  return (
    <div className=" md:mt-28 lg:min-w-screen sm:min-w-screen flex  md:flex-row">
      <div className="bg-green-600 md:flex-1">
        <div className="child-blue-div flex flex-col justify-between items-start mx-auto my-5 ">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white min-w-full">
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
      <div className="bg-black md:flex-1">
  <div className="flex flex-col justify-center items-center h-full">
    <p className="text-green-400 text-2xl md:text-4xl font-bold">Watch</p>
    <BiStopCircle color="white" size={100} />
    <p className="text-green-400 text-2xl md:text-4xl font-bold">Video</p>
  </div>
</div>

    </div>
  );
}

export default GreenBlack;
