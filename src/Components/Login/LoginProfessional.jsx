import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginProfessional = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in both email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/professional/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log('Professional Login successful:', data);
        } else {
          const message = await response.text();  // Handle plain text response
          console.log(message);
        }
        navigate('/counselling');
      } else {
        alert('Professional Login failed. Check credentials.');
      }
    } catch (error) {
      console.error('Error during professional login:', error);
    }
  };

  return (
     
    <>
      
      <div className='relative h-screen'>
       <img src="/assets2/log.png"  className='absolute top-0 left-0 w-full h-full object-cover z-0' alt="" /> 
      </div>
      <div className='card-container absolute inset-0 flex justify-center items-center z-10 pr-60'>
      <div className="card bg-gradient-to-br from-pink-300 via-purple-200 to-cyan-400 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Professional Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full bg-green-300 text-black py-2 px-4 rounded"
          >
            Login as Professional
          </button>
        </form>
      </div>
      </div> 
    </>
  );
};

export default LoginProfessional;


{/*<div className="card-container h-screen flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-400 to-sky-500">*/}