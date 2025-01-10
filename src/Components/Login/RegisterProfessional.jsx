import React, { useState } from 'react';

const RegisterProfessional = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [imageFile,setImageFile] = useState(null);
  const [cv, setCv] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);  // For showing success pop-up
  const [error, setError] = useState('');  // For displaying errors
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Send the registration data to backend API
  //   try {
  //     const response = await fetch('http://localhost:8080/api/professional/register', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, email, password }),
  //     });

  //     if (response.ok) {
  //       setShowPopup(true);  // Show success pop-up on successful registration
  //       // Reset form fields after successful registration
  //       setUsername('');
  //       setEmail('');
  //       setSpecialization('');
  //       setImg('');
  //       setCv('');
  //       setPassword('');
  //       setConfirmPassword('');
  //     } else {
  //       setError('Registration failed.');
  //     }
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //     setError('An error occurred. Please try again.');
  //   }
  // };

  const handleImageUpload = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!username || !email || !specialization || !image || !password || !confirmPassword) {
    //   setError('Please fill in all fields.');
    //   return;
    // }
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    // Reset error if validation passes
    setError('');

    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true); // Disable button during submission

    const formData = new FormData();
    formData.append('name', username);
    formData.append('specialization', specialization);
    //formData.append('bio', bio);
    if (imageFile) formData.append('image', imageFile);
    if (cv) formData.append('cv', cv);

    try {
        const response = await fetch('http://localhost:8080/api/professional/register', {
            method: 'POST',
            body: formData,
        });

        if(response.ok){
          const data = await response.json();
          console.log('Professional Registered:', data);
          setShowPopup(true);
        }else{
          setError("Registration Failed.");
        }  
    }catch (error) {
        console.error('Error registering professional:', error);
        setError('An error occurred.');
    }finally{
      setIsSubmitting(false);
    }
};


//   const handleImageUpload = (e) => {
//     const formData = new FormData();
//     formData.append('file', e.target.files[0]);
//     fetch('http://localhost:8080/api/professional/upload-file', {
//         method: 'POST',
//         body: formData,
//     })
//         .then((response) => response.json())
//         .then((data) => setImageUrl(data.fileUrl));
// };

  return (
    <div className="card-container h-screen flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-400 to-sky-500">
      <div className="card bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Professional Registration</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}  {/* Display error */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
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
            <label className="block text-gray-700 mb-2">Specialization</label>
            <input
              type="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input type="file" name="image" onChange={handleImageUpload} />
            {/* <input type="file" name="cv" onChange={handleCVUpload} /> */}
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
            disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Success pop-up after registration */}
        {showPopup && (
          <div className="popup bg-green-200 p-4 mt-4 rounded-lg shadow-lg">
            <p className="text-green-700">Professional Registered Successfully!</p>
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

export default RegisterProfessional;
