import React from "react";
import Feedback from "./Feedback";
const GrayDiv = () => {
  
    return(
        <div className="lg:min-w-screen sm:min-w-screen">
        <div className="bg-gray-200 p-4 md:p-6 text-center lg:h-full "><h1 className="text-2xl md:text-4xl font-bold"> Feedback From Our Customer</h1>
        <h6 className="text-sm md:text-base text-gray-500 mt-2">Excepteur sint occaecat cupidatat non proident, sunt oin cupla qui offici</h6>
       <br />
        <Feedback />     
        </div>
        
        </div>



    );
};
export default GrayDiv;