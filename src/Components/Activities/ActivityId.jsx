import { useParams } from "react-router-dom";
import MedList from "./MedList";
import Sfooter from "../Sfooter";
import S_header from "../S_header";

export const ActivityId = () => {
    const { id } = useParams();
    const Act = MedList.find((Act) => Act.id == id);
  if (!Act) {
    return <p className="text-center text-red-500">Activity not found</p>;
  }
    return(
        <div>
            <div className="md:hidden"><S_header/></div>
            <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
            <div className="">
                hey
            {Act.name}
            </div>
            <Sfooter/>
        </div>
    );
} 