import "./login.css";
import React, { useState } from "react";
import Sfooter from "../Sfooter";

const Login = () => {
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
      <div className="h-full w-full cont ">
        <div className=" grid grid-cols-2">
          <div className="login-container  ">
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
                />
              </div>
              <button

                className="mt-10 p-5 rounded-xl bg-[#4ea1f9] text-white transition-all duration-400"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <div className="bg-blue-400 ml-1 h-full w-full rounded-lg login-container text-white">
            <h2>Sign in</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-10 text-white">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-5 text-white">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="mt-10 p-5 rounded-xl bg-white text-blue-500 hover:bg-gray-200 hover:text-blue-500 transition-all duration-300"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <Sfooter />
    </>
  );
};

export default Login;
