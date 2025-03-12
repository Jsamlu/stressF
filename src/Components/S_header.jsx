import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

import { BsJournalBookmarkFill } from "react-icons/bs";
// import { TbUsersGroup } from "react-icons/tb";
function S_header() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const [GameON, setGameON] = useState(false);
  const togglegame = () => {
    setGameON(!GameON);
  };

  return (
    <div>
      <header
        className={`text-white lg:pr-[50px] lg:pl-[50px] px-10 flex absolute top-0 w-screen z-20 h-[100px] items-center ${
          showNav ? "opacity-0" : "opacity-100"
        } `}
      >
        <div className="flex items-center gap-x-5 flex-1">
          <Link to="/" className=" md:w-[200px] w-[150px]">
            <img src="/assets2/newLogoW.png" alt="logo" />
          </Link>
        </div>
        <nav className="items-center  mr-0 pr-7 pl-7 text-2xl hidden lg:flex justify-end transform ease-in-out gap-10 font-semibold">
          <Link
            to="/test"
            className="  hover:text-cyan-400 underline underline-offset-0 hover:underline-offset-[10px] decoration-transparent hover:decoration-cyan-400 transition-all duration-300"
          >
            Test
          </Link>
          <Link
            to="/resources"
            className="  hover:text-cyan-400 underline underline-offset-0 hover:underline-offset-[10px] decoration-transparent hover:decoration-cyan-400 transition-all duration-300"
          >
            Resources
          </Link>
          <Link
            to="/activities"
            className="  hover:text-cyan-400 underline underline-offset-0 hover:underline-offset-[10px] decoration-transparent hover:decoration-cyan-400 transition-all duration-300"
          >
            Activities
          </Link>
          <Link
            to="/counselling"
            className="  hover:text-cyan-400 underline underline-offset-0 hover:underline-offset-[10px] decoration-transparent hover:decoration-cyan-400 transition-all duration-300"
          >
            Counselling
          </Link>
          <Link
            to="/community"
            className="  hover:text-cyan-400 underline underline-offset-0 hover:underline-offset-[10px] decoration-transparent hover:decoration-cyan-400 transition-all duration-300"
          >
            Community
          </Link>
          <Link
            to="/maingame"
            className="  hover:text-cyan-400 underline underline-offset-0 hover:underline-offset-[10px] decoration-transparent hover:decoration-sky-700 transition-all duration-300"
          >
            Games
          </Link>
          
        </nav>
        <div className="md:hidden px-5">
          {/* mobile nav */}
          <button
            onClick={toggleNav}
            className="md:text-5xl text-2xl hover:bg-transparent transition-all duration-300"
          >
            {showNav ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="flex gap-5 text-2xl md:text-5xl">
          {/* community page */}
          {/* <Link
            to="/community"
            className=" hover:text-sky-700 transition-all duration-75"
          >
            <TbUsersGroup />
          </Link> */}
          {/* Journal page */}
          <Link
            to="/journal"
            className=" hover:text-sky-700 transition-all duration-300"
          >
            <BsJournalBookmarkFill />
          </Link>
          {/* login options */}
          <Link
            to="/profile"
            className=" hover:text-sky-700 transition-all duration-300"
          >
            <FaUserCircle />
          </Link>
        </div>
      </header>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          showNav ? "min-h-full opacity-100" : "max-h-0 opacity-0"
        } w-screen text-center bg-sky-600 rounded-md text-white px-10 absolute top-0 right-0 z-30`}
      >
        <button
          onClick={toggleNav}
          className="flex justify-end h-[100px] items-center text-2xl hover:bg-transparent transition-all duration-300"
        >
          {showNav ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="flex flex-col space-y-10 text-2xl font-semibold">
          <li>
            <button
              onClick={() => {
                navigate("/");
                setShowNav(false);
              }}
            >
              Home
            </button>
          </li>
          {/* test resources activities counselling about us */}
          <li>
            <button
              onClick={() => {
                navigate("/test");
                setShowNav(false);
              }}
            >
              Test
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/resources");
                setShowNav(false);
              }}
            >
              Resources
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/activities");
                setShowNav(false);
              }}
            >
              Activities
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/counselling");
                setShowNav(false);
              }}
            >
              Professionals
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/Community");
                setShowNav(false);
              }}
            >
              Community
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/maingame");
                setShowNav(false);
              }}
            >
              Games
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/about_us");
                setShowNav(false);
              }}
            >
              About us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default S_header;
