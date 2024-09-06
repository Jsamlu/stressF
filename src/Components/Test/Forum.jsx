import QList from "./QList";

// import Header from "../Header";
// import Footer from "../Footer";
import Block from "./Block";

export default function Forum(){
    return(
        <div className="min-h-screen">
            {/* <Header></Header> */}
            <Block/>
            <div className="pl-[100px] pr-[100px]">
                {
                    QList.map(QList => {
                    <div className="mt-10 p-10 bg-purple-300 rounded-xl">
                        <p>{QList.id}{QList.question}</p>
                        <div className="pl-10 mt-5">
                            <ul className="">
                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl" ><input type="radio" name="ans" value="1" /><span>{QList.an1}</span></li>
                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl"><input type="radio" name="ans" value="2" /><span>{QList.an1}</span></li>
                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl"><input type="radio" name="ans" value="3" /><span>{QList.an1}</span></li>
                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl"><input type="radio" name="ans" value="4" /><span>{QList.an1}</span></li>
                                <li className="flex gap-5 mt-3 p-3 bg-purple-100 rounded-xl"><input type="radio" name="ans" value="5" /><span>{QList.an1}</span></li>       
        
                            </ul>
                        </div>
                    </div>

                    }

                    )
                }
                    
            </div>
            {/* <Footer/> */}
        </div>
    );
}





