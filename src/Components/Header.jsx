import { Link } from "react-router-dom";

const navlinks = [
  {href:'/', label:'/Home'},
  {href:'/test', label:'/test'},
  {href:'/resources', label:'/Resources'},
  {href:'/activities', label:'/Activities'},
]


export default function Header (){

  return (
    // <div  className="fixed top-0 left-0 w-[15%] bg-purple-400 text-white flex flex-col justify-between p-4 h-screen">
    //   <div className="p-4 mt-auto mb-auto flex flex-col bg-purple-200 text-indigo-600 text-2xl justify-center">
    //     <Link to='/'> Home</Link>
    //     <Link to='/test'> Test</Link>
    //     <Link to='/resources'> Resources</Link>
    //     <Link to='/activities'> Activities</Link>
    //   </div>
    // </div>
    <div className="p-9 border-r shadow-sm fixed top-0 left-0 h-screen w-[15]%] flex flex-col bg-white z-10">
        <div className="mb-10 text-center">
          <Link to="/" className=" text-4xl font-thin">
            Stress
          </Link>
        </div>

        <div className="pl-3 pt-2 pb-2 mb-5 bg-gradient-to-br from-blue-200 to-purple-300 rounded-xl">
          <Link to="/test" className=" text-3xl">Test</Link>
        </div>
        
        <div className="mb-5 mt-10 p-5  bg-gradient-to-br from-purple-100 to-purple-300  rounded-xl text-xl ">
          <ul>
            <li>
            <Link to="/resources">Resources</Link>
            </li>
            <li className="mt-10">
            <Link to="/activities">Activities</Link>
            </li>
            <li className="mt-10">
            <Link to="/counselling">Counselling</Link>
            </li>
            <li className="mt-10">
            <Link to="/about_us">About_us</Link>
            </li>
          </ul>
        </div>  

        <div className="mb-10 mt-5 p-5  bg-gradient-to-br from-purple-100 to-purple-300  rounded-xl text-2xl ">
          <ul>
            <li>
              <Link className=" text-2xl">Community</Link>
            </li>
            
            <li className="mt-5">
              <Link className=" text-2xl">Journel</Link>
            </li>
          </ul>
        </div>
        {/* <div className="pl-3 pt-2 pb-2 mb-5 bg-gradient-to-br from-blue-200 to-purple-300 rounded-xl">
        <Link className=" text-2xl">Login</Link>
        </div> */}

      </div>
  );
}

