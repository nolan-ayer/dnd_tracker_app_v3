import styles from "../AddCardErrorModal/AddCardErrorModal.module.css";

const RemoveElementModal = ({ removeItem, cancel }) => {
  return (
    <div className={styles.modalBackdrop}>
      <section>
        <article className={styles.modalMain}>
          WARNING, YOU ARE ABOUT TO DELETE SOMETHING. THIS CANNOT BE UNDONE.
          WOULD YOU LIKE TO PROCEED?
        </article>
        <nav className={styles.removeElementNav}>
          <button
            className="material-icons md-light save"
            onClick={removeItem}
            title="Proceed"
          >
            check
          </button>
          <button
            className="material-icons md-light delete"
            onClick={cancel}
            title="Cancel"
          >
            cancel
          </button>
        </nav>
      </section>
    </div>
  );
};

export default RemoveElementModal;
