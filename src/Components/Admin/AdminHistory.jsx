import React, { useEffect, useState } from "react";

const AdminHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = () => {
      const today = new Date().toISOString().split("T")[0];
      const historyData = JSON.parse(localStorage.getItem("adminHistory")) || { date: today, records: [] };
      setHistory(historyData.records);
    };

    fetchHistory();

    window.addEventListener("storage", fetchHistory);
    return () => window.removeEventListener("storage", fetchHistory);
  }, []);

  const reverseDecision = (id, type, newStatus) => {
    // Update Local Storage
    const today = new Date().toISOString().split("T")[0];
    const historyData = JSON.parse(localStorage.getItem("adminHistory")) || { date: today, records: [] };

    const updatedHistory = historyData.records.map((record) =>
      record.id === id && record.type === type ? { ...record, status: newStatus } : record
    );

    localStorage.setItem("adminHistory", JSON.stringify({ date: today, records: updatedHistory }));

    // Update UI
    setHistory(updatedHistory);

    // Update Dashboard Data (Trigger Change)
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-indigo-600 text-center">Admin History</h1>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Approval & Rejection History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {history.map((record, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md border">
              <p><strong>ID:</strong> {record.id}</p>
              <p><strong>Type:</strong> {record.type}</p>
              <p><strong>Status:</strong> {record.status}</p>
              <p><strong>Time:</strong> {record.timestamp}</p>

              <div className="flex gap-2 mt-2">
                {record.status !== "approved" && (
                  <button onClick={() => reverseDecision(record.id, record.type, "approved")} className="bg-blue-500 text-white px-3 py-1 rounded-md">
                    Approve
                  </button>
                )}
                {record.status !== "rejected" && (
                  <button onClick={() => reverseDecision(record.id, record.type, "rejected")} className="bg-red-500 text-white px-3 py-1 rounded-md">
                    Reject
                  </button>
                )}
                {record.status !== "pending" && (
                  <button onClick={() => reverseDecision(record.id, record.type, "pending")} className="bg-green-500 text-white px-3 py-1 rounded-md">
                    Mark Pending
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHistory;
