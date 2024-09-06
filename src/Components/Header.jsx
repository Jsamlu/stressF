import { Link } from "react-router-dom";

export default function Header (){
  return (
    <div>
      <div className="flex flex-col bg-red-500">
        <a href="/">Home</a>
        <a href="/test">test</a>
      </div>
    </div>
  );
}