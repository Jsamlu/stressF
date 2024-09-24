import { Link } from "react-router-dom";

export default function Footer() {
  const Flinks = [
    {
      href: "/",
      label: "Home",
    },
    // {
    //   href: "/test",
    //   label: "Test",
    // },
    {
      href: "/resources",
      label: "Resources",
    },
    // {
    //   href: "/activities",
    //   label: "Activities",
    // },
    {
      href: "/counselling",
      label: "Counselling",
    },
    {
      href: "/about_us",
      label: "About us",
    },
    // {
    //   href: "/community",
    //   label: "Community",
    // },
    // {
    //   href: "/journal",
    //   label: "Journal",
    // },
    {
      href: "/maingame",
      label: "Games",
    },
  ];

  return (
    <div className=" bg-blue-950 mx-auto w-full lg:w-[82%] md:ms-[18%] md:h-[40vh]">
      {/* quick links */}
      <hr className=" bg-indigo-300" />
      <div className="px-5 py-5 grid md:grid-row-3 w-screen h-[85%]">
        <div className=" text-indigo-200 font-semibold grid grid-cols-2 md:grid-cols-5 gap-x-5">
          <div className="md:col-span-2 ">
            <div>
              <h1 className="md:text-xl text-lg ">D-stress</h1>
              <p className="p-3 pr-5 md:text-sm  text-xs">
              </p>
            </div>
            <hr className=" border-0 m-3 mb-5 h-[2px] bg-sky-800 " />

            <div>
              <h1 className="md:text-xl text-lg">Contact Us</h1>
              <div className="p-3 pr-5 text-sm flex space-x-5">
                <Link
                  to="#"
                  className="md:text-sm text-xs underline underline-offset-0 hover:underline-offset-[10px] hover:decoration-sky-400 decoration-transparent hover:text-sky-400 transition-all duration-300"
                >
                  Contact
                </Link>
                <Link
                  to="/about_us"
                  className="md:text-sm text-xs underline underline-offset-0 hover:underline-offset-[10px] hover:decoration-sky-400 decoration-transparent hover:text-sky-400 transition-all duration-300"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div>
          <div className="text-right">
            <h1 className="text-lg font-bold ">Quick Links</h1>
            <div className="py-3 flex flex-col">
              {Flinks.map((FL) => {
                return (
                  <Link
                    to={FL.href}
                    className="text-sm hover:text-sky-400 transition-all duration-300 transform hover:-translate-x-2"
                  >
                    {FL.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-10 border-0 h-[2px] bg-sky-400 " />
      <div className="md:py-1 text-indigo-300 text-center">
        © all rights are reserverd by D-Stress
      </div>
    </div>
  );
}
