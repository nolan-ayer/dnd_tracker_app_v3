import React, { useState } from "react";
import styles from "./AddCardErrorModal.module.css";

const AddCardErrorModal = ({ hide }) => {
  return (
    <div className={styles.modalBackdropWithHover} onClick={hide}>
      <section className={styles.modalMain}>
        All numerical values must fall between 1 and 20.
        <hr />
        Click anywhere to dismiss.
      </section>
    </div>
  );
};

export default AddCardErrorModal;
