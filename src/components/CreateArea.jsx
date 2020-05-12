import React, { useState, Fragment } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const { title, content } = note;
  return (
    <Fragment>
      <form
        className="create-note"
        onSubmit={(event) => {
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
        <Zoom in={true}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </Fragment>
  );
}

export default CreateArea;
