import { Link } from "react-router-dom";

export default function Header (){
  return (
    <div  className="fixed top-0 left-0 w-[15%] bg-violet-800 text-white flex flex-col justify-between p-4 h-screen">
      <div className="flex flex-col bg-red-500">
        <a href="/">Home</a>
        <a href="/test">test</a>
      </div>
    </div>
  );
}