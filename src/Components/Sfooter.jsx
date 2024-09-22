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
      href: "/games",
      label: "Games",
    },
  ];

  return (
    <>
      <div className=" bg-blue-950 h-[40vh]">
        {/* quick links */}
        <div className=" md:p-5 grid md:grid-row-3 w-screen h-[85%]">
          <div className=" text-indigo-200 font-semibold grid md:grid-row-3 md:grid-cols-5 gap-x-5">
            <div className="bg-white col-span-3 "></div>
            <div className=" px-5 text-right">
              <h1 className="text-lg font-bold ">Quick Links</h1>
              <div className="py-3 flex flex-col">
              {Flinks.map((FL) => {
                return (
                  <Link
                    to={FL.href}
                    className="text-sm  hover:text-sky-400 transition-all duration-300 transform hover:-translate-x-1"
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
    </>
  );
}

// <Route path="/" element={<Home/>} />
//           <Route path="/test" element={</>} />
//           <Route path="/forum" element={<Forum/>} />
//           <Route path="/resources" element={<Resources/>} />
//           <Route path="/activities" element={<Activities/>} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/community" element={<Community/>} />
//           <Route path="/journal" element={<Journal/>} />
//           <Route path="/about_us" element={<Aboutus/>} />
//           <Route path="/games" element={<Games/>} />
//           <Route path="/counselling" element={<Counselling/>} />
