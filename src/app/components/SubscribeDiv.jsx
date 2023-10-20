
import React from 'react';
import SubForm from './SubForm';
function SubDiv(){
    const divStyle = {
        // You can adjust the inline style as needed
        height: '45vh',
     
      };
    return(
        <div class = 'flex flex-col items-center  min-w-full justify-center' style={divStyle}>
    
        
<h1 class = 'text-2xl font-bold' >Subscribe To Our Newsletter</h1>
<h6 class = "text-gray-400 text-sm">Be First To Get Latest Update From Krado</h6>
<br/>
        <SubForm />
      </div>



    );
}
export default SubDiv;