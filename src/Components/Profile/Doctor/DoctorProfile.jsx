import React from "react";
import { DoctorDashboard } from "..";

// import { useContext } from "react";
// import { login_context } from "../Context/login/login_context";

function DoctorProfile() {
  // const { setUser } = useContext(login_context);
  // console.log(setUser);

  return <div className="h-[70vh]">{ true ? <DoctorDashboard /> : <Login />}</div>;
}

export default DoctorProfile;
