import { Link } from "react-router-dom";

export default function Header() {
  const navlinks = [
    { href: "/profile", label: "Profile" },
    { href: "/test", label: "Test" },
    { href: "/resources", label: "Resources" },
    { href: "/activities", label: "Activities" },
    { href: "/maingame", label: "Games" },
    { href: "/counselling", label: "Professionals" },
    { href: "/about_us", label: "About us" },
  ];
  return (
    <div className="border-r shadow-sm fixed top-0 left-0 bottom-0 rounded-xl h-screen w-[18%] flex-col bg-white hidden md:flex">
      <div className="mb-10 text-center h-[100px]">
        <Link to="/" className="flex  items-center ">
          <img src="/assets2/newLogo.png" alt="logo" className=" h-full w-full " />
        </Link>
      </div>

      <div className=" lg:px-10 px-6 py-10 h-full w-full bg-gradient-to-br from-indigo-200 to-indigo-600  lg:text-2xl md:text-lg text-left ">
        <div className="flex flex-col text-center">
          {navlinks.map((navlink) => {
            return (
              <>
                <Link
                  to={navlink.href}
                  className="underline underline-offset-0 decoration-transparent hover:decoration-blue-500 hover:underline-offset-[15px] hover:text-blue-500 text-white  hover:bg-gradient-to-br from-sky-200 to-sky-300 p-5 hover:scale-105 transition-all duration-150 rounded-xl"
                >
                  {navlink.label}
                </Link>
                {/* <hr className="border-0 h-[1px] bg-indigo-500"></hr> */}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
