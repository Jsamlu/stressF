
import DoctorHeader from "@/Components/DoctorHeader";
import Sfooter from "../../Sfooter";

import React from "react";

function DoctorDashboard() {
  return (
    <>
      <DoctorHeader/>
      <div className=" h-full bg-sky-200 ">
        <h1 className="text-2xl">Doctors dashboard</h1>
      </div>
      <Sfooter/>
    </>
  );
}

export default DoctorDashboard;
