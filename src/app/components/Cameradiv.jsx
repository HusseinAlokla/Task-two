import React from "react";
import {FiCamera} from "react-icons/fi"
import {TiCameraOutline} from "react-icons/ti"
import {RiCamera2Line} from "react-icons/ri"
import {GiVideoCamera} from "react-icons/gi"
import {TbCameraBolt} from "react-icons/tb"
import {FaCameraRetro} from "react-icons/fa"
import {SlCamera} from "react-icons/sl"

function CamDiv(){
    const divStyle = {
          
        height: '30vh', // 70% of the viewport height
        
      };
return(
    <div class = 'flex bg-gray-200 lg:min-w-screen sm:min-w-screen  items-center justify-center gap-3' style={divStyle}>

        <div> <FiCamera size={60} color="gray"/> 
        <h4 class= 'text-sm font-bold underline text-gray-400'>PHOTO CLUB</h4>
        </div>
       
        <div> <TiCameraOutline size={70} color="gray"/> 
        <h4 class= 'text-sm font-bold underline text-gray-400 font-serif font-CursiveFont'>PHOTO CLUB</h4>
        <h6  className="fontsi">ENJOY PHOTOGRAPHY</h6>
                </div>
        <div> <TbCameraBolt size={70} color="gray"/> 
        <h4 class= 'text-sm font-bold underline text-gray-400 font-serif font-CursiveFont'>FLASH MODE</h4>
        <h6  className="fontsi">PHOTOGRAPHY BEST PLACE</h6>
                </div>
                <div> < GiVideoCamera size={65} color="gray"/> 
        <h4 class= 'text-lg font-bold underline text-gray-400 font-serif font-CursiveFont'>+ OLDCAMS +</h4>
        <p  className="fontsi">VINTAGE CAMERAS</p>
                </div>
    
                <div> <FaCameraRetro size={60} color="gray"/> 
        <h4 class= 'text-sm font-bold underline text-gray-400 font-serif font-CursiveFont'>PHOTO CLUB</h4>
        <p  className="fontsi">ENJOY PHOTOGRAPHY</p>
                </div>
                <div> <SlCamera size={60} color="gray"/> 
        <h4 class= 'text-sm font-bold underline text-gray-400 font-serif font-CursiveFont'>FLASH MODE</h4>
        <p  className="fontsi">PHOTOGRAPHY BEST PLACE</p>
                </div>
    </div>




);
}
export default CamDiv;