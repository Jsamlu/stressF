import { Link } from "react-router-dom";
import QList from "./QList";
import Sfooter from '../Sfooter';
import S_header from "../S_header";

export default function Forum() {
  return (
    <div className="min-h-screen bg-indigo-200 ">
      <div className="md:hidden"><S_header/></div>
      <div className="p-10 pl-[100px] pr-[100px]">
        {QList.map((QList) => {
          return (
            <div className="mb-5 p-10 bg-white rounded-xl">
              <form action="">
              <p >
                {QList.id}.&nbsp; 
                {QList.question}
              </p>
              <div className="pl-10 mt-5">
                <ul className="">
                  <li className="flex  mt-3 p-3 bg-purple-100 rounded-xl">
                    <input className="w-[15px] h-[15px] mr-5" type="radio" name="ans" value="1"/>
                    <span> 
                        {QList.an1}
                    </span>
                  </li>

                  <li className="flex  mt-3 p-3 bg-purple-100 rounded-xl">
                    <input className="w-[15px] h-[15px] mr-5" type="radio" name="ans" value="1" ></input>
                    <span> 
                        {QList.an2}
                    </span>
                  </li>

                  <li className="flex  mt-3 p-3 bg-purple-100 rounded-xl">
                    <input className="w-[15px] h-[15px] mr-5" type="radio" name="ans" value="1" ></input>
                    <span> 
                        {QList.an3}
                    </span>
                  </li>

                  <li className="flex  mt-3 p-3 bg-purple-100 rounded-xl">
                    <input className="w-[15px] h-[15px] mr-5" type="radio" name="ans" value="1" ></input>
                    <span> 
                        {QList.an4}
                    </span>
                  </li>

                  <li className="flex  mt-3 p-3 bg-purple-100 rounded-xl">
                    <input className="w-[15px] h-[15px] mr-5" type="radio" name="ans" value="1" ></input>
                    <span> 
                        {QList.an5}
                    </span>
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
