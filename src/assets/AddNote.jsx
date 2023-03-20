import React, { useContext, useState } from "react";
import { handleDeleteAddContext } from "../App";

const AddNote = () => {
  const { addNote } = useContext(handleDeleteAddContext);
  const [text, setText] = useState("");

  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  const handleSave = () => {
    if (text.trim().length > 0) {
      addNote(text);
      setText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="type to add a note..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - text.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
