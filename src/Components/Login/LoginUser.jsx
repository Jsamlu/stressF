import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in both email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log('User Login successful:', data);
        } else {
          const message = await response.text();  // Handle plain text response
          console.log(message);
        }
        navigate('/test');
      } else {
        alert('User Login failed. Check credentials.');
      }
    } catch (error) {
      console.error('Error during user login:', error);
    }
  };

  return (
    <div className="card-container h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-sky-500">
      <div className="card bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
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
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          >
            Login as User
          </button>
        </form>
        {showPopup && (
          <div className="popup bg-green-200 p-4 mt-4 rounded-lg shadow-lg">
            <p className="text-green-700">User Logged in Successfully!</p>
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

export default LoginUser;
