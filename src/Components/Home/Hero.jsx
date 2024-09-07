import React from 'react';
import { Link } from 'react-router-dom';

// import Sidebar from '../Sidebar';

function Hero() {
  return (
    <>
      <div id='Home' className=' w-screen h-[100vh] backdrop-blur-xl'></div>
      <div className="p-8 absolute top-[150px] w-screen h-screen items-center">
        
        <div className='align-middle'>
          
          <div className='text-balck pl-7'> 
            <h2 className="lg:text-7xl lg:font-bold text-3xl font-bold text-center">Welcome to Stress Analysis and Management</h2>
            <p className='lg:mt-20 lg:text-2xl mt-10 text-xl text-center'>Gain an understanding of stress, its causes, and effective strategies to manage it.</p>
            <div className='mt-20 flex items-center justify-center gap-10'>
              <Link to="/test" className='text-white text-2xl font-bold pt-2 pb-2 pr-3 pl-3 bg-purple-500 rounded-3xl animate-pulse'>Get Started</Link>
              {/* <Link to="/Resources" className="text-2xl pt-2 pb-2 pr-3 pl-3 hover:pt-2 hover:pb-2 hover:pr-3 hover:pl-3 Tdelay hover:bg-white hover:rounded-3xl hover:text-green-900 hover:font-bold font-bold">Learn More</Link> */}
            </div>
          </div>
        </div>
      </div>
    

    </>//home's main div
  );
}

export default Hero;






{/* bg-[rgba(0,0,0,0.5)]  <video src={Videobg} autoPlay loop muted className='w-[100%] h-[100%] object-cover'></video> */}