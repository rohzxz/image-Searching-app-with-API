import { createContext, useEffect, useState } from "react";
import NotesList from "./assets/NotesList";
import { nanoid } from "nanoid";
import Search from "./assets/Search";
import Header from "./assets/Header";
export const handleDeleteAddContext = createContext();

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: new Date().toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: new Date().toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: new Date().toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: "this is my new note",
      date: new Date().toLocaleDateString(),
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      data: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <handleDeleteAddContext.Provider value={{ deleteNote, addNote }}>
      <div className={`${dark && "dark-mode"}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDark} />
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
          />
        </div>
      </div>
    </handleDeleteAddContext.Provider>
  );
}

export default App;
