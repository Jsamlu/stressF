import React from "react";
import Counter from "./counter";
const Reports = () => {
  return (
    <div className="h-[300px] w-full bg-white grid grid-cols-2 items-center px-20">
      <div className="flex flex-col">
        <Counter n={10}/>
        <p className="font-semibold text-3xl text-sky-800 pt-5">Peoples Joined</p>
      </div>

      <div>
        <Counter n={10} />
        <p className="font-semibold text-3xl text-sky-800 pt-5">Peoples took Test</p>
      </div>
    </div>
  );
};

export default Reports;
