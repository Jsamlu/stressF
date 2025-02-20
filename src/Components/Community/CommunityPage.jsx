import React, { useState, useRef } from "react";

const CommunityPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tree Plantation Drive",
      date: "Oct 10, 2024",
      time: "10:00 AM - 2:00 PM",
      org: "GreenEarth NGO",
      address: "123 Green Street, Cityville",
      contact: "9876543210",
      email: "contact@ngo.com",
      comments: [],
      image: null,
      registeredUsers: [],
    },
  ]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    org: "",
    address: "",
    contact: "",
    email: "",
    image: null,  // Placeholder for the image file
  });
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [captchaMatched, setCaptchaMatched] = useState(false);
  const fileInputRef = useRef(null);

  function generateCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  const resetForm = () => {
    setNewEvent({
      title: "",
      date: "",
      time: "",
      org: "",
      address: "",
      contact: "",
      email: "",
      image: null,
    });
    setCaptcha(generateCaptcha());
    setEnteredCaptcha("");
    setCaptchaMatched(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!captchaMatched) {
      alert("Captcha validation failed. Please verify the captcha.");
      return;
    }
    setEvents((prevEvents) => [
      ...prevEvents,
      { ...newEvent, id: prevEvents.length + 1, comments: [], registeredUsers: [] },
    ]);
    alert("Event added successfully!");
    resetForm();
  };

  const validateCaptcha = () => {
    if (enteredCaptcha.trim().toLowerCase() === captcha.toLowerCase()) {
      setCaptchaMatched(true);
      alert("Captcha verified successfully!");
    } else {
      setCaptchaMatched(false);
      alert("Captcha verification failed. Please try again.");
    }
  };

  const openRegistrationForm = (eventId) => {
    setSelectedEventId(eventId);
    setShowRegistrationForm(true);
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
    setRegistrationData({ name: "", contact: "", email: "", address: "" });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === selectedEventId
          ? { ...event, registeredUsers: [...event.registeredUsers, registrationData] }
          : event
      )
    );
    alert("Registration Successful!");
    setShowRegistrationForm(false);
    setRegistrationData({ name: "", contact: "", email: "", address: "" });
  };

  const handleCommentSubmit = (e, eventId) => {
    e.preventDefault();
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              comments: [
                { user: userName, text: newComment },
                ...event.comments,
              ].slice(0, 10),
            }
          : event
      )
    );
    setNewComment("");
    setUserName("");
  };

  // Handle the image file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewEvent({ ...newEvent, image: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-600 via-sky-500 to-green-500 ">
      <h1 className="text-4xl font-bold text-center text-indigo-200 mb-8">Community Page</h1>

      {/* Event Section */}
      <section className="mb-12 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-50 mb-4 text-center">Upcoming Events</h2>
        <ul className="space-y-6">
          {events.map((event) => (
            <li key={event.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-indigo-700">{event.title}</h3>
                <span className="text-sm font-semibold text-gray-600">{event.date}</span>
              </div>
              <p className="text-gray-700">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-gray-700">
                <strong>Organizer:</strong> {event.org}
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> {event.address}
              </p>
              <p className="text-gray-700">
                <strong>Contact:</strong> {event.contact}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {event.email}
              </p>

              {/* Event Poster */}
              {event.image && (
                <div className="w-full flex justify-center mt-4 border-2 border-gray-300 p-2 rounded-lg shadow-lg">
                  <img
                    src={event.image}
                    alt="Event"
                    className="w-full max-h-[600px] object-contain rounded-lg"
                  />
                </div>
              )}

              {/* Registered Users count */}
              <p className="text-gray-700 mt-4">
                <strong>Registered Users:</strong> {event.registeredUsers.length}
              </p>

              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
                  onClick={() => openRegistrationForm(event.id)}
                >
                  Register for Event
                </button>
              </div>

              {/* Comments Section */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800">Comments:</h4>
                <ul className="space-y-2 mt-4">
                  {event.comments.map((comment, index) => (
                    <li key={index} className="bg-gray-100 p-2 rounded">
                      <strong>{comment.user}:</strong> {comment.text}
                    </li>
                  ))}
                </ul>

                {/* Add Comment Form */}
                <form onSubmit={(e) => handleCommentSubmit(e, event.id)} className="mt-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    className="w-full mb-2 border border-gray-300 p-2 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    className="w-full mb-2 border border-gray-300 p-2 rounded-lg"
                  />
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                    Post Comment
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Registration Form */}
      {showRegistrationForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Register for Event</h2>
            <input
              type="text"
              placeholder="Name"
              value={registrationData.name}
              onChange={(e) =>
                setRegistrationData({ ...registrationData, name: e.target.value })
              }
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Contact"
              value={registrationData.contact}
              onChange={(e) =>
                setRegistrationData({ ...registrationData, contact: e.target.value })
              }
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={registrationData.email}
              onChange={(e) =>
                setRegistrationData({ ...registrationData, email: e.target.value })
              }
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address"
              value={registrationData.address}
              onChange={(e) =>
                setRegistrationData({ ...registrationData, address: e.target.value })
              }
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Submit
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeRegistrationForm}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow mt-2"
            >
              Close
            </button>
          </form>
        </div>
      )}

      {/* Add Event Form */}
      <section className="mb-12 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add Event</h2>
        <form onSubmit={handleAddEvent} className="border border-gray-300 p-4 rounded-lg bg-white shadow-md">
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Event Date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Event Time"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Organizer Name"
            value={newEvent.org}
            onChange={(e) => setNewEvent({ ...newEvent, org: e.target.value })}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Event Address"
            value={newEvent.address}
            onChange={(e) => setNewEvent({ ...newEvent, address: e.target.value })}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={newEvent.contact}
            onChange={(e) => setNewEvent({ ...newEvent, contact: e.target.value })}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={newEvent.email}
            onChange={(e) => setNewEvent({ ...newEvent, email: e.target.value })}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
          />

          {/* File Upload for Event Poster */}
          <div className="mb-4">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
            />
            {newEvent.image && (
              <div className="mt-2">
                <img
                  src={newEvent.image}
                  alt="Event Poster"
                  className="max-h-40 object-contain rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Captcha Verification */}
          <div className="mb-4">
            <div className="text-gray-600 font-semibold">Captcha: {captcha}</div>
            <input
              type="text"
              value={enteredCaptcha}
              onChange={(e) => setEnteredCaptcha(e.target.value)}
              placeholder="Enter Captcha"
              required
              className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              onClick={validateCaptcha}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Validate Captcha
            </button>
          </div>

          <button
            type="submit"
            className={`${
              captchaMatched ? "bg-blue-500" : "bg-gray-400"
            } text-white px-4 py-2 rounded-lg`}
            disabled={!captchaMatched}
          >
            Add Event
          </button>
        </form>
      </section>
    </div>
  );
};

export default CommunityPage;
