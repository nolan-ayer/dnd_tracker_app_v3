import Note from "./Note";
import NotesInput from "./NotesForm";
import styles from "./NotesContainer.module.css";

const NotesContainer = (props) => {
  const notes = props.notes;
  const noteContentsArray = [];

  notes.forEach((note) => {
    noteContentsArray.push({
      key: note.id,
      id: note.id,
      title: note.title,
      body: note.body,
    });
  });

  return (
    <ul className={styles.notesContainer}>
      <NotesInput updateNoteList={props.updateNoteList} />
      {noteContentsArray.map((contents) => (
        <Note
          key={contents.id}
          id={contents.id}
          title={contents.title}
          body={contents.body}
          updateNoteList={props.updateNoteList}
        />
      ))}
    </ul>
  );
};

export default NotesContainer;
