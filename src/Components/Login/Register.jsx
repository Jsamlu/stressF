import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleUserRegistration = () => {
    navigate('/register-user');
  };

  const handleProfessionalRegistration = () => {
    navigate('/register-professional');
  };

  return (
    <div className="card-container h-screen flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-400 to-sky-500">
      <div className="card bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Choose Registration</h2>
        <button
          onClick={handleUserRegistration}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          User Registration
        </button>
        <button
          onClick={handleProfessionalRegistration}
          className="w-full bg-green-500 text-white py-2 px-4 rounded"
        >
          Professional Registration
        </button>
      </div>
    </div>
  );
};

export default Register;
