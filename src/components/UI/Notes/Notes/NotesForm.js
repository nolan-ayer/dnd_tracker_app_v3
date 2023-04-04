import { useState, useRef, useEffect } from "react";
import styles from "./NotesForm.module.css";

const NotesForm = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
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
        props.updateNoteList();
        setIsLoading(false);
      }
      console.log(data);
    }
    postNoteHandler(notesData);
    resetHandler();
  };

  useEffect(() => {
    if (noteTitle.trim() == "" || noteBody.trim() == "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [noteTitle, noteBody]);

  return (
    <form className={styles.notesForm}>
      <div>
        <textarea
          className={styles.notesTitleInput}
          onChange={noteTitleChangeHandler}
          placeholder="Title"
          type="text"
          value={noteTitle}
        />
        <textarea
          className={styles.notesBodyInput}
          onChange={noteBodyChangeHandler}
          placeholder="Note body"
          value={noteBody}
        />
        <nav
          className={
            !isLoading ? "submitButtonContainer" : "submitButtonContainer2"
          }
        >
          {isLoading && <p className="response__isLoading">updating list...</p>}
          <button
            // className={isDisabled ? "submitButton__disabled" : "submitButton"}
            class="material-icons md-light save"
            disabled={isDisabled}
            onClick={submitHandler}
            title={isDisabled ? "Fields must not be empty" : null}
            type="submit"
          >
            save
          </button>
        </nav>
      </div>
    </form>
  );
};

export default NotesForm;
