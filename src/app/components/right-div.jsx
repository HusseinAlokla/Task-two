import React from 'react';
import Sound from './Sound';
import Headset from './Headset';
import Layer from './Layered';
function RightDiv(){
    return(
        <div className='right-div'>
            <Sound />
            <br />
            <Layer />
            <br />
            <Headset />


        </div>

    );
};
export default RightDiv;