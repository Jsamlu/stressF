import React from "react";
import { useParams } from "react-router-dom";
import CList from "./CList";
import Sfooter from "../Sfooter";
import S_header from "../S_header";

export default function Prof_page() {
  const { id } = useParams();
  const prof = CList.find((prof) => prof.id == id);
  if (!prof) {
    return <p className="text-center text-red-500">prof not found</p>;
  }

  return (
    <div>
      <div className="md:hidden"><S_header/></div>
      <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
      <div className="px-10 py-10 bg-sky-200 min-h-screen">
        <div className="p-5 rounded-xl bg-white ">
          {/* desktop display */}
          <div className="grid grid-cols-4 w-[100%] h-[100%]">
            {/* image & rating*/}
            <div className="flex flex-col col-span-1 mx-auto">
              {/* img */}
              <div className=" object-cover overflow-hidden rounded-3xl">
                <img src={prof.image} alt={prof.name} className="rounded-3xl" />
              </div>
              <div className="flex justify-between my-5 rounded-full">
                <p className= {`${!prof.rating?'hidden':'px-3 py-2 rounded-full bg-green-500'}`}>
                  {prof.rating} Sucess
                </p>
                <p className={`${!prof.perc?'hidden': 'px-3 py-2 rounded-full bg-green-200'}`}>
                  {prof.perc}
                </p>
              </div>
            </div>
            {/* info */}
            <div className=" col-span-3">
              <p className="py-1 text-3xl font-semibold text-sky-700">
                {prof.name}
              </p>
              <p className="py-1 text-xl font-thin text-sky-800">
                {prof.degree}
              </p>
              <p className="py-1 text-lg text-sky-800">{prof.exp}</p>
              <div className="py-1 flex space-x-2">
                {prof.title.map((t) => {
                  return (
                    <p className="px-2 py-2 bg-sky-100 rounded-full border-2 border-blue-600 text-blue-600 text-sm">
                      {t}
                    </p>
                  );
                })}
              </div>
              <p className="py-1 text-xl text-sky-600 font-bold">
                <span className="font-light text-sky-800">Fees:</span> ₹{" "}
                {prof.fees}
              </p>
              <p
                className={`text-xl font-semibold py-2  ${
                  prof.availability === "available"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {prof.availability === "available"
                  ? "Available"
                  : "Unavailable"}
              </p>
            </div>
            {/* desc */}
            <div className="px-10 pt-4 bg-gradient-to-br from-sky-100 to-sky-300 col-span-4 rounded-2xl">
                <h1 className="font-serif text-3xl text-sky-800">Description:</h1>
              <p className="pt-5 pb-10 font-serif text-2xl text-sky-800">{prof.desc}</p>
            </div>
          </div>
        </div>
      </div>

      <Sfooter />
    </div>
  );
}
