import S_header from "../S_header";
import Sfooter from "../Sfooter";

const Dashboard = () => {
  return (
    <>
      <div className="">
        <div className="md:hidden min-h-screen">
          <S_header />
        </div>

        <div className="w-full h-screen bg-sky-200 py-10">
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
          <div className="flex flex-col bg-white w-[95%] h-[50vh] mx-auto my-10 rounded-xl shadow-lg px-4 py-5">
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
            <div className="grid grid-cols-3 my-10">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="flex gap-x-5 bg-white shadow-xl rounded-xl p-2">
                  <div className=" w-[30%] h-[100px] overflow-hidden rounded-full">
                    <img
                      src="/assets/med/img4.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xl text-sky-800 font-semibold py-3">
                      Praticing Mindfullness
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 bg-white shadow-xl rounded-xl p-2">
                  <div className=" w-[30%] h-[100px] overflow-hidden rounded-full">
                    <img
                      src="/assets/self/self3.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-xl text-sky-800 font-semibold py-3">
                      Playing Games
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sfooter />
    </>
  );
};

export default Dashboard;
