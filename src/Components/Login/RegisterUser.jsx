import React, { useState } from 'react';
/*import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";*/
import { FaCalendarAlt } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  //const [dob, setDOB] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);  // For showing success pop-up
  const [error, setError] = useState('');  // For displaying errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email /*|| !dob*/ || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    // Reset error if validation passes
    setError('');

    // Send the registration data to backend API
    try {
      const response = await fetch('http://localhost:8080/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, /*dob,*/ password }),
      });

      if (response.ok) {
        setShowPopup(true);  // Show success pop-up on successful registration
        // Reset form fields after successful registration
        setUsername('');
        setEmail('');
        setDOB('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError('Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="card-container h-screen flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-400 to-sky-500">
      <div className="card bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Registration</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}  {/* Display error */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          >
            Register
          </button>
        </form>

        {/* Success pop-up after registration */}
        {showPopup && (
          <div className="popup bg-green-200 p-4 mt-4 rounded-lg shadow-lg">
            <p className="text-green-700">User Registered Successfully!</p>
            <button
              className="bg-green-500 text-white py-1 px-2 rounded mt-2"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterUser;
/*
<div className="mb-4">
            <label className="block text-gray-700 mb-2">Date of Birth</label>
            <div className="relative">
          //  {/* Input field with calendar icon *///}
          /*  <DatePicker
            selected={dob}
            onChange={(date) => setDOB(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date of Birth"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {/* Calendar icon *///}
         /*   <span className="absolute inset-y-0 right-3 flex items-center">
              <FaCalendarAlt className="text-gray-400" />
            </span>
        </div>
      </div>-->
*/