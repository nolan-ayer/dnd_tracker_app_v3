import React, { useState, useRef } from "react";
import styles from "./EditCard.module.css";

const EditCard = (props) => {
  const [updatedName, setUpdatedName] = useState("");
  const updatedLvlRef = useRef(null);
  const updatedStrRef = useRef(null);
  const updatedFinRef = useRef(null);
  const updatedIntRef = useRef(null);
  const updatedConRef = useRef(null);
  const updatedMemRef = useRef(null);
  const updatedWitRef = useRef(null);

  const updatedNameChangeHandler = (event) => {
    setUpdatedName(event.target.value);
  };

  const saveUpdatesHandler = (event) => {
    event.preventDefault();
    updateHandler();
    console.log("updates saved");
    props.cancel();
  };

  async function updateHandler() {
    const updatedData = {
      name: updatedName,
      lvl: updatedLvlRef.current.value,
      str: updatedStrRef.current.value,
      fin: updatedFinRef.current.value,
      int: updatedIntRef.current.value,
      con: updatedConRef.current.value,
      mem: updatedMemRef.current.value,
      wit: updatedWitRef.current.value,
    };

    const response = await fetch(
      `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
        "userId"
      )}/cards.json`,
      {
        method: "POST",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.removeItem();
    props.updateCardList();
  }

  return (
    <form className={styles.editCardForm}>
      <section className={styles.nameRow}>
        <input
          className={styles.nameInput}
          value={updatedName}
          title={`Previous name: ${props.name}`}
          onChange={updatedNameChangeHandler}
          placeholder="Name"
        />
      </section>
      <section className={styles.attributeRow}>
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          ref={updatedLvlRef}
          title={`Previous LVL: ${props.lvl}`}
          placeholder="LVL"
        />
      </section>

      <section className={styles.attributeRow2}>
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          ref={updatedStrRef}
          title={`Previous STR: ${props.str}`}
          placeholder="STR"
        />
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          ref={updatedFinRef}
          title={`Previous FIN: ${props.fin}`}
          placeholder="FIN"
        />
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          ref={updatedIntRef}
          title={`Previous INT: ${props.int}`}
          placeholder="INT"
        />
      </section>
      <section className={styles.attributeRow2}>
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          ref={updatedConRef}
          title={`Previous CON: ${props.con}`}
          placeholder="CON"
        />
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          ref={updatedMemRef}
          title={`Previous MEM: ${props.mem}`}
          placeholder="MEM"
        />
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          ref={updatedWitRef}
          title={`Previous WIT: ${props.wit}`}
          placeholder="WIT"
        />
      </section>

      <nav className="submitButtonContainer">
        <button
          type="submit"
          className="submitButton"
          onClick={saveUpdatesHandler}
        >
          Save
        </button>
        <button className="submitButton" onClick={props.cancel}>
          Cancel
        </button>
      </nav>
    </form>
  );
};

export default EditCard;
