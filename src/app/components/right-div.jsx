import React from 'react';
import Sound from './Sound';
import Headset from './Headset';
import Layer from './Layered';
function RightDiv(){
    return(
        <div className='right-div'>
            <Sound />
            <Layer />
            <Headset />


        </div>

    );
};
export default RightDiv;