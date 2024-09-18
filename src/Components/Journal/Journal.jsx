import React, { useState, useEffect } from "react";

function Journal() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (noteInput.trim() === "") return;
    if (editIndex !== null) {
      const updatedNotes = notes.map((note, index) =>
        index === editIndex ? noteInput : note
      );
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, noteInput]);
    }
    setNoteInput("");
  };

  const editNote = (index) => {
    setNoteInput(notes[index]);
    setEditIndex(index);
  };

  const removeNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className=" bg-gray-100 p-5">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Journal App</h1>

        <textarea
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Write your note here..."
          className="w-full p-2 border rounded-md mb-4"
          rows="4"
        />

        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {editIndex !== null ? "Update Note" : "Add Note"}
        </button>

        <div className="mt-6">
          {notes.map((note, index) => (
            <div key={index} className="border p-4 rounded-md bg-gray-50">
              <p className="p-2 text-lg mb-2">{note}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => editNote(index)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeNote(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journal;
