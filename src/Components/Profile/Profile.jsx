import React from "react";
import Login from "../Login/Login";
import { Dashboard } from ".";
import { useSelector } from "react-redux";


function Profile() {

  const role = useSelector((state) => state.Lstate.role)
  

  return <div className="h-[70vh]">{ role !== "NA" ? <Dashboard /> : <Login />}</div>;
}

export default Profile;
