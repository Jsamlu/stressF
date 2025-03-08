import React from "react";
import { Link } from "react-router-dom";
import S_header from "../S_header";

// import Sidebar from '../Sidebar';
import Reveal from "../Animation/Reveal";

function Hero() {
  return (
    <>
      <div className="h-screen w-screen">
        <img
          src={"/assets2/people/jaybg.png"}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      {/* */}
      <S_header></S_header>
      <div className="p-8 pt-[150px] md:pt-[100px] absolute top-0 w-screen h-screen items-center backdrop-blur-[100px] max-w-full">
        <div className="z-10">
          <div className="text-balck pl-7">
            <h2 className="typing-effect font-serif sm:text-4xl md:mt-5 lg:text-7xl md:text-4xl text-2xl font-bold text-left text-sky-50 ">
              Find peace in the present moment;
              <br />
              it’s where stress fades away.
            </h2>
            {/*
              text-slate-700
              text-sky-900
              ds
            */}
            
              <p className="  font-serif mt-7 md:mt-5 lg:text-3xl md:xl sm:text-xl text-lg text-left text-purple-100 ">
                Hey there! We know that being a student can sometimes feel
                overwhelming.
                <br /> Whether it's juggling assignments, exams, or just
                everyday challenges,
                <br /> Stress can sneak up on you. that’s where D-stress comes
                in!
              </p>
            
            <div className=" mx-10 my-10  md:my-5 flex items-center justify-start   ">
              <Link
                to="/test"
                className="font-mono text-white text-xl md:mt-5 md:text-3xl font-semibold lg:px-4 lg:py-3 px-3 py-2 mb-1  text-center  bg-teal-500 hover:bg-teal-700 hover:translate-y-3 hover:shadow-xl hover:shadow-cyan-300  rounded-full transition-all duration-100"
              >
                Get Started
              </Link>
              {/* <Link to="/Resources" className="text-2xl pt-2 pb-2 pr-3 pl-3 hover:pt-2 hover:pb-2 hover:pr-3 hover:pl-3 Tdelay hover:bg-white hover:rounded-3xl hover:text-green-900 hover:font-bold font-bold">Learn More</Link> */}
            </div>
            <div className="absolute right-[100px] bottom-[80px] w-[300px] opacity-80">
              <img
                src="/assets2/people/medditate.png"
                alt="calm"
                className="h-full w-full"
              />
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
