import React from "react";
import Login from "../Login/Login";
import { Dashboard } from ".";



function Profile() {


  return <div className="h-[70vh]">{ false ? <Dashboard /> : <Login />}</div>;
}

export default Profile;
