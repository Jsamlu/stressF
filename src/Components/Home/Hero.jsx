import React from "react";
import { Link } from "react-router-dom";
import S_header from "../S_header";

// import Sidebar from '../Sidebar';

function Hero() {
  return (
    <>
      <div className="">
        <img
          src={"/assets2/bg3.jpeg"}
          className="h-screen w-screen object-cover"
          alt=""
        />
      </div>
      <S_header></S_header>
      <div className="p-8 pt-[150px] md:pt-[100px] absolute top-0 w-screen h-screen items-center backdrop-blur-sm max-w-full">
        <div className="z-10">
          <div className="text-balck pl-7">
            <h2 className="sm:text-4xl md:mt-5 lg:text-7xl  lg:font-semibold text-2xl font-bold text-left text-teal-100 ds">
              Find peace in the present moment;
              it’s where stress fades away.
            </h2>
            <p className="text-prety mt-7 md:mt-5 lg:text-3xl sm:text-xl text-lg text-left text-white ds">
              Hey there! We know that being a student can sometimes feel
              overwhelming.<br /> Whether it's juggling assignments, exams, or just
              everyday challenges, stress can sneak up on you.<br /> That’s where
              D-stress comes in!
            </p>
            <div className=" mx-10 my-10 flex items-center justify-start gap-10 ">
              <Link
                to="/test"
                className="text-white text-xl md:mt-5 md:text-3xl font-semibold  px-3 py-2 mb-1  text-center shadow-lg shadow-gray-500 bg-teal-500 hover:bg-teal-700 rounded-full transition-all duration-300"
              >
                Get Started
              </Link>
              {/* <Link to="/Resources" className="text-2xl pt-2 pb-2 pr-3 pl-3 hover:pt-2 hover:pb-2 hover:pr-3 hover:pl-3 Tdelay hover:bg-white hover:rounded-3xl hover:text-green-900 hover:font-bold font-bold">Learn More</Link> */}
            </div>
          </div>
        </div>
      </div>
    </> //home's main div
  );
}

export default Hero;

{
  /* bg-[rgba(0,0,0,0.5)]  <video src={Videobg} autoPlay loop muted className='w-[100%] h-[100%] object-cover'></video> */
}
