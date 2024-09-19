import { Link } from "react-router-dom"
import S_header from "../S_header"
import Sfooter from "../Sfooter"
export default function MainGame(){
    return <div>
        <div className="md:hidden"><S_header/></div>
        <div className="md:hidden h-[100px] bg-blue-600"></div>
        <div className='bg-indigo-300 min-h-screen min-w-screen'>
            <h1 className="px-20 pt-10 text-2xl md:text-4xl">Games</h1>
        <div className='w-[85%] mx-auto pt-[100px] grid md:grid-cols-3 gap-x-5 gap-y-5'>
        <a href="https://poki.com/en/g/water-color-sort"> <div className=' h-[200px] overflow-hidden object-cover'><img src="/assets/games/game1.png" alt="game 1" /></div></a>
        <a href="https://poki.com/en/g/pop-it-master"> <div className=' h-[200px]  overflow-hidden object-cover'><img src="/assets/games/game2.png" alt="game 2" /></div></a>
        <a href="https://poki.com/en/g/pixlinks"> <div className=' h-[200px]  overflow-hidden object-cover'><img src="/assets/games/game3.png" alt="game 3" /></div></a>
        <a href="https://poki.com/en/g/picture-it"> <div className=' h-[200px] overflow-hidden object-cover'><img src="/assets/games/picture_it.png" alt="game 4" /></div></a>
        <Link to="/games"> <div className='bg-white h-[200px] overflow-hidden object-cover'><img src="/assets/games/game5.jpg" alt="game 5" /></div></Link>
        </div>
        </div>
        <Sfooter/>
    </div>
}