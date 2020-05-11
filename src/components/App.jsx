import React, { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prev => {
      return [...prev, note];
    });
  }

  function deleteNote(id) {
    setNotes(items => {
      return items.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Fragment>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={uuidv4()}
            id={index}
            onDelete={deleteNote}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </Fragment>
  );
}

export default App;
