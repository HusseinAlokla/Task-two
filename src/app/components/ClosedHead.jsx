import React from "react";
import {BsHeadsetVr} from "react-icons/bs"
import PurchaseButton from "./purchaseButton";
function ClosedDiv(){
    const divStyle={
        
        height : '60vh'
    }
    return(
        <div class = 'flex gap-8 lg:min-w-2/3 lg:h-60vh sm:min-w-screen sm:min-h-full justify-center items-center lg:mx-auto my-3' style={divStyle}>
            
            <BsHeadsetVr size={350} color="gray" />
            <div class = 'flex-row lg: w-1/3'><pre class = 'text-3xl font-bold font-serif'>Purchase</pre> <pre class = ' text-orange-500 text-3xl font-bold font-serif'>Krado Headphone</pre> <pre class = 'text-3xl font-bold font-serif'>for $299</pre>
            <h6 class = 'text-sm font-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudan totam rem aperiam eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspermatur aut odit aut fugit, sed quia.</h6>
            <br/>
            <PurchaseButton />
            </div>
            
            
            
            
            
            </div>






    );
}
export default ClosedDiv