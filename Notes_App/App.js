
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const deleteNote = (idx) => {
    setNotes(notes.filter((_, index) => index !== idx));
  };

  return (
    <div className="container">
      <h1>Notes App</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Type your note"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? addNote() : null)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx}>
            {note}
            <button className="delete" onClick={() => deleteNote(idx)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
