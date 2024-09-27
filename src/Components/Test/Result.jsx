import { useState } from "react";
import { valArr } from ".";

const data = ["0", "3", "1", "4", "2", "2", "4", "1", "3", "2"];
localStorage.setItem("data", valArr);
export default function Result() {
    const w = 50;
    const [barfill, setbarfill]=useState(0);
  return (
    <div className="min-h-screen  bg-sky-200 flex justify-center items-center">
      <div id="container" className=" bg-white w-[80%] mx-auto  py-10 rounded-xl">
        <div id="bar" className="w-[80%] h-[40px] bg-gray-300 mx-auto rounded-full">
            <div id="fill" style={{width:`${w}%`, height:`100` }}></div>
        </div>
      </div>
    </div>
  );
}
