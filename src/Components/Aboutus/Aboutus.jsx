import S_header from "../S_header";
import Faq from "./Faq";
import Sfooter from "../Sfooter";
import { Link } from "react-router-dom";

export default function About_us() {
  return (
    <>
      <div className="md:hidden">
        <S_header />
      </div>
      <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
            About D-Stress
          </h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Welcome to <span className="font-semibold">D-Stress</span>, your
            personal wellbeing companion designed for students. We understand
            how overwhelming student life can be, with exams, assignments, and
            deadlines causing stress and anxiety. That's why we created D-Stress
            to help you find balance, calm, and a moment of peace during your
            academic journey.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-center">
            At <span className="font-semibold">D-Stress</span>, we believe that
            mental health and wellbeing should be a priority. Our platform
            provides an easy-to-use questionnaire that analyzes your stress
            levels and offers personalized activity suggestions to help you
            de-stress. From mindfulness exercises to light physical activities,
            we have something for everyone.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4 text-center">
            We aim to create a positive impact on student lives by providing
            tools to manage stress effectively. Whether you are dealing with
            exam anxiety or feeling overwhelmed by academic pressure, D-Stress
            is here to support you on your journey to a healthier, more balanced
            life.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-700 text-center">
            We are a team of three undergraduate students passionate about
            student mental health and wellbeing. Our goal is to create a
            platform that helps our fellow students manage stress and lead
            happier, more productive lives.
          </p>
        </div>
      </div>
      <hr className="border-0 h-[2px] bg-gray-300"></hr>
      <div className="px-[5%] py-[3%]">
        <Faq />
      </div>

      <hr className="border-0 h-[2px] bg-gray-300"></hr>
      <div className="min-w-full min-h-[80vh] flex bg-gradient-to-br from-sky-200 via-blue-400 to-pink-500 px-[100px] items-center justify-between">
        <div>
          <p className="text-2xl font-semibold text-sky-50">Let us Know</p>
          <p className="text-5xl font-semibold ml-[30px] text-sky-50">How you feel</p>
          <Link to={"/feedbackform"} 
            className="block font-bold text-xl ml-[300px] mx-10 text-sky-300 hover:text-blue-600 transition-all duration-300"
          >Feedback</Link>
        </div>
        <div className="md:w-[400px]">
          <img src="/assets2/people/FB.png" alt=""Feedbackimg />
        </div>
      </div>
      <Sfooter />
    </>
  );
}
