import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/login-user');
  };

  const handleProfessionalLogin = () => {
    navigate('/profile');
  };

  return (
    <div className="card-container h-screen flex items-center bg-gradient-to-br from-sky-600 to-teal-600">
      <div className="mx-auto card  bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Choose Login</h2>
        <button
          onClick={handleUserLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          User Login
        </button>
        <button
          onClick={handleProfessionalLogin}
          className="w-full bg-green-500 text-white py-2 px-4 rounded"
        >
          Professional Login
        </button>
        <p className="mx-[5%] mt-4">Don't have an account? &nbsp;,<br/> <Link to="/register" className="hover:text-teal-700 text-teal-300 hover:underline">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
