import DoctorHeader from "@/Components/DoctorHeader";
import Sfooter from "../../Sfooter";

import React from "react";
import CList from "@/Components/Counselling/CList";
import { DoctorAppointments } from "@/Components/Appointments";

function DoctorDashboard() {
  return (
    <>
      <DoctorHeader />
      <div className=" h-full bg-sky-200 py-10">
        <div className="md:h-[40%] w-[95%] px-5 rounded-xl mx-auto bg-gray-100 shadow-lg">
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
      <DoctorAppointments/>
      </div>
      <Sfooter />
    </>
  );
}

export default DoctorDashboard;
