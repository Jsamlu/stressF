import "./login.css";
import React, { useState } from "react";
import Sfooter from "../Sfooter";
import S_header from "../S_header";
import { Link } from "react-router-dom";

//context

const Login = () => {

  //use context

 


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Simple validation
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    // Here you would typically handle authentication
    // For now, we just log the credentials
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear the form and error message
    setEmail("");
    setPassword("");
    setError("");
  };


  
  return (
    <>
      <div className="md:hidden"><S_header/></div>
      <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
      <div className="bg-indigo-200 h-full w-full cont ">
        <div className="">
          <div className="login-container  bg-white">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-10">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-200"
                />
              </div>
              <div className="form-group mt-5">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-200"
                />
              </div>
              <button
                onClick={() => {
                  handleSubmit()
                }}
                className="mt-5 p-5 rounded-xl bg-[#4ea1f9] text-white transition-all duration-400"
                type="submit"
              >
                Login
              </button>
              <p className="mx-[5%] mt-4">Register as New&nbsp; <Link to="/signin" className="hover:text-blue-800 text-blue-500">Sign-In</Link></p>
            </form>
          </div>
        </div>
      </div>
      <Sfooter />
    </>
  );
};

export default Login;
