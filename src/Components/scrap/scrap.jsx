import React, { useState } from "react";

const JournalApp = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [editMode, setEditMode] = useState({ isEditing: false, index: null });

  const handleAddNote = () => {
    if (editMode.isEditing) {
      const updatedNotes = [...notes];
      updatedNotes[editMode.index] = currentNote;
      setNotes(updatedNotes);
      setEditMode({ isEditing: false, index: null });
    } else {
      setNotes([...notes, currentNote]);
    }
    setCurrentNote("");
  };

  const handleEditNote = (index) => {
    setCurrentNote(notes[index]);
    setEditMode({ isEditing: true, index });
  };

  const handleRemoveNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div style={styles.container} className="min-w-full min-h-screen">
      <h2 style={styles.heading}>Journal App</h2>
      <textarea
        placeholder="Write your note here..."
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        style={styles.textarea}
      ></textarea>
      <button
        onClick={handleAddNote}
        style={styles.addButton}
        disabled={!currentNote.trim()}
      >
        {editMode.isEditing ? "Update Note" : "Add Note"}
      </button>
      <div style={styles.notesContainer}>
        {notes.map((note, index) => (
          <div key={index} style={styles.note}>
            <p>{note}</p>
            <div style={styles.actions}>
              <button
                onClick={() => handleEditNote(index)}
                style={styles.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleRemoveNote(index)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url('https://images.pexels.com/photos/10526896/pexels-photo-10526896.jpeg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
    fontFamily: "'Caveat', cursive",
    fontSize: "2em",
    color: "#2c3e50",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontFamily: "'Caveat', cursive",
    color: "#2c3e50",
    boxShadow: "inset 0 0 0 1px rgba(44, 62, 80, 0.4)", // Subtle guideline
  },
  addButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "transparent",
    color: "#2c3e50",
    fontSize: "16px",
    border: "1px solid #2c3e50",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "none",
  },
  notesContainer: {
    marginTop: "20px",
  },
  note: {
    backgroundColor: "transparent", // Fully transparent
    border: "none",
    marginBottom: "10px",
    fontFamily: "'Caveat', cursive",
    fontSize: "16px",
    color: "#2c3e50",
    textShadow: "1px 1px 2px rgba(255, 255, 255, 0.6)",
  },
  actions: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "transparent",
    color: "#2c3e50",
    border: "1px solid #2c3e50",
    borderRadius: "5px",
    cursor: "pointer",
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "transparent",
    color: "#2c3e50",
    border: "1px solid #2c3e50",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default JournalApp;
