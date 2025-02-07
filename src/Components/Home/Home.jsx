import Hero from "./Hero.jsx";
import React, { useState, useEffect } from "react";

import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Aim from "./Aim.jsx";
import H_scroll from "./H_scroll.jsx";

import Feature_List from "./Feature_List.jsx";
// import { Report } from "../Report/Report.jsx";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5; // 80% of the viewport height
      setShowHeader(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" min-h-screen bg-sky-200">
      <Hero></Hero>
      <hr className="p-1 bg-white" />

      <div
        className={`${
          showHeader
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-[300px]"
        } md:flex hidden fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out transform`}
      >
        <Header />
      </div>
      <div
        className={` ${
          showHeader ? "md:ms-[17%]" : " ms-0"
        }   md:px-15 sm:px-20  px-10 lg:px-20 py-10  w-[100%] mx-auto transition-all duration-700 ease-in-out overflow-hidden `}
      >
        <Aim />
      </div>

      <hr className="hidden md:block p-1 bg-white" />

      <div
        className={` ${
          showHeader ? "md:ms-[17%]" : " ms-0"
        } py-10 mx-auto transition-all duration-700 ease-in-out overflow-hidden md:block hidden `}
      >
        <div className="">
          <h1 className="pb-10 mx-[45%] text-3xl font-semibold text-sky-800 underline underline-offset-[10px] decoration-2">Features</h1>
        </div>
        <div className=" py-5">
          <H_scroll list={Feature_List} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
