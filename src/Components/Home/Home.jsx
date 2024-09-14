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
    <div className="bg-indigo-100 min-h-screen min-w-screen">
    <Hero></Hero>
    
    <div
        className={`${showHeader ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[300px]'
          } lg:flex hidden fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out transform `}
      >
        <Header />
    </div>
    
    <div className={`${showHeader ?  'ms-0' : 'md:ms-[15%] '}  pt-10 pb-10 lg:mr-[300px] lg:ml-[300px] transition-all duration-300 ease-in-out`}>  
      <div className="bg-white mt-10 grid grid-cols-2  gap-5  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
        <div className="rounded-tl-xl rounded-bl-xl h-full lg:h-[300px] object-cover overflow-hidden">
          <img src="/assets/qna.jpg" alt="QnA" className="transform hover:scale-[110%] transition-all duration-300 rounded-tl-xl rounded-bl-xl"/>
        </div>

        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-xl  text-purple-900 font-bold">Stress Analysis</h1>
          <p className="text-sm text-balance lg:text-xl text-gray-500 mt-5">
          Our platform provides an easy-to-use questionnaire that analyzes your stress levels 
          </p>
        </div>
      </div>

      <div className="bg-white mt-10 grid grid-cols-2  gap-5  items-center rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="pl-10 pr-10 pt-5 pb-5 lg:pl-10 lg:pr-10 lg:pt-10">
          <h1 className="text-xl  text-purple-900 font-bold">Activities</h1>
          <p className="text-sm text-balance lg:text-xl text-gray-500 mt-5">
          Our platform offers personalized activity suggestions to help you de-stress. From mindfulness exercises to light physical activities, we have something for everyone.
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
          <p className="text-sm text-balance lg:text-xl text-gray-500 mt-5">
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
