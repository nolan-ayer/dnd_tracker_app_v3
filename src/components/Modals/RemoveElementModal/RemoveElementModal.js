import styles from "../AddCardErrorModal/AddCardErrorModal.module.css";

const RemoveElementModal = ({ removeItem, cancel }) => {
  return (
    <main className={styles.modalBackdrop}>
      <section>
        <article className={styles.modalMain}>
          WARNING, YOU ARE ABOUT TO DELETE SOMETHING. THIS CANNOT BE DONE. WOULD
          YOU LIKE TO PROCEED?
        </article>
        <nav className={styles.removeElementNav}>
          <button className="submitButton" onClick={removeItem}>
            Proceed
          </button>
          <button className="submitButton" onClick={cancel}>
            Cancel
          </button>
        </nav>
      </section>
    </main>
  );
};

export default RemoveElementModal;
