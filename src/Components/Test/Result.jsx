import { useState } from "react";
import { valArr } from ".";

const data = ["0", "3", "1", "4", "2", "2", "4", "1", "3", "2"];
console.log(valArr);
localStorage.setItem("data", valArr);

export default function Result() {
    const w = 80;
    const [barfill, setbarfill]=useState(0);

    const fill = () =>{

    }
    fill();
    const handel2 = () =>{
      setbarfill(0);
    }

    const getcolor = () =>{
      if(barfill < 40){
        return "#02e821";
      }else if(barfill < 60){
        return "#8ce802";
      }
      else if(barfill< 70){
        return "#e8ab02";
      }
      else{
        return "#e82502";
      }

    }
    const col = getcolor();
    console.log(getcolor());
  return (
    <div className="min-h-screen  bg-sky-200 flex justify-center items-center">
      <div id="container" className=" bg-white w-[80%] mx-auto  py-10 rounded-xl">
        <div id="bar" className="w-[80%] h-[40px] bg-gray-300 mx-auto rounded-full">
            <div id="fill" className={`w-[${barfill}%] h-full bg-[#e82502] rounded-full transition-all duration-1000 ease-out`}></div>
        </div>
        {/* <button onClick={handel1}>+20</button> */}
        <button onClick={handel2}>reset</button>
      </div>
    </div>
  );
}
