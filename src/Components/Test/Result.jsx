import React from "react";
//import { useContext } from "react";
//import { AnswerContext } from "../Context/test/AnswerContext";




//{/ value = -40 }
const Result = () => {
  // Clamp the stressValue between 1 and 100
  // const value = Math.min(Math.max(stressValue, 1), 100);

  //const { answers } = useContext(AnswerContext); // Access answers from context
  
  // if (value >= 50) {
  //   value = 50;
  // }

  // function Answers (){
  //   console.log(answers);
  //   let res = 0
  //   answers.forEach(element => {
  //     res += element;
  //   });
  //   return res;
  // }
  // let value = Answers;
  let value = -40;

  // Calculate the angle for the pointer (0 to 180 degrees)
  const angle = (value / 100) * 180;
  let temp = 0;
  if (value <= -50) {
    temp = 0;
  } else if (value <= -25 && value >= -50) {
    temp = 25;
  } else if (value <= 0 && value >= -25) {
    temp = 50;
  } else if (value <= 25 && value >= 0) {
    temp = 75;
  } else if (value <= 50 && value >= 25) {
    temp = 100;
  }

  // Define stress levels with labels and colors
  const stressLevels = [
    { label: "Less Stress", color: "text-green-400" },
    { label: "Moderate Stress", color: "text-yellow-400" },
    { label: "Average Stress", color: "text-orange-400" },
    { label: "Hyper Stress", color: "text-red-400" },
    { label: "Critical Stress", color: "text-purple-600" },
  ];

  //for wheel
  const stresswheel = [
    { label: "Less Stress", color: "bg-green-400" },
    { label: "Moderate Stress", color: "bg-yellow-400" },
    { label: "Average Stress", color: "bg-orange-400" },
    { label: "Hyper Stress", color: "bg-red-400" },
    { label: "Critical Stress", color: "bg-purple-600" },
  ];

  // Function to get current stress level label
  const getStressLevel = (temp) => {
    if (temp > -50 && temp <= -25) return "Less Stress";
    if (temp > -25 && temp <= 0) return "Modrate Stress";
    if (temp > 0 && temp <= 25) return "Average Stress";
    if (temp > 25 && temp <= 50) return "Hyper Stress";
    return "Critical Stress";
  };

  const currentLevel = getStressLevel(value);

  return (
    <div className="min-h-screen w-full bg-sky-200 flex flex-col justify-center items-center">
      <div className=" h-[20%] w-[80%] bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg my-5">
        <div className="my-5">
          <ul className="flex space-x-5">
            {stressLevels.map((stress) => {
              return (
                <li className={`${stress.color} text-xl font-semibold `}>
                  <p>{stress.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <h1 className="text-3xl font-semibold">Your Stress Level is .....</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-[65vh] w-[80%] bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Semi-Circle Container */}
        <div className="relative w-80 h-40 md:w-96 md:h-48 lg:w-128 lg:h-60">
          {/* Semi-Circle Background */}
          <div className="absolute inset-0 flex">
            {stresswheel.map((level, index) => {
              const rotation = index * 36 - 52; // 180 / 5 = 36 degrees per segment
              return (
                <div className="rounded-full">
                  <div
                    key={index}
                    className={`absolute top-auto w-1/2 h-full ${level.color}`}
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: "100% 100%",
                      clipPath: "polygon(0% 0%, 100% 100%, 100% 0%)",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Pointer */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div
              className="absolute h-20 bg-black dark:bg-white rounded origin-bottom transform transition-transform duration-500 ease-out"
              style={{
                width: "2px",
                height: "150px",
                transform: `rotate(${angle}deg)`,
                transformOrigin: "100% 100%",
              }}
            ></div>
          </div>

          {/* Center Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center text-center text-xs font-medium px-2">
            {currentLevel}
          </div> */}
          </div>

          {/* Labels */}
          {stressLevels.map((level, index) => {
            const rotation = index * 36 + 18; // Center of each segment
            const radius = 100; // Distance from center for labels
            const rad = (rotation * Math.PI) / 180;
            const x = radius * Math.cos(rad) *1.5;
            const y = radius * Math.sin(rad) *1.5;
            return (
              <div
              // key={index}
              // className="absolute text-sm font-semibold text-gray-700 dark:text-gray-300"
              // style={{
              //   left: `calc(50% + ${x}px)`,
              //   top: `calc(98% - ${y}px)`, // Adjust for semi-circle
              //   transform: "translate(-50%, 0%)",
              //   whiteSpace: "nowrap",
              // }}
              >
                {/* {level.label} */}
              </div>
            );
          })}
        </div>

        {/* Display Stress Value */}
        <div className="mt-4 text-3xl font-medium dark:text-gray-100">
          Stress Level: {currentLevel}
        </div>
      </div>
      <div className="flex flex-col h-[70vh] w-[80%] bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg my-5">
          <div>
            <h1 className="text-4xl font-semibold">Recommendation</h1>
          </div>
          <hr className="h-[5px] bg-sky-900 w-[80%] my-5"></hr>
          <div > 
          <div className="grid grid-cols-3 my-10">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="flex gap-x-5 bg-white shadow-xl rounded-xl p-2">
                  <div className=" w-[30%] h-[100px] overflow-hidden rounded-full">
                    <img
                      src="/assets/med/img4.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xl text-sky-800 font-semibold py-3">
                      Praticing Mindfullness
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 bg-white shadow-xl rounded-xl p-2">
                  <div className=" w-[30%] h-[100px] overflow-hidden rounded-full">
                    <img
                      src="/assets/self/self3.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xl text-sky-800 font-semibold py-3">
                      Playing Games
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Result;
