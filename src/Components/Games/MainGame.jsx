import { Link } from "react-router-dom";
import S_header from "../S_header";
import Sfooter from "../Sfooter";
export default function MainGame() {
  const gamelist = [
    { href: "/stressballbounce", img: "/assets/games/game5.jpg" },
    { href: "/wordsearchgame", img: "/assets/games/words.jpeg" },
    { href: "/mazegame", img: "/assets/games/maze.jpeg" },
    { href: "/connectthedots", img: "/assets/games/connectdots.jpeg" },
  ];

  return (
    <div>
      <div className="md:hidden">
        <S_header />
      </div>
      <div className="md:hidden h-[100px] bg-blue-600"></div>
      <div className="bg-gradient-to-br from-blue-700 via-sky-500 to-green-600 min-h-[70vh] min-w-screen py-10">
        <h1 className="px-10 py-10 text-2xl md:text-4xl text-sky-200 font-semibold">Games</h1>
        <i className="px-10 md:text-xl font-thin text-sky-200" >"Games are not just an <b>escape;</b> they’re a <b>reset</b> button for the mind."</i>
        <hr className=" w-[65%] mx-10 my-5 p-0.5 rounded-full bg-white "></hr>
        <div className="md:w-[70%] px-10 py-10 grid md:grid-cols-3 gap-y-5">
          {gamelist.map((gamelist) => {
            return (
              <Link to={gamelist.href}>
                <div className="bg-white h-[150px] w-[250px] overflow-hidden object-cover rounded-3xl hover:scale-[105%] transition-all duration-300">
                  <img src={gamelist.img} alt="game 5" className="h-full w-full" />
                  
                </div>
              </Link>
            );
          })}
        </div>
        <hr className=" w-[65%] mx-10 mt-5 p-0.5 rounded-full bg-white "></hr>

      </div>
      <Sfooter />
    </div>
  );
}
