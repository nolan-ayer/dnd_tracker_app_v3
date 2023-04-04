import styles from "../AddCardErrorModal/AddCardErrorModal.module.css";

const RemoveElementModal = ({ removeItem, cancel }) => {
  return (
    <div className={styles.modalBackdrop}>
      <section>
        <article className={styles.modalMain}>
          WARNING, YOU ARE ABOUT TO DELETE SOMETHING. THIS CANNOT BE DONE. WOULD
          YOU LIKE TO PROCEED?
        </article>
        <nav className={styles.removeElementNav}>
          <button
            class="material-icons md-light save"
            onClick={removeItem}
            title="Proceed"
          >
            check
          </button>
          <button
            class="material-icons md-light delete"
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
