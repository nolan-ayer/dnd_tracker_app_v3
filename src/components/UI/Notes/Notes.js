import { useEffect, useState } from "react";
import NotesContainer from "./Notes/NotesContainer";

const Notes = () => {
  const [playerNotes, setPlayerNotes] = useState([]);

  async function fetchNotesHandler() {
    const response = await fetch(
      `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
        "userId"
      )}/notes.json`
    );
    const data = await response.json();

    if (!response.ok) {
      console.log(
        "Oops! It looks like something went wrong. Please reload the page and try again."
      );
    }

    const loadedNotes = [];

    for (const key in data) {
      loadedNotes.push({
        id: key,
        title: data[key].noteTitle,
        body: data[key].noteBody,
      });
    }
    setPlayerNotes(loadedNotes);
  }

  useEffect(() => {
    fetchNotesHandler();
  }, []);

  return (
    <>
      <NotesContainer notes={playerNotes} updateNoteList={fetchNotesHandler} />
    </>
  );
};

export default Notes;
