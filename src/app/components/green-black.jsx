import React from "react";
import {BiStopCircle} from "react-icons/bi";
import LearnMoreButton from "./LearnMore";
function GreenBlack(){
    const divStyle = {
        height: '55vh',
        
      };
    return(
        
        <div className=" mt-28 flex" style={divStyle}>
        <div className="bg-green-600 flex-1 ">
            <div className="child-blue-div flex-1 flex-col justify-between items-center mx-auto my-5">
                <h1 className=" text-2xl text-bold mb-2 text-white min-w-full">
                    The science of today is the technology of tomorrow
                </h1>
                <h6 className="text-white text-sm mt-1">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan totam rem aperiam eaque ipsa quae ab illo inven.
                </h6>
                
                <LearnMoreButton />
            </div>
        </div>
            <div class=" bg-black flex-1 justify-center items-center flex"> <div className="flex justify-center items-center"> <p class="text-green-400 text-2xl text-bold">Watch</p><BiStopCircle color="white" size={100} /> <p class="text-green-400 text-2xl text-bold">Video</p></div></div>
        </div>

    );
};
export default GreenBlack;