import React from "react";
import {GiHeadphones} from "react-icons/gi"
import { BiStopCircle } from "react-icons/bi";
import {AiOutlineCopyrightCircle} from "react-icons/ai"
function LastDiv(){
    const divStyle = {
        // You can adjust the inline style as needed
        height: '50vh',
     
      };
    return(

        <div style={divStyle} class = 'flex flex-col bg-gray-200 justify-center items-center lg:min-w-screen sm:min-w-screen sm:h-7'> <GiHeadphones color="#FF4D1C" size={32}/>
        <br />
        <h1 class = 'text-3xl font-bold'>KRADO</h1> 
        <br />
        <div class = 'flex flex-row'><BiStopCircle size={20} color="gray"/> <BiStopCircle size={20} color="#FF4D1C"/> 
        <BiStopCircle size={20} color="gray"/> <BiStopCircle size={20} color="gray"/>
        <BiStopCircle size={20} color="gray"/>
        </div>
        <div class = 'flex flex-row'><AiOutlineCopyrightCircle size={14} color="gray "/> <h6 class = 'text-xs text-gray-500'>2019 All Rights Reserved</h6></div>

         </div>
   );
}
export default LastDiv;