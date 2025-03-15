import DoctorHeader from "@/Components/DoctorHeader";
import Sfooter from "../../Sfooter";
import Counter from "@/Components/Home/Counter";
import React from "react";
import CList from "@/Components/Counselling/CList";

function DoctorDashboard() {
  return (
    <>
      <DoctorHeader />
      <div className=" h-full bg-gradient-to-br from-indigo-300 to-blue-300 py-3">
        <div className="md:h-[40%] w-[95%] px-5 rounded-xl mx-auto bg-gray-100 shadow-xl">
          <div className="flex gap-x-5 w-full h-full ">
            <div className=" rounded-full w-[19%] h-[60%] self-center ">
              <img
                src={CList[1].image}
                alt=""
                className="overflow-hidden object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="flex-[100%] rounded-xl w-full my-auto">
              <h1 className="text-3xl text-sky-800 font-semibold">
                {CList[1].name}
              </h1>
              <p className="text-lg font-thin">@jayeshsamlu</p>
              <p>{CList[1].degree}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:h-[60%] w-[95%] py-5  mx-auto ">
          <div className="rounded-xl mx-auto md:h-full w-[95%] bg-gray-100 shadow-xl ">
            <Counter n={10}/>
            <p className="pl-5 text-xl">no of Scheduled appointments</p>
          </div>
          <div className="rounded-xl mx-auto md:h-full w-[95%] bg-gray-100 shadow-xl"></div>
          
        </div>
      </div>
      <Sfooter />
    </>
  );
}

export default DoctorDashboard;
