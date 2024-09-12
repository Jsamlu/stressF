import { Link } from "react-router-dom";

export default function Footer (){
    const Flinks =[
        {
            href:"/", label:"Home"
        },
        {
            href:"/test", label:"Test"
        },
        {
            href:"/resources", label:"Resources"
        },
        {
            href:"/activities", label:"Activities"
        },
        {
            href:"/counselling", label:"Counselling"
        },
        {
            href:"/about_us", label:"About us"
        },
        {
            href:"/community", label:"Community"
        },
        {
            href:"/journal", label:"Journal"
        },
        {
            href:"/games", label:"Games"
        },
    ];

 return <div className=" bg-indigo-950">
        {/* quick links */}
        <hr className="p-1 bg-indigo-300"/>
        <div className="md:ml-[300px] p-5 text-indigo-200 font-semibold flex flex-col"> 
            {Flinks.map(FL =>{
                return <Link to={FL.href}>{FL.label}</Link>
            })}
        </div>
    </div>
}

// <Route path="/" element={<Home/>} />
//           <Route path="/test" element={</>} />
//           <Route path="/forum" element={<Forum/>} />
//           <Route path="/resources" element={<Resources/>} />
//           <Route path="/activities" element={<Activities/>} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/community" element={<Community/>} />
//           <Route path="/journal" element={<Journal/>} />
//           <Route path="/about_us" element={<Aboutus/>} />
//           <Route path="/games" element={<Games/>} />
//           <Route path="/counselling" element={<Counselling/>} />