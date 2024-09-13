import CList from "./CList";
import Sfooter from '../Sfooter';

export default function Counselling() {
  return (
    <div className="bg-indigo-100 w-full">
        <h1 className="pl-10 pt-10 mb-20 text-3xl font-bold text-[#0f444c]">Counselling Services</h1>
    <div className="p-10  pr-5 pl-28 justify-evenly">
      <div className="grid md:grid-cols-2 gap-10">
        {CList.map((CList) => {
          return (
            <div className="grid md:grid-cols-3 gap-5 bg-white rounded-xl w-[500px] h-[250px] p-2 ">
              <div>
                <div className="h-[150px] bg-cover bg-no-repeat rounded-3xl">
                    <img src={CList.image} alt="img" className="rounded-3xl"/>
                </div>
                <div className="h-10 ">
                  <p className="p-1 text-center bg-blue-300 text-lg text-blue-500 font-semibold rounded-xl mt-7 hover:bg-blue-100 transition-all duration-300">
                    visit
                  </p>
                </div>
              </div>
              <div className=" col-span-2 rounded-xl p-2 pt-2">
                <h1 className="font-semibold text-xl text-sky-900">
                  {CList.name}
                </h1>
                <p className="m-1 text-lg font-thin">{CList.exp}</p>
                <p className="m-1 text-sm text-sky-800">{CList.addr}</p>
                <p className="m-1 text-sm font-medium text-sky-800">₹ {CList.fees} fees</p>
                <div className="flex gap-1 mt-2 justify-between">
                  <div className="rounded-xl h-[30px] w-[50px] bg-green-400 text-white text-center ">
                    <p>91%</p>
                  </div>
                  <div className=" grid gap-0.5">
                    <p className=" p-1 text-center border-2 border-indigo-600 bg-white text-sm text-blue-400 font-medium rounded-xl h-[40px] w-[150px]">
                      Available today
                    </p>
                    <p className=" p-1 text-center bg-blue-500 text-white font-semibold rounded-xl h-[40px] w-[150px] hover:bg-blue-300 hover:text-blue-500 transition-all duration-300">
                      Book meeting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Sfooter/>
    </div>
  );
}




