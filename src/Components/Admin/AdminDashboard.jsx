import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users"); // Track selected category

  // Sample Data for Users, Professionals, Events
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "pending" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", status: "pending" },
  ]);

  const [professionals, setProfessionals] = useState([
    { id: 1, name: "Dr. Raj", qualification: "PhD Psychology", experience: "10 years", status: "pending" },
    { id: 2, name: "Dr. Sarah", qualification: "MSc Counseling", experience: "5 years", status: "pending" },
  ]);

  const [events, setEvents] = useState([
    { id: 1, title: "Mental Health Workshop", date: "2025-03-10", time: "10:00 AM", host: "XYZ Foundation", contact: "9876543210", email: "xyz@ngo.com", status: "pending" },
    { id: 2, title: "Career Guidance", date: "2025-03-15", time: "02:00 PM", host: "Career Hub", contact: "9998887776", email: "career@hub.com", status: "pending" },
  ]);

  // Function to update status and store in history
  const updateStatus = (id, type, newStatus) => {
    setUsers((prev) => prev.map((user) => (user.id === id ? { ...user, status: newStatus } : user)));
    setProfessionals((prev) => prev.map((prof) => (prof.id === id ? { ...prof, status: newStatus } : prof)));
    setEvents((prev) => prev.map((event) => (event.id === id ? { ...event, status: newStatus } : event)));

    const today = new Date().toISOString().split("T")[0];
    const historyData = JSON.parse(localStorage.getItem("adminHistory")) || { date: today, records: [] };

    // Reset history if the day has changed
    if (historyData.date !== today) {
      localStorage.setItem("adminHistory", JSON.stringify({ date: today, records: [] }));
    }

    // Add the new decision to history
    const newRecord = { id, type, status: newStatus, timestamp: new Date().toLocaleString() };
    const updatedHistory = [...historyData.records, newRecord];

    localStorage.setItem("adminHistory", JSON.stringify({ date: today, records: updatedHistory }));

    // Force update AdminHistory page
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-indigo-600 text-center">Admin Dashboard</h1>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 mt-4">
        <button onClick={() => setActiveTab("users")} className={`px-4 py-2 rounded-md ${activeTab === "users" ? "bg-indigo-600 text-white" : "bg-gray-300"}`}>
          Users
        </button>
        <button onClick={() => setActiveTab("professionals")} className={`px-4 py-2 rounded-md ${activeTab === "professionals" ? "bg-indigo-600 text-white" : "bg-gray-300"}`}>
          Professionals
        </button>
        <button onClick={() => setActiveTab("events")} className={`px-4 py-2 rounded-md ${activeTab === "events" ? "bg-indigo-600 text-white" : "bg-gray-300"}`}>
          Events
        </button>
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      <div className="mt-6">
        {/* Users Section */}
        {activeTab === "users" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pending Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.filter(user => user.status === "pending").map((user) => (
                <div key={user.id} className="bg-white p-4 rounded-md shadow-md border">
                  <p><strong>ID:</strong> {user.id}</p>
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => updateStatus(user.id, "user", "approved")} className="bg-green-500 text-white px-3 py-1 rounded-md">Approve</button>
                    <button onClick={() => updateStatus(user.id, "user", "rejected")} className="bg-red-500 text-white px-3 py-1 rounded-md">Reject</button>
                    <button onClick={() => updateStatus(user.id, "user", "pending")} className="bg-blue-500 text-white px-3 py-1 rounded-md">Pending</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Professionals Section */}
        {activeTab === "professionals" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pending Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionals.filter(prof => prof.status === "pending").map((prof) => (
                <div key={prof.id} className="bg-white p-4 rounded-md shadow-md border">
                  <p><strong>ID:</strong> {prof.id}</p>
                  <p><strong>Name:</strong> {prof.name}</p>
                  <p><strong>Qualification:</strong> {prof.qualification}</p>
                  <p><strong>Experience:</strong> {prof.experience}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => updateStatus(prof.id, "professional", "approved")} className="bg-green-500 text-white px-3 py-1 rounded-md">Approve</button>
                    <button onClick={() => updateStatus(prof.id, "professional", "rejected")} className="bg-red-500 text-white px-3 py-1 rounded-md">Reject</button>
                    <button onClick={() => updateStatus(prof.id, "professional", "pending")} className="bg-blue-500 text-white px-3 py-1 rounded-md">Pending</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Events Section */}
        {activeTab === "events" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pending Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.filter(event => event.status === "pending").map((event) => (
                <div key={event.id} className="bg-white p-4 rounded-md shadow-md border">
                  <p><strong>ID:</strong> {event.id}</p>
                  <p><strong>Title:</strong> {event.title}</p>
                  <p><strong>Date & Time:</strong> {event.date}, {event.time}</p>
                  <p><strong>Host:</strong> {event.host}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => updateStatus(event.id, "event", "approved")} className="bg-green-500 text-white px-3 py-1 rounded-md">Approve</button>
                    <button onClick={() => updateStatus(event.id, "event", "rejected")} className="bg-red-500 text-white px-3 py-1 rounded-md">Reject</button>
                    <button onClick={() => updateStatus(event.id, "event", "pending")} className="bg-blue-500 text-white px-3 py-1 rounded-md">Pending</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
