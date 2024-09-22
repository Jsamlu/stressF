import "./login.css";
import React, { useState } from "react";
import Sfooter from "../Sfooter";
import S_header from "../S_header";
import { Link } from "react-router-dom";

const Signin = () => {
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
      <div className="h-full w-full cont bg-sky-200">
        <div className="">
          <div className="login-container bg-white ">
            <h2>Sign In</h2>
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

                className="mt-5 p-5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-all duration-400"
                type="submit"
              >
                Sign in
              </button>
              <p className="mx-[5%] mt-4">Already have an account&nbsp; <Link to="/login" className="hover:text-sky-800 text-sky-500">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
      <Sfooter />
    </>
  );
};

export default Signin;
