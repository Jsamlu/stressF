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
    <div className="bg-indigo-100 min-h-screen min-w-screen">
    <Hero></Hero>
    
    <div
        className={`${showHeader ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[300px]'
          } lg:flex hidden fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out transform `}
      >
        <Header />
    </div>
    {/* ${showHeader ?  'md:ms-[20%]' : ' ms-0'}  */}
    <div className={` py-10 lg:w-[50%] md:[60%] sm:w-[85%] w-[90%] h-full mr-auto ml-auto transition-all duration-300 ease-in-out `}>  
      <div className="bg-white md:mt-10 grid grid-cols-2  gap-1  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:h-[300px] md:w-[800px] lg:w-[950px] sm:w-[550px] h-[200px] w-[450px]">
        <div className="rounded-tl-xl rounded-bl-xl h-full w-full object-cover overflow-hidden">
          <img src="/assets/qna.jpg" alt="QnA" className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"/>
        </div>

        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-lg md:text-xl  text-purple-900 font-bold">Stress Analysis</h1>
          <p className="text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
          Our platform provides an easy-to-use questionnaire that analyzes your stress levels 
          </p>
        </div>
      </div>

      <div className="bg-white mt-10 grid grid-cols-2  gap-1  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:h-[300px] md:w-[800px] lg:w-[950px] sm:w-[550px] h-[210px] w-[450px]">
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-lg md:text-xl  text-purple-900 font-bold">Activities</h1>
          <p className="text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
          Our platform offers personalized activity suggestions to help you de-stress. From mindfulness exercises to light physical activities, we have something for everyone.
          </p>
        </div>
        <div className="h-full w-full object-cover overflow-hidden rounded-tr-xl rounded-br-xl ">
        <img src="/assets/social/soc1.jpg" alt="game" className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tr-xl rounded-br-xl"/>
        </div>
      </div>

      <div className="bg-white mt-10 grid grid-cols-2  gap-1  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:h-[300px] md:w-[800px] lg:w-[950px] sm:w-[550px] h-[200px] w-[450px]">
        <div className=" h-full  object-cover overflow-hidden rounded-tl-xl rounded-bl-xl">
        <img src="/assets/counselling.jpg" alt="counselling" className="h-full w-full transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"/>
        </div>
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-lg md:text-xl  text-purple-900 font-bold ">Counselling</h1>
          <p className="text-xs md:text-sm text-balance lg:text-xl text-gray-500 mt-2 md:mt-5">
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
