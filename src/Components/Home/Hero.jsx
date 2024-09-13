import React from 'react';
import { Link } from 'react-router-dom';
import S_header from '../../S_header';


// import Sidebar from '../Sidebar';

function Hero() {
  return (
    <>
      <div className="">
        <img src={'/assets2/BGwallpaper.jpeg'} className='h-screen w-screen object-cover'  alt="" />
      </div>
      <S_header></S_header>
      <div className="p-8 pt-[150px] absolute top-0 w-screen h-screen items-center backdrop-blur-sm">
        
        <div className='align-middle'>
          
          <div className='text-balck pl-7'> 
            <h2 className="lg:text-7xl  lg:font-bold text-3xl font-bold text-left text-white font-outline-1">Stress is like a Buble if not pop it only grows Bigger</h2>
            <p className='lg:mt-20 lg:text-3xl mt-10 text-left lg:font-bold text-white'>Self-care is not selfish, it's essential</p>
            <p className='lg:mt-2 lg:text-2xl text-xl text-left text-white'>Gain an understanding of stress, its causes, and effective strategies to manage it.</p>
            <div className='m-10 flex items-center justify-start gap-10 '>
              <Link to="/test" className='text-white text-2xl font-bold pt-2 pb-2 pr-3 pl-3 bg-purple-500 rounded-3xl animate-pulse'>Get Started</Link>
              {/* <Link to="/Resources" className="text-2xl pt-2 pb-2 pr-3 pl-3 hover:pt-2 hover:pb-2 hover:pr-3 hover:pl-3 Tdelay hover:bg-white hover:rounded-3xl hover:text-green-900 hover:font-bold font-bold">Learn More</Link> */}
            </div>
          </div>
        </div>
      </div>
    
      <hr className="p-1 bg-white"/>
    </>//home's main div
  );
}

export default Hero;






{/* bg-[rgba(0,0,0,0.5)]  <video src={Videobg} autoPlay loop muted className='w-[100%] h-[100%] object-cover'></video> */}