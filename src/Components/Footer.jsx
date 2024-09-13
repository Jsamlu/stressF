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

 return <div className=" bg-indigo-950 relative bottom-0">
        {/* quick links */}
        <hr className="p-1 bg-indigo-300"/>
        <div className="md:ml-[250px]  p-5 text-indigo-200 font-semibold grid md:grid-row-3 md:grid-cols-3 w-screen"> 
            {Flinks.map(FL =>{
                return <Link to={FL.href}>{FL.label}</Link>
            })}
            
        </div>
        <hr className="text-indigo-400 " />
        <div className="md:ml-[250px] text-indigo-300">
            © all rights are reserverd by D-Stress
        </div>
    </div>
}

