import React, { useState, useEffect } from "react";
import Sfooter from "../Sfooter";
import S_header from "../S_header";

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
    <>
      <div className="md:hidden"><S_header/></div>
      <div className="md:hidden h-[100px] w-full bg-blue-600"></div>
      <div className=" bg-indigo-200 min-h-[80vh] p-5 pt-[100px]">
        <div className="w-[80%] mx-auto bg-white p-6 rounded-md shadow-md">
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
      <Sfooter />
    </>
  );
}

export default Journal;
