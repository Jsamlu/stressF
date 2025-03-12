import { useState } from "react";
import ACT2 from "../Activities/ACT2";
import { Link } from "react-router-dom";
const ACT = [
  { name: "Apple" },
  { name: "Banana" },
  { name: "Cherry" },
  { name: "Date" },
  { name: "Elderberry" },
  { name: "Fig" },
  { name: "Grapes" },
  { name: "Honeydew" },
];

export default function FilterComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the ACT2 array based on search term
  const filteredResults = ACT2.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <ul>
        {filteredResults.length > 0 ? (
          filteredResults.map((item, index) => <li key={index}><div className="h-[500px] w-[300px] bg-white rounded-xl grid grid-rows-3 shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                              <div className="rounded-tr-xl rounded-tl-xl overflow-hidden row-span-2 h-[300px]">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="transform hover:scale-[110%] transition-all duration-300"
                                />
                              </div>
                              <div className="mx-auto">
                                <p className="font-bold text-lg">{item.name}</p>
                                <p className="mt-2 mb-3 txt">{item.desc}</p>
                                <div className="flex space-x-5 mx-auto">
                                  <Link
                                    to={`${item.id}`}
                                    className=" text-blue-500 text-center text-lg right-0 block bg-white rounded-lg w-[80%] px-3 py-1 hover:bg-white   hover:font-bold hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 transition-all duration-400"
                                  >
                                    visit
                                  </Link>
          
                                  <button className="text-white text-center bg-blue-400 rounded-lg px-1 py-1 hover:bg-white   hover:font-bold hover:text-blue-800 border-2 border-white hover:boder-2 hover:border-blue-900 transition-all duration-400">
                                    Add
                                  </button>
                                </div>
                              </div>
                            </div></li>)
        ) : (
          <li className="text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
}
