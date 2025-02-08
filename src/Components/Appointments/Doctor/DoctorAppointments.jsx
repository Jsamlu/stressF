import React, { useState } from "react";
import AcceptedAppointments from "./AcceptedAppointments";
import Sfooter from "@/Components/Sfooter";
import { PendingAppointments } from "..";
const DoctorAppointments = () => {
  const [appointment, setAppointment] = useState("A");
  return (
    <>
      <div className="bg-sky-200 min-h-[70vh] py-7 px-7">
        <div className='flex py-3'>
          <button onClick={() => setAppointment("A")} className="font-bold md:text-xl text-sky-900 focus:text-sky-500 w-[10%] p-3">Scheduled</button>
          <button onClick={() => setAppointment("P")} className="font-bold md:text-xl text-sky-900 focus:text-sky-500 w-[10%]">Pending</button>
        </div>
        <hr className=""/>
        {
          appointment === "A"?
          <AcceptedAppointments />
          :<PendingAppointments/>
        }
      </div>
      <Sfooter />
    </>
  );
};

export default DoctorAppointments;
