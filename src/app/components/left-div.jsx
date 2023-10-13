import React from 'react';
import Send from './Sendcomp';
import Heartcom from './HeartComp';
import Music from './Music';


function LeftDiv() {
    return (
        <div className="left-div"> {/* Apply the CSS class */}
            <Send />
            <br/>
            <Heartcom />
            <br/>
            <Music />
        </div>
    );
}

export default LeftDiv;
