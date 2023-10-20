'use client';
import React, { useState } from "react";
import {BsFillSquareFill} from "react-icons/bs"
import {BsSquare} from "react-icons/bs"



function Feedback(){
    const [selectedFeedback, setSelectedFeedback] = useState(0);
    const [squareColor, setSquareColor] = useState("orange");
    

  const feedbackData = [
    [
      {
        name: "Micheal Doe",
        location: "Sydney, Australia",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
      {
        name: "Elina Doe",
        location: "Sydney, Australia",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
      {
        name: "Wlliams Doe",
        location: "Sydney, Australia",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
    ],
    [
      {
        name: "Jimmy Doe",
        location: "Beirut, Lebanon",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
      {
        name: "Samir Doe",
        location: "Sour, Lebanon",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
      {
        name: "Maria Doe",
        location: "Zahli, lebanon",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
    ],
    [
      {
        name: "Tony Doe",
        location: "Berlin, Germany",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
      {
        name: "Tala Doe",
        location: "Muchen, Germany",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
      {
        name: "Jack Doe",
        location: "Berlin, Germany",
        feedback: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nost rum exerci tationem",
      },
    ],
  ];
  const handleFeedbackChange = (square) => {
    setSelectedFeedback((selectedFeedback + 1) % feedbackData.length);
    setSquareColor("orange"); // Change square color to white
      square.classList.toggle("filled"); // Add or remove the "filled" class
    
  };

    return(
        <div class = 'flex text-left sm:min-w-screen lg:min-w-screen justify-center items-center'> 
              {feedbackData[selectedFeedback].map((feedback, index) => (
                <div key={index}  class = "lg : w-1/4 sm: min-w-1/4">
                     <div class = 'flex gap-2'>
                <BsFillSquareFill
                  color="gray"
                  size={55}
                />
        <div class = '  justify-left `flex`-col'> 
        <h2 class = "text-l text-bold text-black">{feedback.name}</h2>
        <h6 class = "text-sm text-orange-500  ">{feedback.location}</h6></div>
        </div>
            <br />
        <div class = 'text-sm text-gray-600'><p>{feedback.feedback}</p></div>
        <div class ='flex-row gap-0'> 
       <br/>
         <BsSquare
                    className=" m-1 square"
                  color={squareColor}
                  size={15}
                  onClick={ event => handleFeedbackChange(event.target)}
                />  
        </div>
        </div>
        
              ))}
              </div>
        


      

    );
}
export default Feedback;