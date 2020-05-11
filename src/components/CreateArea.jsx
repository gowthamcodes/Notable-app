import React, { useState, Fragment } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  const { title, content } = note;
  return (
    <Fragment>
      <form
        className="create-note"
        onSubmit={event => {
          props.onAdd(note);
          setNote({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button>Add</button>
      </form>
    </Fragment>
  );
}

export default CreateArea;
