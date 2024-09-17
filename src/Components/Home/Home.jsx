import Hero from "./Hero.jsx"
import React, { useState, useEffect } from 'react';

import Header from '../Header.jsx';
import Footer from '../Footer.jsx'

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.3; // 80% of the viewport height
      setShowHeader(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  return (
    <div className=" min-h-screen">
    <Hero></Hero>
    
    <div
        className={`${showHeader ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[300px]'
          } md:flex hidden fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out transform`}
      >
        <Header />
    </div>
    {/* */  /*width lg:w-[950px] sm:w-[450px] md:w-[700px] w-[300px]*/}

    <div className={` ${showHeader ?  'md:ms-[18%]' : ' ms-0'}  bg-indigo-100 md:px-15 sm:px-20 px-10 lg:px-20 py-10  w-[100%] h-full mr-auto ml-auto transition-all duration-700 ease-in-out `}>  
      <div className="bg-white md:mt-10 grid grid-cols-2  gap-1  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:h-[300px] w-10/12 h-[200px] ">
        <div className="rounded-tl-xl rounded-bl-xl h-full w-full object-cover overflow-hidden">
          <img src="/assets/qna.jpg" alt="QnA" className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"/>
        </div>

        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-[15px] sm:text-lg md:text-xl  text-purple-900 font-bold">Stress Analysis</h1>
          <p className="text-[7px] sm:text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
          Our platform provides an easy-to-use questionnaire that analyzes your stress levels 
          </p>
        </div>
      </div>

      <div className="bg-white mt-10 grid grid-cols-2  gap-1  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:h-[300px] h-[200px] w-10/12">
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-[15px] sm:text-lg md:text-xl  text-purple-900 font-bold">Activities</h1>
          <p className="text-[7px] sm:text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
          Our platform offers personalized activity suggestions to help you de-stress. From mindfulness exercises to light physical activities, we have something for everyone.
          </p>
        </div>
        <div className="h-full w-full object-cover overflow-hidden rounded-tr-xl rounded-br-xl ">
        <img src="/assets/social/soc1.jpg" alt="game" className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tr-xl rounded-br-xl"/>
        </div>
      </div>

      <div className="bg-white mt-10 grid grid-cols-2  gap-1  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:h-[300px] h-[200px] w-10/12 ">
        <div className=" h-full w-full object-cover overflow-hidden rounded-tl-xl rounded-bl-xl">
        <img src="/assets/counselling.jpg" alt="counselling" className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"/>
        </div>
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-[15px] sm::text-lg md:text-xl  text-purple-900 font-bold ">Counselling</h1>
          <p className="text-[7px] sm:text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
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
