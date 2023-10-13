// pages/index.js

import React from "react";
import MyHeadphone from "./components/iconheadphone";
import JoinButton from "./components/joinButton";
import BlueDiv from "./components/BlueDiv";
import HalfScreenDiv from "./components/test";
import GreenBlack from "./components/green-black";


const HomePage = () => {
  return (
    <div>
      <header className="bg-#fafafa-800 text-gray-400 p-4">
        <div className="mx-auto flex items-center justify-between max-w-screen-lg">
          <div className="flex items-center space-x-4">
            <MyHeadphone
              className="text-3xl md:text-4xl lg:
            text-2xl"
            />
            <h4 className="text-3xl md:text-4xl lg:text-2xl font-bold">
              Esportas
            </h4>
          </div>
          <div className="flex space-x-4">
            <h4 className="text-orange-600">About</h4>
            <h4>Features</h4>
            <h4>Clients</h4>
            <h4>Plans</h4>
            <JoinButton />
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
    </div>
  );
};

export default HomePage;
