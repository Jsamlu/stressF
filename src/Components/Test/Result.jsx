import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ACT2 from "../Activities/ACT2";

const Result = ({ n }) => {
  const rval = () => {
    if (n >= 0 && n <= 16.6) return 3;
    if (n > 16.6 && n <= 32.6) return 2;
    return 1;
  };

  const searchLvl = rval();
  const recomendations = ACT2 ? ACT2.filter((item) => item.lev.includes(searchLvl)) : [];

  // Ensure n is within a valid range
  let value = Math.max(-50, Math.min(n*2-50, 50));

  // Map value to temp for stress level mapping
  // const mapToTemp = (val) => {
  //   return val;
  // };
  const temp = value;

  // Define stress levels with labels and colors
  const stressLevels = [
    { label: "Less Stress", color: "text-green-400" },
    { label: "Moderate Stress", color: "text-yellow-400" },
    { label: "Average Stress", color: "text-orange-400" },
    { label: "Hyper Stress", color: "text-red-400" },
    { label: "Critical Stress", color: "text-purple-600" },
  ];

  const stresswheel = [
    { label: "Less Stress", color: "bg-green-400" },
    { label: "Moderate Stress", color: "bg-yellow-400" },
    { label: "Average Stress", color: "bg-orange-400" },
    { label: "Hyper Stress", color: "bg-red-400" },
    { label: "Critical Stress", color: "bg-purple-600" },
  ];

  const getStressAngle = (temp) => {
    if (temp >= -50 && temp <= -25) return -80;    // Less Stress
    if (temp >= -26 && temp <= 0) return -40;   // Moderate Stress
    if (temp >= 1 && temp <= 25) return 0;     // Average Stress
    if (temp >= 26 && temp <= 36) return 40;   // Hyper Stress
    if (temp >= 37 && temp <= 50)return 80;                   // Critical Stress
  };
  

  const getStressLevel = (temp) => {
    if (temp >= -50 && temp <= -25) return "Less Stress";       // Extreme Low
    if (temp >= -26 && temp <= 0) return "Moderate Stress";   // Slightly Low
    if (temp >= 1 && temp <= 25) return "Average Stress";      // Mid Level
    if (temp >= 26 && temp <= 36) return "Hyper Stress";       // High Stress                    // Extreme High
    if (temp >= 36 && temp <= 50) return "Critical Stress";       // High Stress                    // Extreme High
    
  };
  const currentLevel = getStressLevel(temp);

  //use navigate
  const nav = useNavigate();
  const showRecomendations = useSelector((state) => state.Lstate.role) !== "NA";

  // Calculate the angle for the pointer (0 to 180 degrees)
  // const angle = ( / 100) * 180;

  const angle = getStressAngle(temp);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="h-[20%] w-[80%] bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg my-5">
        <div className="my-5">
          <ul className="flex space-x-5">
            {stressLevels.map((stress, index) => (
              <li key={index} className={`${stress.color} text-xl font-semibold`}>
                <p>{stress.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-3xl font-semibold">Your Stress Level is .....</h1>
      </div>

      <div className="flex flex-col items-center justify-center h-[65vh] w-[80%] bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="relative w-80 h-40 md:w-96 md:h-48 lg:w-128 lg:h-60">
          {/* Semi-Circle Background */}
          <div className="absolute inset-0 flex">
            {stresswheel.map((level, index) => {
              const rotation = index * 36 - 52;
              return (
                <div key={index} className="rounded-full">
                  <div
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
                transformOrigin: "bottom center",
              }}
            ></div>
          </div>
        </div>

        {/* Display Stress Level */}
        <div className="mt-4 text-3xl font-medium dark:text-gray-100">
          Stress Level: {currentLevel}
        </div>
      </div>

      <div className="flex flex-col min-h-[70vh] w-[80%] bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg my-5">
        <h1 className="text-4xl font-semibold">Recommendation</h1>
        <hr className="h-[5px] bg-sky-900 w-[80%] my-5" />
        <div className="grid grid-cols-2 my-10 gap-x-3 gap-y-3">
          {showRecomendations ? (
            recomendations.map((rec) => (
              <Link key={rec.id} className="gap-4" to={`/activities/${rec.id}`}>
                <div className="flex gap-x-5 bg-white shadow-xl rounded-xl p-2">
                  <div className="w-[27%] h-[100px] overflow-hidden rounded-full">
                    <img src={rec.image} alt={rec.name} className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-xl text-sky-800 font-semibold py-3">{rec.name}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Login for accessing personalized recommendations</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;