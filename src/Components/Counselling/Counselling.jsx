import CList from "./CList";
import Sfooter from "../Sfooter";
import SearchBar from "../SearchBar";
import S_header from "../S_header";
import { Link } from "react-router-dom";

//user appointments
import { useState } from "react";

export default function Counselling() {
  const [Name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({ name: "", address: "", contact: "", email: "" }); // Clear form
    setShowForm(false); // Hide form after submission
  };

  return (
    <div className="bg-sky-100 w-full">
      <div className="md:hidden">
        <S_header />
      </div>

      {/* <div className="md:hidden h-[100px] w-full bg-blue-600"></div> */}
      <div className="flex justify-between">
        <h1 className="pl-10 pt-10 mb-5 text-3xl font-bold text-[#0f444c]">
          Counselling Services
        </h1>
        <div className="flex justify-end px-5 md:px-20 ">
          <SearchBar />
        </div>
      </div>
      <div className="px-[10%] py-10 justify-evenly">
        <div className="grid md:grid-cols-2 gap-y-10">
          {CList.map((CList) => {
            return (
              <div className=" py-10 max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <img
                  className="mx-6 my-2 w-22 h-22 object-cover rounded-full"
                  src={CList.image}
                  alt={CList.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-blue-600">
                    {CList.name}
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Service: </span>
                    {CList.title.join(", ")}
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Experience: </span>
                    {CList.exp} years
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Address: </span>
                    {CList.addr}
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Fees: </span>₹{CList.fees}
                  </p>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-700 text-sm font-semibold mr-2">
                      Rating:
                    </span>
                    <div className="flex items-center">
                      {[...Array(CList.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927C9.32 2.304 10.681 2.304 10.951 2.927l1.367 3.324 3.622.332c.737.068 1.035.955.495 1.404l-2.78 2.392.858 3.549c.159.661-.533 1.205-1.093.81L10 13.187l-2.93 1.551c-.561.396-1.252-.149-1.093-.81l.858-3.549-2.78-2.392c-.54-.449-.242-1.336.495-1.404l3.622-.332 1.367-3.324z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      CList.availability === "available"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {CList.availability === "available"
                      ? "Available"
                      : "Unavailable"}
                  </p>
                </div>

                <div className=" px-6 py-4 mx-auto">
                  <Link
                    className="w-[20%] text-xl text-center absolute bottom-6 left-10  text-sky-500 hover:text-sky-700 font-bold py-2 px-2 rounded-full focus:outline-none"
                    to={`${CList.id}`}
                  >
                    Visit
                  </Link>

                  <button
                    onClick={() => {
                      setShowForm(true);
                      setName(CList.name);
                    }}
                    className={`w-[40%] absolute bottom-5 right-10 ${
                      CList.availability === "available"
                        ? "bg-blue-500 hover:bg-blue-700"
                        : "bg-gray-500 cursor-not-allowed"
                    } text-white font-bold py-2 px-4 rounded-xl focus:outline-none`}
                    disabled={CList.availability !== "available"}
                  >
                    Book Appointment
                  </button>

                  {/* <Link  
                  to={`${CList.id}`}
                className={`w-[40%] absolute bottom-5 right-10 ${
                      CList.availability === "available"
                        ? "bg-blue-500 hover:bg-blue-700"
                        : "bg-gray-500 cursor-not-allowed"
                    } text-white font-bold py-2 px-4 rounded-xl focus:outline-none`}
                    disabled={CList.availability !== "available"}>
                      Book Appointment
                </Link> */}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {/*for User appointment */}
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-6 rounded shadow-lg w-96 ">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Fill in Your Details
                  </h2>

                  <div>
                    <div>
                      <p>Consultant : {Name}</p>
                    </div>

                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Address:
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Contact No:
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Sfooter />
    </div>
  );
}
