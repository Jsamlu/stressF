import React from "react";
import { Link } from "react-router-dom";
import Sfooter from "../Sfooter";
import S_header from "../S_header";

// import Footer from "../Footer.jsx"

function Test() {
  return (
    <div className="bg-indigo-200">
      <div className="md:hidden">
        <S_header />
      </div>
      <div className=" md:pt-10 pt-[100px] w-full h-full  ">
        <div className="grid md:grid-cols-3 ">
          <div className="md:col-span-2 bg-white my-10 w-[95%] mx-auto px-[5%] py-[3%] rounded-xl">
            <div>
              <h1 className="text-blue-500 md:text-2xl text-xl mb-5">
                Welcome to D-Stress Take a moment for yourself and let's find
                out how you're really feeling.
              </h1>
              <p className="text-gray-500 md:text-2xl text-xl">
                "Take this quick test to gain
                insights and personalized suggestions to help you manage stress
                better. You’ve got this!
              </p>
            </div>
            <div className="mx-[1%] py-[10%]">
              <Link
                to="/forum"
                className="bg-blue-500 px-2 py-3 md:px-4 md:py-4 rounded-xl text-white  text-lg md:text-2xl"
              >
                Take Test
              </Link>
            </div>
          </div>
          <div className=" bg-white my-10 w-[95%] mx-auto px-[15%] py-[5%] rounded-xl">
            <h1 className="md:text-2xl text-xl text-blue-500">How the test works:</h1>
            <ul className="mt-5 list-decimal flex flex-col gap-4 text-gray-500  lg:text-xl md:2xl  text-xl">
              <li>
                <p className="">

              You’ll answer questions based on your daily activities and how
              you’re feeling.
                </p>
              </li>
              <li>
              <p>

               For each question, you’ll have 5 answer choices
              ranging from "Strongly Disagree" to "Strongly Agree."
              </p>
              </li>
              <li>
              <p>

               Based on your answers, we’ll assess your stress levels and recommend some
              activities tailored just for you!
              </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Sfooter />
    </div>
  );
}

export default Test;

{
  /* <ul className="list-disc pl-8">
  <li>Work Stress</li>
  <li>Relationship Stress</li>
  <li>Health Stress</li>
</ul> */
}
