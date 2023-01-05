import { useState, useRef, useEffect } from "react";
import styles from "./NotesForm.module.css";

const NotesForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const noteTitleChangeHandler = (event) => {
    setNoteTitle(event.target.value);
  };

  const noteBodyChangeHandler = (event) => {
    setNoteBody(event.target.value);
  };

  const resetHandler = () => {
    setNoteTitle("");
    setNoteBody("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const notesData = { noteTitle, noteBody };
    async function postNoteHandler(notesData) {
      const response = await fetch(
        `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
          "userId"
        )}/notes.json`,
        {
          method: "POST",
          body: JSON.stringify(notesData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        window.location.reload(true);
      }
      console.log(data);
    }
    postNoteHandler(notesData);
    resetHandler();
  };

  useEffect(() => {
    if (!noteTitle || !noteBody) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [noteTitle, noteBody]);

  return (
    <form className={styles.notesForm}>
      <div className={styles.notesInputPlacementHelper}>
        <textarea
          placeholder="Enter your note title here"
          className={styles.notesTitleInput}
          value={noteTitle}
          onChange={noteTitleChangeHandler}
        />
        <textarea
          placeholder="Enter your note here"
          className={styles.notesBodyInput}
          value={noteBody}
          onChange={noteBodyChangeHandler}
        />
      </div>
      <div className="submitButtonContainer">
        <button
          type="submit"
          className={isDisabled ? "submitButton__disabled" : "submitButton"}
          disabled={isDisabled}
          title={
            isDisabled ? "Please fill out all fields before submitting" : null
          }
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NotesForm;
