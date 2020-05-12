import React, { useState, Fragment } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setClicked(true);
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
        {isClicked && (
          <input
            onChange={handleChange}
            autoComplete="off"
            name="title"
            placeholder="Title"
            value={title}
          />
        )}

        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          value={content}
        />

        <Zoom in={isClicked}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </Fragment>
  );
}

export default CreateArea;
