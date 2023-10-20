import React from "react";
import NewHead from "./NewHeadset";
import ExploreMore from "./ExploreMore";

function TwoHeads() {
  return (
    <div className="Twoheads">
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <h1 className="text-4xl font-bold">Krado Modern Design With Wireless Gadget</h1>
          <h6 className="text-sm text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudan totam rem aperiam eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia
          </h6>
          <br />
          <ExploreMore />
          <NewHead />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <NewHead />
          <h1 className="text-4xl font-bold">Krado Modern Design With Wireless Gadget</h1>
          <h6 className="text-sm text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudan totam rem aperiam eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia
          </h6>
          <br />
          <ExploreMore />
        </div>
      </div>
    </div>
  );
}

export default TwoHeads;
