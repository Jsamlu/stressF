import React, { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

function PendingAppointments() {
  const PendingApplist = [
    {
      id: "",
      name: "Arpita",
      date: "08-02-2025",
      time: "08:48 AM",
    },
    {
      id: "",
      name: "Jayesh",
      date: "08-02-2025",
      time: "08:48 AM",
    },
    {
      id: "",
      name: "Jasmine",
      date: "08-02-2025",
      time: "08:48 AM",
    },
  ];

  // const nav = useNavigate();

  useEffect(() => {
    const btn = document.getElementById("pending");
    btn.addEventListener("click", () => {
      console.log("hey");
    });
  });

  return (
    <div className="h-full">
      <div>
        {PendingApplist.map((ap) => {
          return (
            <div
              id="pending"
              className="w-[75%] my-1  text-sky-900 hover:text-white transition-all duration-200 hover:bg-gradient-to-br from-sky-500 to-green-500 bg-white h-[60px] rounded-xl flex justify-between items-center py-2 px-5 hover:scale-[.92] scale-90"
            >
              <div>
                <p className="font-semibold ">{ap.name}</p>
              </div>
              <div className="flex gap-x-5">
                <button className="p-3  text-medium">Accept</button>
                <button className="p-3  text-medium">Reject</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PendingAppointments;
