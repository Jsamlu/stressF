import React from "react";

// import Footer from "../Footer.jsx"
import Sfooter from "../Sfooter";

// import MedList from "./MedList.jsx";
// import SocList from "./SocList.jsx";
// import SelfList from "./SelfList.jsx";
// import SearchBar from "../SearchBar";
import S_header from "../S_header";
import { Link } from "react-router-dom";
import ACT from "./ACT";
export default function Activities() {
  return (
    <>
      <div id="Activities">
        <div className="md:hidden">
          <S_header />
        </div>
        <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
        <div className=" p-10 bg-sky-100">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-5xl text-[#0f444c] font-bold">Activities</p>

              {/* <div className="absolute right-2 top-2 bottom-2"><SearchBar/></div> */}
            </div>
            <div className="mx-auto mt-[50px] grid md:grid-cols-3 gap-y-10">
              {ACT.map((ACT) => {
                return (
                  <div className="h-[500px] w-[300px] bg-white rounded-xl grid grid-rows-3 shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="rounded-tr-xl rounded-tl-xl overflow-hidden row-span-2 h-[300px]">
                      <img
                        src={ACT.image}
                        alt=""
                        className="transform hover:scale-[110%] transition-all duration-300"
                      />
                    </div>
                    <div className="mx-auto">
                      <p className="font-bold text-lg">{ACT.name}</p>
                      <p className="mt-2 mb-3 txt">{ACT.desc}</p>
                      <div className="flex space-x-5 mx-auto">
                        <Link
                          to={`${ACT.id}`}
                          className=" text-blue-500 text-center text-lg right-0 block bg-white rounded-lg w-[80%] px-3 py-1 hover:bg-white   hover:font-bold hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 transition-all duration-400"
                        >
                          visit
                        </Link>

                        <button className="text-white text-center bg-blue-400 rounded-lg px-1 py-1 hover:bg-white   hover:font-bold hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 transition-all duration-400">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Sfooter />
    </>
  );
}
