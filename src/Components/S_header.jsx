import React from 'react';
import { Link } from 'react-router-dom';
import { LuCircleDashed } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import { useState } from 'react';
import { MdExitToApp } from "react-icons/md";

function S_header() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const[GameON, setGameON] = useState(false);
  const togglegame = () => {
    setGameON(!GameON);
  };

  return (
    <div>
      <header className= {`text-white lg:pr-[50px] lg:pl-[50px] px-10 flex absolute top-0 w-screen z-20 h-[100px] items-center ${showNav?'opacity-0' : 'opacity-100'} `}>
        <div className='flex items-center gap-x-5 flex-1'>
        <Link to="/" className=" md:w-[200px] w-[150px]"><img src="/assets2/Logo.png" alt="logo" /></Link>
        <button className='text-3xl w-[50px] hover:bg-transparent animate-bounce' onClick={togglegame}>{GameON ? <MdExitToApp /> :<LuCircleDashed />}</button>
        </div>
        <nav className='items-center  mr-0 pr-7 pl-7 text-2xl hidden lg:flex justify-end transform ease-in-out gap-10'>
          <Link to="/test" className=" hover:text-yellow-400">Test</Link>
          <Link to="/resources" className=" hover:text-yellow-400">Resources</Link>
          <Link to="/activities" className=" hover:text-yellow-400">Activities</Link>
        </nav>
        <div className='md:hidden'>
          {/* mobile nav */}
          <button onClick={toggleNav} className='text-2xl hover:bg-transparent'>{showNav ? <FaTimes /> : <FaBars />}</button>
        </div>
        <div>
          {/* login options */}
          <Link to="/login" className=" hover:text-sky-700 text-5xl transition-all duration-75"><FaUserCircle /></Link>
        </div>
      </header>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${showNav ? 'min-h-full opacity-100' : 'max-h-0 opacity-0'
          } w-screen text-center bg-teal-600 rounded-md text-white px-10 absolute top-0 right-0 z-30`}
      >
        <button onClick={toggleNav}
        className='flex justify-end h-[100px] items-center text-2xl hover:bg-transparent'
        >{showNav ? <FaTimes /> : <FaBars />}</button>
        <ul className="flex flex-col space-y-10 text-2xl font-semibold">
          <li>
            <button onClick={() => { navigate('/'); setShowNav(false); }}>Home</button>
          </li>
          {/* test resources activities counselling about us */}
          <li>
            <button onClick={() => { navigate('/test'); setShowNav(false); }}>Test</button>
          </li>
          <li>
            <button onClick={() => { navigate('/resources'); setShowNav(false); }}>Resources</button>
          </li>
          <li>
            <button onClick={() => { navigate('/activities'); setShowNav(false); }}>Activities</button>
          </li>
          <li>
            <button onClick={() => { navigate('/counselling'); setShowNav(false); }}>Counselling</button>
          </li>
          <li>
            <button onClick={() => { navigate('/about_us'); setShowNav(false); }}>About us</button>
          </li>

        </ul>
      </div>
      <div className={`${GameON ? 'z-50 absolute' : '-z-50 hidden'
          } w-screen text-center  rounded-md text-white absolute top-0 right-0 z-40 `}>
        <button onClick={togglegame} className=" absolute top-0 left-[20px] z-50 text-5xl  w-[100px] hover:bg-transparent transition-all duration-500" >{GameON ?<MdExitToApp />:  <LuCircleDashed />}</button>
        {/* <Games/> */}
      </div>
      
    </div>
  );
}

export default S_header;

