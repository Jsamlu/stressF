import React from 'react';
import { Link } from 'react-router-dom';

function S_header() {
  return (
    <div className='flex justify-center'>
      <header className=' bg-transparent text-white bg-opacity-30 lg:pr-[50px] pr-[50px] lg:pl-[50px] pl-[50px] flex fixed top-2 w-[98vw] z-10 h-[100px] justify-between items-center'>
        <Link to="/" className=" text-3xl flex-1 font-thin">Stress</Link>
        <nav className='items-center  mr-0 pr-7 pl-7 text-2xl hidden lg:flex justify-end transform ease-in-out gap-10'>
          
          <Link to="/test" className=" hover:text-yellow-400">Test</Link>
          <Link to="/resources" className=" hover:text-yellow-400">Resources</Link>
          <Link to="/activities" className=" hover:text-yellow-400">Activities</Link>
        </nav>
        <login className="justify-end text-2xl">
          <Link to="/login-page">Login  </Link>
        </login>
      </header>
    </div>
  );
}

export default S_header;

