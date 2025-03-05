import Hero from "./Hero.jsx";
import React, { useState, useEffect } from "react";

import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Aim from "./Aim.jsx";
// import H_scroll from "./H_scroll.jsx";

import Feature_List from "./Feature_List.jsx";
import Report from "./Reports.jsx";
import { useNavigate } from "react-router-dom";

//animation
import Reveal from "../Animation/Reveal.jsx";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const nav = useNavigate();

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
    <div className=" min-h-screen bg-gradient-to-b from-sky-200 via-sky-600 to-green-500">
      <Hero></Hero>
      <hr className="p-1 bg-white" />

      <div
        className={`${
          showHeader
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-[300px]"
        } md:flex hidden fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform`}
      >
        <Header />
      </div>
      <div
        className={` ${
          showHeader ? "md:ms-[17%]" : " ms-0"
        }   md:px-15 sm:px-20  px-10 lg:px-20 py-10  w-[100%] mx-auto transition-all duration-500 ease-in-out overflow-hidden `}
      >
        <Reveal>
        <Aim />
        </Reveal>
      </div>

      <hr className="hidden md:block p-1 bg-white" />

      <div
        className={` ${
          showHeader ? "md:ms-[17%]" : " ms-0"
        } pt-10 mx-auto transition-all duration-700 ease-in-out overflow-hidden md:block hidden `}
      >
        <div className="">
          <h1 className="pb-10 mx-[45%] text-3xl font-semibold text-sky-100 underline underline-offset-[10px] decoration-2">
            Features
          </h1>
        </div>

        <div className=" max-w-[75%] grid grid-cols-3 gap-y-5 ml-[80px] ">
          {/* <H_scroll list={Feature_List} /> */}
          {Feature_List.map((fl) => {
            return (
              <Reveal>
                <div
                  className=" h-[250px] w-[300px] bg-gradient-to-br from-sky-300 via-blue-300 to-transparent flex flex-col rounded-3xl transform hover:scale-[95%]  transition-all duration-500"
                  onClick={() => {
                    nav(fl.link);
                  }}
                >
                  <div>
                    <div className="rounded-xl  flex relative object-cover h-[180px] w-[300px] mx-auto transform hover:scale-[95%] scale-90 transition-all duration-500">
                      <img
                        src={fl.image}
                        alt="qna.jpg"
                        className="h-full w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <p className="text-center align-bottom text-white text-xl font-sans font-semibold">
                    {fl.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div
          loading="lazy"
          className="md:w-[100%] mt-[16px] pb-0 mb-0 pt-20 flex justify-center"
        >
          <Report />
        </div>
      </div>
      <Footer />
    </div>
  );
}
