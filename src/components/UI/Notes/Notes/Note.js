import { useState } from "react";
import styles from "./Note.module.css";
import RemoveElementModal from "../../../Modals/RemoveElementModal/RemoveElementModal";

const Note = (props) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  async function deleteHandler() {
    await fetch(
      `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
        "userId"
      )}/notes/${props.id}.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      },
      console.log(`deleted ${props.id}`)
    );
    props.updateNoteList();
  }

  return (
    <li className={styles.note} key={props.id}>
      {showRemoveModal ? (
        <div className={styles.modalPlacementHelper}>
          <RemoveElementModal
            cancel={() => {
              setShowRemoveModal(false);
            }}
            removeItem={() => {
              deleteHandler();
              setShowRemoveModal(false);
            }}
          />
        </div>
      ) : null}
      <h5 className={styles.noteHeader}>
        <section>{props.title}</section>
        <nav>
          <button
            className="submitButton"
            onClick={() => {
              setShowRemoveModal(true);
            }}
          >
            <span class="material-icons md-light" title="Delete">
              delete
            </span>
          </button>
        </nav>
      </h5>
      <article className={styles.noteMain}>{props.body}</article>
    </li>
  );
};

export default Note;
