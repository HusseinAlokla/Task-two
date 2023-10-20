import React from "react";
import MyHeadphone from "./components/iconheadphone";
import JoinButton from "./components/joinButton";
import BlueDiv from "./components/BlueDiv";
import HalfScreenDiv from "./components/test";
import GreenBlack from "./components/green-black";
import TwoHeads from "./components/TwoheadsDiv";
import LightBlueDiv from "./components/LightBlueDiv";
import MediumWhite from "./components/MediumWhiteDiv";
import GrayDiv from "./components/GrayDiv";
import ClosedDiv from "./components/ClosedHead";
import CamDiv from "./components/Cameradiv";
import SubDiv from "./components/SubscribeDiv";
import LastDiv from "./components/LastDiv";
import Header from './components/Header';


const HomePage = () => {
  return (
    <div>
      <header className="bg-white text-black p-4">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between max-w-screen-lg">
          <div className="flex items-center space-x-4">
            <MyHeadphone className="text-3xl md:text-4xl lg:text-2xl" />
            <h4 className="text-3xl md:text-4xl lg:text-2xl font-bold">
              Esportas
            </h4>
          </div>
          <div class = 'flex justify-end'><Header /></div>
          


  
          <div>
            <JoinButton className="mt-4 md:mt-0" />
          </div>
        </div>
      </header>
      <main>
        <div>
          <BlueDiv />
          <HalfScreenDiv />
        </div>
      </main>
      <GreenBlack />
      <div>
        <TwoHeads />
      </div>
      <LightBlueDiv />
  <MediumWhite />
<GrayDiv />
<ClosedDiv />
<CamDiv />
<SubDiv />
<LastDiv />
    </div>
  );
};

export default HomePage;
