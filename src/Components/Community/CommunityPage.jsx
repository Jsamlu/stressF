import React, { useState } from "react";

const CommunityPage = () => {
  // Example data for events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tree Plantation Drive",
      date: "Oct 10, 2024",
      time: "10:00 AM - 2:00 PM",
      org: "GreenEarth NGO",
      address: "123 Green Street, Cityville",
      comments: [],
      pinnedComment: null,
      image: null, // New field for image
      registeredUsers: [],
    },
    {
      id: 2,
      title: "Mental Health Seminar",
      date: "Oct 15, 2024",
      time: "1:00 PM - 4:00 PM",
      org: "Healthcare Center ABC",
      address: "456 Wellness Ave, Healthtown",
      comments: [],
      pinnedComment: null,
      image: null,
      registeredUsers: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    org: "",
    address: "",
    image: null,
  });
  const [isRegistering, setIsRegistering] = useState(false);

  // Handle adding a comment
  const handleCommentSubmit = (e, eventId) => {
    e.preventDefault();
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              comments: [
                ...event.comments,
                { user: userName, text: newComment },
              ],
            }
          : event
      )
    );
    setNewComment("");
    setUserName("");
  };

  // Handle registering for an event
  const handleRegister = (eventId) => {
    setSelectedEventId(eventId);
    setIsRegistering(true);
  };

  // Handle adding a new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents((prevEvents) => [
      ...prevEvents,
      {
        ...newEvent,
        id: prevEvents.length + 1,
        comments: [],
        pinnedComment: null,
        registeredUsers: [],
      },
    ]);
    setNewEvent({
      title: "",
      date: "",
      time: "",
      org: "",
      address: "",
      image: null,
    });
  };

  // Handle pinning a comment
  const handlePinComment = (eventId, commentIndex) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              pinnedComment: event.comments[commentIndex],
            }
          : event
      )
    );
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent((prevEvent) => ({
          ...prevEvent,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Community Page
      </h1>

      {/* Event Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
        <ul className="space-y-6">
          {events.map((event) => (
            <li key={event.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p>
                <strong>Date:</strong> {event.date} <strong>Time:</strong>{" "}
                {event.time}
              </p>
              <p>
                <strong>Organization:</strong> {event.org}
              </p>
              <p>
                <strong>Location:</strong> {event.address}
              </p>

              {/* Event Image */}
              {event.image && (
                <img
                  src={event.image}
                  alt="Event"
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                />
              )}

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
                  {event.pinnedComment && (
                    <li className="bg-yellow-100 p-2 rounded">
                      <strong>Pinned:</strong> {event.pinnedComment.text}
                    </li>
                  )}
                  {event.comments.slice(0, 10).map((comment, index) => (
                    <li key={index} className="bg-gray-100 p-2 rounded">
                      <strong>{comment.user}:</strong> {comment.text}
                      <button
                        className="text-indigo-600 ml-4"
                        onClick={() => handlePinComment(event.id, index)}
                      >
                        Pin Comment
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Add Comment */}
                <form
                  className="mt-4"
                  onSubmit={(e) => handleCommentSubmit(e, event.id)}
                >
                  <input
                    type="text"
                    placeholder="Add a comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
                  >
                    Submit Comment
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Add Event Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Event</h2>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Event Title"
            className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Event Date"
            className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
            value={newEvent.date}
            onChange={(e) =>
              setNewEvent({ ...newEvent, date: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Event Time"
            className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
            value={newEvent.time}
            onChange={(e) =>
              setNewEvent({ ...newEvent, time: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Organization"
            className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
            value={newEvent.org}
            onChange={(e) =>
              setNewEvent({ ...newEvent, org: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
            value={newEvent.address}
            onChange={(e) =>
              setNewEvent({ ...newEvent, address: e.target.value })
            }
            required
          />
          <input
            type="file"
            className="px-3 py-2 border border-gray-300 rounded-lg w-full mb-2"
            onChange={handleImageUpload}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
          >
            Add Event
          </button>
        </form>
      </section>
    </div>
  );
};

export default CommunityPage;
