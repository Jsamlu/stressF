import { Link } from "react-router-dom";

const navlinks = [
  {href:'/', label:'/Home'},
  {href:'/test', label:'/test'},
  {href:'/resources', label:'/Resources'},
  {href:'/activities', label:'/Activities'},
]


export default function Header (){

  return (
    <div  className="fixed top-0 left-0 w-[15%] bg-purple-200 text-white flex flex-col justify-between p-4 h-screen">
      <div className="mt-auto mb-auto flex flex-col bg-purple-500 text-white text-xl justify-center">
        <Link to='/'> Home</Link>
        <Link to='/test'> Test</Link>
        <Link to='/resources'> Resources</Link>
        <Link to='/activities'> Activities</Link>
      </div>
    </div>
  );
}

