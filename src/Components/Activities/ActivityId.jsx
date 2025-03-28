import { useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

// import MedList from "./MedList";
// import ACT from "./ACT";
import ACT2 from "./ACT2";
import Sfooter from "../Sfooter";
import S_header from "../S_header";

export const ActivityId = () => {
  const { id } = useParams();
  const Act = ACT2.find((Act) => Act.id == id);
  if (!Act) {
    return <p className="text-center text-red-500">Activity not found</p>;
  }
  return (
    <div>
      <div className="md:hidden">
        <S_header />
      </div>
      <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
      <div className="min-h-screen bg-sky-100">
        <div className=" flex flex-col relative">
          <img
            src={Act.image}
            alt=""
            className="z-0 absolute w-full h-[45vh] object-cover"
          />
          <button className="absolute right-10 top-10 text-2xl px-3 py-2 bg-blue-500 hover:bg-white border-2 border-transparent hover:font-semibold font-light hover:scale-95  rounded-full text-center text-white hover:text-blue-500 w-[100px] transition-all duration-300">
            {" "}
            ADD +
          </button>
          <div className=" flex flex-col mt-20 ml-10 z-20">
            <p className=" text-nowrap text-white text-5xl flex to_r">
              <span className="text-5xl">
                <MdKeyboardArrowRight />
              </span>
              {Act.name}
            </p>
            <p className=" text-nowrap text-white text-5xl flex to_r">
              <span className="text-5xl">
                <MdKeyboardArrowRight />
              </span>
              {Act.ctg}
            </p>
            <p className=" text-nowrap text-white text-5xl flex to_r">
              <span className="text-5xl">
                <MdKeyboardArrowRight />
              </span>
              {Act.lev}
            </p>
          </div>
          <div className="z-20 flex flex-col gap-y-5 w-[90%] mx-auto h-full text-left bg-white my-20 rounded-2xl px-10 py-10 ">
            <p className="text-2xl font-serif  text-blue-700">{Act.desc}</p>
            <p className="text-xl text-gray-500 font-serif">{Act.rev}</p>
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <p className="text-xl font-serif text-blue-700">Steps :-</p>
                {Act.howTO.map((h, i) => {
                  return (
                    <p className="text-lg font-serif text-gray-500">
                      {i + ")"}&nbsp;&nbsp;{h}
                    </p>
                  );
                })}
              </div>
              <div className="grid">
              <iframe className="w-[60%] mx-auto h-[50%] my-auto rounded-3xl" src={"https://www.youtube.com/embed/"+Act.v_emd} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <div className="flex flex-col">
                {Act.link.map((l)=>{
                  return <a href={l}>{l}</a>
                })}
            </div>
          </div>
        </div>
      </div>
      <Sfooter />
    </div>
  );
};
