import { Link } from "react-router-dom";

export default function Header (){
  return (
    <div  className="fixed top-0 left-0 w-[15%] bg-violet-800 text-white flex flex-col justify-between p-4 h-screen">
      <div className="flex flex-col bg-red-500">
        <Link to='/'> Home</Link>
        <Link to='/test'> Test</Link>
        <Link to='/resources'> Resources</Link>
        <Link to='/activities'> Activities</Link>
      </div>
    </div>
  );
}