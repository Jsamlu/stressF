import { useParams } from "react-router-dom";
// import MedList from "./MedList";
import ACT from "./ACT";
import Sfooter from "../Sfooter";
import S_header from "../S_header";

export const ActivityId = () => {
    const { id } = useParams();
    const Act = ACT.find((Act) => Act.id == id);
  if (!Act) {
    return <p className="text-center text-red-500">Activity not found</p>;
  }
    return(
        <div>
            <div className="md:hidden"><S_header/></div>
            <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
            <div className="min-h-screen bg-sky-100">
                <div className="flex relative">
                  <img src={Act.image} alt="" className="w-full h-[45vh] object-cover"/>
                  <div className="absolute">
                    <div className="absolute bg-black w-full h-[45vh] opacity-100"></div>
                    <p className="absolute text-white text-2xl">{Act.name}</p>
                  </div>
                </div>
            </div>
            <Sfooter/>
        </div>
    );
} 