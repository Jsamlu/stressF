import React from "react";

// import Footer from "../Footer.jsx"
import Sfooter from "../Sfooter";
import { useState } from "react";
import ACT2 from "./ACT2";

// import MedList from "./MedList.jsx";
// import SocList from "./SocList.jsx";
// import SelfList from "./SelfList.jsx";
// import SearchBar from "../SearchBar";
// import ACT from "./ACT";
import S_header from "../S_header";
import { Link } from "react-router-dom";
import { setActivity } from "../Store/Features/Activitiy/actSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export default function Activities() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  // Filter the ACT2 array based on search term
  const filteredResults = ACT2.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const acts = useSelector((state) => state.ActivityState.Acts);

  //   const addActivityHandler = () => {
  //     dispatch(setActivity(actInp));
  //     console.log("Added");
  //     alert("Activity Added");

  // }
  // console.log(acts.includes(ACT[0].id));

  function checkAdded(Name){

    for (let i = 0;i<acts.length;i++){
      if(acts[i].name === Name)
        return true;
    }
    return false
  }
  return (
    <>
      <div id="Activities">
        <div className="md:hidden">
          <S_header />
        </div>
        <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
        <div className=" p-10 bg-gradient-to-b from-indigo-200 via-indigo-500 to-blue-500 min-h-screen">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-5xl text-[#0f444c] font-bold">Activities</p>

              {/* <div className="absolute right-2 top-2 bottom-2"><SearchBar/></div> */}
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" mt-5 w-[50%] p-2 border rounded mb-4"
            />
            <ul>
              <div className="mx-auto mt-[50px] grid md:grid-cols-3 gap-y-10">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item, index) => (
                    <li key={index}>
                      <div className="h-[500px] w-[300px] bg-white rounded-xl grid grid-rows-3 shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                        <div className="rounded-tr-xl rounded-tl-xl overflow-hidden row-span-2 h-[300px]">
                          <img
                            src={item.image}
                            alt=""
                            className="transform hover:scale-[110%] transition-all duration-300"
                          />
                        </div>
                        <div className="mx-auto">
                          <p className="font-bold text-lg">{item.name}</p>
                          <p className="mt-2 mb-3 txt">{item.desc}</p>
                          <div className="flex space-x-5 mx-auto">
                            <Link
                              to={`${item.id}`}
                              className=" text-blue-500 text-center text-lg right-0 block bg-white rounded-lg w-[80%] px-3 py-1 hover:bg-white   hover:font-bold hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 transition-all duration-400"
                            >
                              visit
                            </Link>

                            <button
                              id={item.id}
                              onClick={() => {
                                item.isAdded = true;
                                dispatch(setActivity(item));
                                console.log(checkAdded(item.name));
                                (checkAdded(item.name) || item.isAdded)?document.getElementById(item.id).innerHTML="Added":document.getElementById(item.id).innerHTML="Add";
                              }}
                              className="text-white text-center bg-blue-400 rounded-lg px-1 py-1 hover:bg-white   hover:font-bold hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 transition-all duration-400"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No results found</li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Sfooter />
    </>
  );
}
