import React from 'react';
import { Link } from 'react-router-dom';
import { LuCircleDashed } from "react-icons/lu";

function S_header() {
  return (
    <div className='flex justify-center'>
      <header className=' bg-transparent text-white bg-opacity-30 lg:pr-[50px] pr-[50px] lg:pl-[50px] pl-[50px] flex absolute top-2 w-[98vw] z-50 h-[100px] justify-between items-center'>
        <div className='flex items-center gap-x-5'>
        <Link to="/" className=" w-[200px]"><img src="/assets2/Logo.png" alt="logo" /></Link>
        <Link className='text-3xl'><LuCircleDashed /></Link>
        </div>
        <nav className='items-center  mr-0 pr-7 pl-7 text-2xl hidden lg:flex justify-end transform ease-in-out gap-10'>
          <Link to="/test" className=" hover:text-yellow-400">Test</Link>
          <Link to="/resources" className=" hover:text-yellow-400">Resources</Link>
          <Link to="/activities" className=" hover:text-yellow-400">Activities</Link>
          <Link to="/login">Login </Link>
        </nav>
      </header>
    </div>
  );
}

export default S_header;

