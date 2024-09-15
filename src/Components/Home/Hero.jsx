import React from 'react';
import { Link } from 'react-router-dom';
import S_header from '../S_header';


// import Sidebar from '../Sidebar';

function Hero() {
  return (
    <>
      <div className="">
        <img src={'/assets2/bg_img.webp'} className='h-screen w-screen object-cover'  alt="" />
      </div>
      <S_header></S_header>
      <div className="p-8 pt-[200px] absolute top-0 w-screen h-screen items-center backdrop-blur-xs">
        
        <div className=''>
          
          <div className='text-balck pl-7'> 
            <h2 className="lg:text-7xl  lg:font-semibold text-3xl font-bold text-left text-white ">Find peace in the present moment;<br/>it’s where stress fades away.</h2>
            <p className='lg:mt-4 lg:text-2xl text-xl text-left text-white '>Gain an understanding of stress, its causes, and effective strategies to manage it.</p>
            <div className='mx-10 my-20 flex items-center justify-start gap-10 '>
              <Link to="/test" className='text-white text-3xl font-semibold  px-3 py-2 text-center shadow-lg shadow-gray-500 bg-teal-500 hover:bg-teal-700 rounded-full transition-all duration-300'>Get Started</Link>
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