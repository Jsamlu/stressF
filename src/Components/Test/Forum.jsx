import { Link } from "react-router-dom";
import QList from "./QList";
import Sfooter from '../Sfooter';
import S_header from "../S_header";

export default function Forum() {
  return (
    <div className="min-h-screen bg-indigo-200 ">
      <div className="md:hidden"><S_header/></div>
        <div className="p-10 md:pt-3  pt-[80px]">
        <div className=" bg-white my-10 w-[95%] mx-auto px-[15%] py-[5%] rounded-xl">
            <h1 className="md:text-2xl text-lg font-bold text-blue-500">How the test works:</h1>
            <ul className="mt-5 list-decimal flex flex-col gap-4 text-gray-500  lg:text-xl md:2xl  text-lg">
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
      <div className=" px-[15%] py-[5%]">
        
        {QList.map((QList) => {
          return (
            <div className="mb-5 p-10 bg-white rounded-xl">
              <form>
              <p className="md:text-2xl text-sm text-blue-500">
                {QList.id}.&nbsp; 
                {QList.question}
              </p>
              <div className="p-4 mt-5">
                <ul className="flex flex-col gap-y-3">
                  <li className="flex p-3 bg-sky-200 rounded-xl">
                    <input className="w-[20px] h-[20px] self-center mr-5" type="radio" name="ans" value="1"/>
                    <p className="md:text-lg text-xs"> 
                        {QList.an1}
                    </p>
                  </li>

                  <li className="flex p-3 bg-sky-200 rounded-xl">
                    <input className="w-[20px] h-[20px] self-center mr-5" type="radio" name="ans" value="1" ></input>
                    <p className="md:text-lg text-xs"> 
                        {QList.an2}
                    </p>
                  </li>

                  <li className="flex p-3 bg-sky-200 rounded-xl">
                    <input className="w-[20px] h-[20px] self-center mr-5" type="radio" name="ans" value="1" ></input>
                    <p className="md:text-lg text-xs">  
                        {QList.an3}
                    </p>
                  </li>

                  <li className="flex p-3 bg-sky-200 rounded-xl">
                    <input className="w-[20px] h-[20px] self-center mr-5" type="radio" name="ans" value="1" ></input>
                    <p className="md:text-lg text-xs"> 
                        {QList.an4}
                    </p>
                  </li>

                  <li className="flex p-3 bg-sky-200 rounded-xl">
                    <input className="w-[20px] h-[20px] self-center mr-5" type="radio" name="ans" value="1" ></input>
                    <p className="md:text-lg text-xs">  
                        {QList.an5}
                    </p>
                  </li>

                </ul>
              </div>
              </form>
            </div>
          );
        })}

        <div className="mt-5 mr-5 mb-5">
          <Link
            to="/test"
            className="p-2 hover:bg-sky-500 bg-sky-600 text-white rounded-xl text-2xl"
          >
            End test
          </Link>
        </div>
      </div>
      <Sfooter/>
    </div>
  );
}
