import { Link } from "react-router-dom";
import QList from "./QList";




export default function Forum(){
    return(
        <div className="min-h-screen">
           
            
            <div className="pl-[100px] pr-[100px]">
                {
                    QList.map((QList) => {
                        return(
                            <div className="mt-10 p-10 bg-purple-300 rounded-xl">
                        <p>{QList.id}{QList.question}</p>
                        <div className="pl-10 mt-5">
                            <ul className="">
                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl" ><input type="radio" name="ans"        value="1" />
                                <span>{QList.an1}</span>
                                </li>

                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl" ><input type="radio" name="ans"        value="1" />
                                <span>{QList.an2}</span>
                                </li>

                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl" ><input type="radio" name="ans"        value="1" />
                                <span>{QList.an3}</span>
                                </li>

                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl" ><input type="radio" name="ans"        value="1" />
                                <span>{QList.an4}</span>
                                </li>

                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl" ><input type="radio" name="ans"        value="1" />
                                <span>{QList.an5}</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                        );
                    }

                    )
                }
                    
                        <div className="mt-5 mr-5 mb-5">
                            <Link to='/test' className="p-2 bg-gradient-to-br from-blue-200 to-purple-300 rounded-xl text-2xl">End test</Link>
                        </div>
            </div>
            
        </div>
    );
}





