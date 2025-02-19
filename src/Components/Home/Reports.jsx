import React from "react";
import Counter from "./Counter";
const Reports = () => {
  const n=10;
  return (
    <div className="h-[300px] w-full bg-white grid grid-cols-2 items-center px-20">
      <div className="flex flex-col">
        <Counter n={10}/>
        <p className=" text-lg text-sky-800 pt-5">{n}  Individuals took 1st step in managing their stress</p>
      </div>

      <div>
        <Counter n={10} />
        <p className=" text-lg text-sky-800 pt-5">{n} Individuals actually got their stress checked</p>
      </div>
    </div>
  );
};

export default Reports;
