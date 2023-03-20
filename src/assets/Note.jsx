import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { handleDeleteAddContext } from "../App";
const Note = ({ id, text, date }) => {
  const { deleteNote } = useContext(handleDeleteAddContext);
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
