import S_header from "../S_header";
import Sfooter from "../Sfooter";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeActivity } from "../Store/Features/Activitiy/actSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // const Acts = useSelector((state) => state.ActivityState.Acts) || [];
  const Acts = useSelector((state) => state.ActivityState.Acts)?? ["Looking For Activities Visit Acitivity Page"];
  const nav = useNavigate()
  const dispatch = useDispatch()
  console.log(Acts.length)
  return (
    <>
      <div className="">
        <div className="md:hidden min-h-screen">
          <S_header />
        </div>

        <div className="w-full min-h-screen bg-sky-200 py-10">
          <div className="md:h-[40%] w-[95%] px-5 rounded-xl mx-auto bg-gray-100 shadow-lg">
            <div className="flex gap-x-5 w-full h-full ">
              <div className=" rounded-full w-[19%] h-[60%] self-center ">
                <img
                  src="/assets/qna.jpg"
                  alt=""
                  className="overflow-hidden object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex-[100%] rounded-xl w-full my-auto">
                <h1 className="text-3xl text-sky-800 font-semibold">
                  Jayesh Samlu
                </h1>
                <p className="text-lg font-thin">@jayeshsamlu</p>
                <p>Just a guy who likes to draw And I own a cat😾</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-[95%] min-h-[50vh] mx-auto my-10 rounded-xl shadow-lg px-4 py-5 ">
            <div>
              <ul className="flex text-2xl text-sky-800 font-semibold gap-x-5">
                <li>
                  <a
                    href="#"
                    className=" focus:text-sky-400 transition-all duration-300 transform hover:-translate-x-2 underline underline-offset-0 focus:underline-offset-[10px] focus:decoration-sky-400 decoration-transparent"
                  >
                    Activity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" focus:text-sky-400 transition-all duration-300 transform hover:-translate-x-2 underline underline-offset-0 focus:underline-offset-[10px] focus:decoration-sky-400 decoration-transparent"
                  >
                    Doctors
                  </a>
                </li>
              </ul>
            </div>
            {/* for showing elements of activity */}
            
            <div className="grid grid-cols-3 gap-4 my-5">
              {Acts.length === 0?<button onClick={()=>nav("/activities")} className="font-medium text-xl justify-self-start">ADD Actvities</button>: 
                Acts.map((act) => {
                  return (
                    
                      <div className="flex gap-x-5 bg-white shadow-xl rounded-xl p-2">
                        <div className=" w-[30%] h-[100px] overflow-hidden rounded-full">
                          <img src={act.image} alt="" className="w-full h-full" />
                        </div>
                        <div className="grid">
                          <p className="text-xl text-sky-800 font-semibold py-3">
                            {act.name}
                          </p>
                          <button className="text-sm text-red-500 hover:bg-red-500 hover:text-white font-semibold"  onClick={()=>dispatch(removeActivity(act.id))}>remove</button>
                        </div>
                      </div>
                  );
                })
              }
              
              </div>
            
          </div>
        </div>
      </div>
      <Sfooter />
    </>
  );
};

export default Dashboard;
