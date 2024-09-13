import Hero from "./Hero.jsx"
import React, { useState, useEffect } from 'react';

import Header from '../Header.jsx';
import Footer from '../Footer.jsx'

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
    <div className="bg-indigo-100">
    <Hero></Hero>
    
    <div
        className={`${showHeader ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[300px]'
          } md:flex hidden fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out transform `}
      >
        <Header />
    </div>
    
    <div className={`${showHeader ?  'ms-0' : 'md:ms-[15%] '}  pt-10 pb-10 lg:mr-[300px] lg:ml-[300px] grid lg:grid gap-10 transition-all duration-300 ease-in-out`}>  
      <div className="bg-white mt-10 grid grid-cols-2  gap-5  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
        <div className="rounded-tl-xl rounded-bl-xl h-full lg:h-[300px] object-cover overflow-hidden">
          <img src="/assets/qna.jpg" alt="QnA" className="transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"/>
        </div>

        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-xl  text-purple-900 font-bold">Stress Analysis</h1>
          <p className="text-sm text-balance lg:text-xl text-purple-800 mt-5">
            This website will help you to analyze the stress you are currently
            facing through a qustionnaire. 
          </p>
        </div>
      </div>

      <div className="bg-white mt-10 grid grid-cols-2  gap-5  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-xl  text-purple-900 font-bold">Activities</h1>
          <p className="text-sm text-balance lg:text-xl text-purple-800 mt-5">
            By your stress analysis, this website also suggests the ways in
            which one can manage the stress level of day to day activities. Some
            activities are at individual level while you can perform them at
            community level as well.
          </p>
        </div>
        <div className=" h-full lg:h-[300px] object-cover overflow-hidden rounded-tr-xl rounded-br-xl ">
        <img src="/assets/social/soc1.jpg" alt="game" className=" transform hover:scale-[110%] transition-all duration-300 rounded-tr-xl rounded-br-xl"/>
        </div>
      </div>

      <div className="bg-white mt-10 grid grid-cols-2  gap-5  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className=" h-full lg:h-[300px] object-cover overflow-hidden rounded-tl-xl rounded-bl-xl">
        <img src="/assets/counselling.jpg" alt="counselling" className="transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"/>
        </div>
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-xl  text-purple-900 font-bold ">Counselling</h1>
          <p className="text-sm text-balance lg:text-xl text-purple-800 mt-5">
            If the condition does not get better even after continuous
            evaluating, recommendations to some professionals can be made
            available.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
