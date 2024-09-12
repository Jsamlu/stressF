import React from "react";


// import Footer from "../Footer.jsx"

import MedList from "./MedList.jsx";
import SocList from "./SocList.jsx"
import SelfList from "./SelfList.jsx";

export default function Activities() {
  return (
    <>
      <div id="Activities">
        <div className=" p-10 bg-white">
          <div>
            <p className="text-5xl text-[#0f444c] font-bold">Activities</p>

            <p className="text-3xl mt-[50px] text-[#0f444c] font-slim">
              Meditation
            </p>
            <div className="md:ml-[50px]  mt-[50px] grid lg:grid-cols-3 ">
              {MedList.map((MedList) => {
                return (
                  <div className="h-[500px] w-[300px] bg-white rounded-xl grid grid-rows-3 shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="rounded-tr-xl rounded-tl-xl overflow-hidden row-span-2 h-[300px]">
                      <img src={MedList.image} alt="" className="transform hover:scale-[110%] transition-all duration-300"/>
                    </div>
                    <div className="ml-5">
                      <p className="font-bold text-lg">
                        {MedList.name}
                      </p>
                      <p className="mt-2 mb-3">
                        {MedList.desc}
                      </p>
                      <a
                        href="/links"
                        className="text-white text-center right-0 block bg-blue-400 rounded-lg p-1 mr-[200px] hover:bg-white   hover:font-bold hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 transition-all duration-400"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-3xl mt-[50px] text-[#0f444c] font-slim">
              Self Activities
            </p>
            <div className="md:ml-[50px] md:mr-[50px] mt-[50px] grid lg:grid-cols-3 gap-4">
              {SelfList.map((SelfList) => {
                return (
                  <div className="h-[500px] w-[300px] bg-white rounded-xl grid  shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="rounded-tr-xl rounded-tl-xl overflow-hidden h-[250px] ">
                      <img src={SelfList.image} alt="" className="transform hover:scale-[110%] transition-all duration-300" />
                    </div>
                    <div className="ml-5">
                      <p className="font-bold text-lg">
                        {SelfList.name}
                      </p>
                      <p className="mt-2 mb-3">
                        {SelfList.desc}
                      </p>
                      <a
                        href="/links"
                        className="text-white text-center right-0 block bg-blue-400 rounded-lg p-1 mr-[200px] hover:bg-white hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 hover:font-bold transition-all duration-400"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-3xl mt-[50px] text-[#0f444c] font-slim">
              Social Activities
            </p>
            <div className="md:ml-[50px] md:mr-[50px] mt-[50px] grid lg:grid-cols-3 gap-4">
              {SocList.map((SocList) => {
                return (
                  <div className="h-[500px] w-[300px] bg-white rounded-xl grid grid-rows-2 shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="rounded-tr-xl rounded-tl-xl overflow-hidden h-[300px]">
                      <img src={SocList.img} alt="" className="transform hover:scale-[110%] transition-all duration-300"/>
                    </div>
                    <div className="ml-5">
                      <p className="font-bold text-lg">
                        {SocList.name}
                      </p>
                      <p className="mt-2 mb-3">
                        {SocList.desc}
                      </p>
                      <a
                        href="/links"
                        className="text-white text-center right-0 block bg-blue-400 rounded-lg p-1 mr-[200px] hover:font-bold hover:bg-white hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 transition-all duration-400"
                      >
                        visit
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
