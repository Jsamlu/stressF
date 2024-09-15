import { Link } from "react-router-dom";



export default function Header() {
  const navlinks = [
    { href: "/", label: "Home" },
    { href: "/test", label: "Test" },
    { href: "/resources", label: "Resources" },
    { href: "/activities", label: "Activities" },
    { href: "/counselling", label: "Counselling" },
    { href: "/about_us", label: "About us" },
  ];
  return (
    <div className="border-r shadow-sm fixed top-0 left-0 rounded-xl h-screen w-[18%] flex-col bg-white hidden md:flex">
      <div className="mt-10 mb-10 text-center">
        <Link to="/" className="flex justify-center">
          <img src="/assets2/Logo2.png" alt="logo" className=" w-[180px]"/>
        </Link>
      </div>

      <div className=" lg:px-10 py-10 h-full w-full bg-gradient-to-br from-indigo-300 to-indigo-500 text-white md:text-2xl text-left ">
        <div className="flex flex-col text-center">
          {navlinks.map((navlink)=>{
            return<Link to={navlink.href} className="py-7">{navlink.label}</Link>
          })}  
          {/* <Link to="/test" className="p-7">Test</Link>
          <Link to="/resources" className="p-7">Resources</Link>
          <Link to="/activities" className="p-7">Activities</Link>
          <Link to="/counselling" className="p-7">Counselling</Link>
          <Link to="/about_us" className="p-7">About us</Link> */}
        </div>
      </div>

      {/* <div className="mb-10 mt-5 p-5  bg-gradient-to-br from-purple-100 to-purple-300  rounded-xl text-2xl ">
        <ul>
          <li>
            <Link to={"/community"} className=" text-2xl">
              Community
            </Link>
          </li>

          <li className="mt-5">
            <Link to={"/journal"} className=" text-2xl">
              Journal
            </Link>
          </li>
        </ul>
      </div> */}
      {/* <div className="pl-3 pt-2 pb-2 mb-5 bg-gradient-to-br from-blue-200 to-purple-300 rounded-xl">
        <Link className=" text-2xl">Login</Link>
        </div> */}
    </div>
  );
}
