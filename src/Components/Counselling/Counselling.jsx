import CList from "./CList";
import Sfooter from "../Sfooter";
import SearchBar from "../SearchBar";

export default function Counselling() {
  return (
    <div className="bg-indigo-100 w-full">
      <div className="flex justify-between">
      <h1 className="pl-10 pt-10 mb-5 text-3xl font-bold text-[#0f444c]">
        Counselling Services
      </h1>
      <div className="flex justify-end px-20 mb-10"><SearchBar/></div>
      </div>
      <div className="p-10  pr-5 pl-28 justify-evenly">
        <div className="grid md:grid-cols-2 gap-y-10">

          {CList.map((CList) => {
            return (
              <div className=" max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <img
                  className="mx-6 my-2 w-22 h-22 object-cover rounded-full"
                  src={CList.image}
                  alt={CList.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-blue-600">
                    {CList.name}
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Service: </span>
                    {CList.title}
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Experience: </span>
                    {CList.exp} years
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Address: </span>
                    {CList.addr}
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Fees: </span>₹
                    {CList.fees}
                  </p>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-700 text-sm font-semibold mr-2">
                      Rating:
                    </span>
                    <div className="flex items-center">
                      {[...Array(CList.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927C9.32 2.304 10.681 2.304 10.951 2.927l1.367 3.324 3.622.332c.737.068 1.035.955.495 1.404l-2.78 2.392.858 3.549c.159.661-.533 1.205-1.093.81L10 13.187l-2.93 1.551c-.561.396-1.252-.149-1.093-.81l.858-3.549-2.78-2.392c-.54-.449-.242-1.336.495-1.404l3.622-.332 1.367-3.324z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      CList.availability === "available"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {CList.availability === "available"
                      ? "Available"
                      : "Unavailable"}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <button
                    className={`${
                      CList.availability === "available"
                        ? "bg-blue-500 hover:bg-blue-700"
                        : "bg-gray-500 cursor-not-allowed"
                    } text-white font-bold py-2 px-4 rounded focus:outline-none`}
                    disabled={CList.availability !== "available"}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
              // <div className="grid md:grid-cols-3 gap-5 bg-white rounded-xl w-[500px] h-[250px] p-2 ">
              //   <div>
              //     <div className="h-[150px] bg-cover bg-no-repeat rounded-3xl">
              //         <img src={CList.image} alt="img" className="rounded-3xl"/>
              //     </div>
              //     <div className="h-10 ">
              //       <p className="p-1 text-center bg-blue-300 text-lg text-blue-500 font-semibold rounded-xl mt-7 hover:bg-blue-100 transition-all duration-300">
              //         visit
              //       </p>
              //     </div>
              //   </div>
              //   <div className=" col-span-2 rounded-xl p-2 pt-2">
              //     <h1 className="font-semibold text-xl text-sky-900">
              //       {CList.name}
              //     </h1>
              //     <p className="m-1 text-lg font-thin">{CList.exp}</p>
              //     <p className="m-1 text-sm text-sky-800">{CList.addr}</p>
              //     <p className="m-1 text-sm font-medium text-sky-800">₹ {CList.fees} fees</p>
              //     <div className="flex gap-1 mt-2 justify-between">
              //       <div className="rounded-xl h-[30px] w-[50px] bg-green-400 text-white text-center ">
              //         <p>91%</p>
              //       </div>
              //       <div className=" grid gap-0.5">
              //         <p className=" p-1 text-center border-2 border-indigo-600 bg-white text-sm text-blue-400 font-medium rounded-xl h-[40px] w-[150px]">
              //           Available today
              //         </p>
              //         <p className=" p-1 text-center bg-blue-500 text-white font-semibold rounded-xl h-[40px] w-[150px] hover:bg-blue-300 hover:text-blue-500 transition-all duration-300">
              //           Book meeting
              //         </p>
              //       </div>
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
      <Sfooter />
    </div>
  );
}
