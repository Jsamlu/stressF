import Hero from "./Hero.jsx";
import React, { useState, useEffect } from "react";

import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Aim from "./Aim.jsx";
import H_scroll from "./H_scroll.jsx";

import Feature_List from "./Feature_List.jsx";
import { Report } from "../Report/Report.jsx";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5; // 80% of the viewport height
      setShowHeader(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" min-h-screen bg-sky-100">
      <Hero></Hero>
      <hr className="p-1 bg-white" />

      <div
        className={`${
          showHeader
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-[300px]"
        } md:flex hidden fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out transform`}
      >
        <Header />
      </div>
      {/* */
      /*width lg:w-[950px] sm:w-[450px] md:w-[700px] w-[300px]*/}

      <div
        className={` ${
          showHeader ? "md:ms-[17%]" : " ms-0"
        }   md:px-15 sm:px-20  px-10 lg:px-20 py-10  w-[100%] mx-auto transition-all duration-700 ease-in-out overflow-hidden `}
      >
        <Aim />
      </div>

      <hr className="hidden md:block p-1 bg-white" />

      {/* <div className="bg-white md:mt-10 grid grid-cols-2 md:mx-0 mx-auto  gap-1  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] md:h-[300px] w-10/12 h-[200px] ">
          <div className="rounded-tl-xl rounded-bl-xl h-full w-full object-cover overflow-hidden">
          <img
          src="/assets/qna.jpg"
          alt="QnA"
          className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"
          />
          </div>
          
          <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-[15px] sm:text-lg md:text-xl  text-purple-900 font-bold">
          Stress Analysis
          </h1>
          <p className="text-[7px] sm:text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
          Our platform provides an easy-to-use questionnaire that analyzes
          your stress levels
          </p>
          </div>
          </div>
          <div className="bg-white mt-10 grid grid-cols-2  gap-1 md:mx-0 mx-auto items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] md:h-[300px] h-[200px] w-10/12">
          <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
            <h1 className="text-[15px] sm:text-lg md:text-xl  text-purple-900 font-bold">
            Activities
            </h1>
            <p className="text-[7px] sm:text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
            Our platform offers personalized activity suggestions to help you
            de-stress. From mindfulness exercises to light physical
            activities, we have something for everyone.
            </p>
            </div>
            <div className="h-full w-full object-cover overflow-hidden rounded-tr-xl rounded-br-xl ">
            <img
            src="/assets/social/soc1.jpg"
            alt="game"
            className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tr-xl rounded-br-xl"
            />
            </div>
            </div>
            
            <div className="bg-white mt-10 grid grid-cols-2  gap-1 md:mx-0 mx-auto items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] md:h-[300px] h-[200px] w-10/12  mb-10">
            <div className=" h-full w-full object-cover overflow-hidden rounded-tl-xl rounded-bl-xl">
            <img
            src="/assets/counselling.jpg"
            alt="counselling"
            className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"
            />
            </div>
            <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
            <h1 className="text-[15px] sm::text-lg md:text-xl  text-purple-900 font-bold ">
            Counselling
            </h1>
            <p className="text-[7px] sm:text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
            If the condition does not get better even after continuous
            evaluating, recommendations to some professionals can be made
            available.
            </p>
            </div>
            </div> */}
      <div
        className={` ${
          showHeader ? "md:ms-[17%]" : " ms-0"
        } py-10 mx-auto transition-all duration-700 ease-in-out overflow-hidden md:block hidden `}
      >
        <div className="">
          <h1 className="pb-10 mx-[45%] text-3xl font-semibold text-sky-800 underline underline-offset-[10px] decoration-2">Features</h1>
        </div>
        <div className=" bg-sky-200 py-5">
          <H_scroll list={Feature_List} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
