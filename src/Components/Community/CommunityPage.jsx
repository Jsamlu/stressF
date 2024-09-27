import React, { useState } from "react";

const CommunityPage = () => {
  // Example data for events with timings
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tree Plantation Drive",
      date: "Oct 10, 2024",
      time: "10:00 AM - 2:00 PM",
      org: "GreenEarth NGO",
      address: "123 Green Street, Cityville",
      comments: [],
      maxComments: 20,
      registeredUsers: []
    },
    {
      id: 2,
      title: "Mental Health Seminar",
      date: "Oct 15, 2024",
      time: "1:00 PM - 4:00 PM",
      org: "Healthcare Center ABC",
      address: "456 Wellness Ave, Healthtown",
      comments: [],
      maxComments: 20,
      registeredUsers: []
    }
  ]);

  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [registrationData, setRegistrationData] = useState({
    name: "",
    age: "",
    contactNumber: "",
    email: "",
    address: "",
    university: "",
    fees: ""
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  // Function to handle adding a comment
  const handleCommentSubmit = (e, eventId) => {
    e.preventDefault();
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId && event.comments.length < event.maxComments
          ? { ...event, comments: [...event.comments, { user: userName, text: newComment }] }
          : event
      )
    );
    setNewComment("");
    setUserName("");
  };

  // Function to handle user registration for an event
  const handleRegister = (eventId) => {
    setSelectedEventId(eventId);
    setIsRegistering(true);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === selectedEventId
          ? { ...event, registeredUsers: [...event.registeredUsers, registrationData.name] }
          : event
      )
    );
    setRegistrationData({
      name: "",
      age: "",
      contactNumber: "",
      email: "",
      address: "",
      university: "",
      fees: ""
    });
    setIsRegistering(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Community Page</h1>

      {/* Event Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
        <ul className="space-y-6">
          {events.map((event) => (
            <li key={event.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p>
                <strong>Date:</strong> {event.date} <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Organization:</strong> {event.org}
              </p>
              <p>
                <strong>Location:</strong> {event.address}
              </p>

              {/* Register for Event */}
              <button
                className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none"
                onClick={() => handleRegister(event.id)}
              >
                Register for Event
              </button>

              <p className="mt-2">
                <strong>Registered Users:</strong> {event.registeredUsers.length}
              </p>

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

                {event.comments.length < event.maxComments ? (
                  <form
                    className="mt-4"
                    onSubmit={(e) => handleCommentSubmit(e, event.id)}
                  >
                    <input
                      type="text"
                      placeholder="Your name"
                      className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
                    >
                      Submit Comment
                    </button>
                  </form>
                ) : (
                  <p className="text-red-500 mt-4">Maximum comments reached.</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Registration Form */}
      {isRegistering && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
            <form onSubmit={handleRegistrationSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                value={registrationData.name}
                onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Age"
                className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                value={registrationData.age}
                onChange={(e) => setRegistrationData({ ...registrationData, age: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                value={registrationData.contactNumber}
                onChange={(e) => setRegistrationData({ ...registrationData, contactNumber: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                value={registrationData.email}
                onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                value={registrationData.address}
                onChange={(e) => setRegistrationData({ ...registrationData, address: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="University/College Name"
                className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                value={registrationData.university}
                onChange={(e) => setRegistrationData({ ...registrationData, university: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Registration Fees (if applicable)"
                className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                value={registrationData.fees}
                onChange={(e) => setRegistrationData({ ...registrationData, fees: e.target.value })}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
              >
                Submit Registration
              </button>
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-500 mt-2"
                onClick={() => setIsRegistering(false)}
              >
                Cancel

             </button>
            </form>
            </div>
            </div>
      )}
      </div>
      )}
    

export default CommunityPage;
