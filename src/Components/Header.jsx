import { Link } from "react-router-dom";

const navlinks = [
  { href: "/", label: "/Home" },
  { href: "/test", label: "/test" },
  { href: "/resources", label: "/Resources" },
  { href: "/activities", label: "/Activities" },
];

export default function Header() {
  return (
    // <div  className="fixed top-0 left-0 w-[15%] bg-purple-400 text-white flex flex-col justify-between p-4 h-screen">
    //   <div className="p-4 mt-auto mb-auto flex flex-col bg-purple-200 text-indigo-600 text-2xl justify-center">
    //     <Link to='/'> Home</Link>
    //     <Link to='/test'> Test</Link>
    //     <Link to='/resources'> Resources</Link>
    //     <Link to='/activities'> Activities</Link>
    //   </div>
    // </div>
    <div className="border-r shadow-sm fixed top-0 left-0 rounded-xl h-screen w-[15%] flex flex-col bg-white">
      <div className="mt-10 mb-10 text-center">
        <Link to="/" className=" text-4xl font-thin">
          D-Stress
        </Link>
      </div>

      <div className="p-10 h-full w-full bg-gradient-to-br from-indigo-100 to-indigo-300 text-xl text-left ">
        <div className="flex flex-col text-center">
          <Link to="/test" className="p-7">Test</Link>
          <Link to="/resources" className="p-7">Resources</Link>
          <Link to="/activities" className="p-7">Activities</Link>
          <Link to="/counselling" className="p-7">Counselling</Link>
          <Link to="/about_us" className="p-7">About us</Link>
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
