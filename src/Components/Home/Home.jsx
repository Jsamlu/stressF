import Hero from "./Hero.jsx"
import React, { useState, useEffect } from 'react';

import Header from '../Header.jsx';
// import Footer from '../Footer.jsx'

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8; // 80% of the viewport height
      setShowHeader(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  return (
    <>
    <Hero/>
    <div
        className={`md:flex hidden fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out transform ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
      >
        <Header />
    </div>
    <div className="m-10 lg:mr-[300px] lg:ml-[300px] grid lg:grid gap-10">
      <div className="mt-10 grid grid-cols-2  gap-5  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
        <div className="rounded-tl-xl rounded-bl-xl h-full lg:h-[300px] object-cover overflow-hidden">
          <img src="/assets/qna.jpg" alt="QnA" className=" rounded-tl-xl rounded-bl-xl"/>
        </div>

        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-xl  text-purple-900 font-bold">Stress Analysis</h1>
          <p className="text-sm text-balance lg:text-xl text-purple-800 mt-5">
            This website will help you to analyze the stress you are currently
            facing through a qustionnaire. 
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2  gap-5  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-xl  text-purple-900 font-bold">Activities</h1>
          <p className="text-sm text-balance lg:text-xl text-purple-800 mt-5">
            By your stress analysis, this website also suggests the ways in
            which one can manage the stress level of day to day activities. Some
            activities are at individual level while you can perform them at
            community level as well.
          </p>
        </div>
        <div className=" bg-gray-500 h-full lg:h-[300px] object-cover overflow-hidden rounded-tr-xl rounded-br-xl ">
        <img src="/assets/social/soc1.jpg" alt="game" className=" rounded-tr-xl rounded-br-xl bg-bottom"/>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2  gap-5  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className=" bg-gray-500 h-full lg:h-[300px] object-cover overflow-hidden rounded-tl-xl rounded-bl-xl">
        <img src="/assets/counselling.jpg" alt="counselling" className=" rounded-tl-xl rounded-bl-xl"/>
        </div>
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-xl  text-purple-900 font-bold">Counselling</h1>
          <p className="text-sm text-balance lg:text-xl text-purple-800 mt-5">
            If the condition does not get better even after continuous
            evaluating, recommendations to some professionals can be made
            available.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
