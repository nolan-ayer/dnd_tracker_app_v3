import React, { useState } from "react";
import styles from "./EditCard.module.css";

const EditCard = (props) => {
  const [updatedName, setUpdatedName] = useState(props.name);
  const [updatedLvl, setUpdatedLvl] = useState(props.lvl);
  const [updatedStr, setUpdatedStr] = useState(props.str);
  const [updatedFin, setUpdatedFin] = useState(props.fin);
  const [updatedInt, setUpdatedInt] = useState(props.int);
  const [updatedCon, setUpdatedCon] = useState(props.con);
  const [updatedMem, setUpdatedMem] = useState(props.mem);
  const [updatedWit, setUpdatedWit] = useState(props.wit);

  const updatedNameChangeHandler = (event) => {
    setUpdatedName(event.target.value);
  };
  const updatedLvlChangeHandler = (event) => {
    setUpdatedLvl(event.target.value);
  };
  const updatedStrChangeHandler = (event) => {
    setUpdatedStr(event.target.value);
  };
  const updatedFinChangeHandler = (event) => {
    setUpdatedFin(event.target.value);
  };
  const updatedIntChangeHandler = (event) => {
    setUpdatedInt(event.target.value);
  };
  const updatedConChangeHandler = (event) => {
    setUpdatedCon(event.target.value);
  };
  const updatedMemChangeHandler = (event) => {
    setUpdatedMem(event.target.value);
  };
  const updatedWitChangeHandler = (event) => {
    setUpdatedWit(event.target.value);
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
      lvl: updatedLvl,
      str: updatedStr,
      fin: updatedFin,
      int: updatedInt,
      con: updatedCon,
      mem: updatedMem,
      wit: updatedWit,
    };

    const response = await fetch(
      `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
        "userId"
      )}/cards/${props.id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
          value={updatedLvl}
          onChange={updatedLvlChangeHandler}
          //   ref={updatedLvlRef}
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
          value={updatedStr}
          onChange={updatedStrChangeHandler}
          //   ref={updatedStrRef}
          title={`Previous STR: ${props.str}`}
          placeholder="STR"
        />
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          value={updatedFin}
          onChange={updatedFinChangeHandler}
          //   ref={updatedFinRef}
          title={`Previous FIN: ${props.fin}`}
          placeholder="FIN"
        />
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          value={updatedInt}
          onChange={updatedIntChangeHandler}
          //   ref={updatedIntRef}
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
          value={updatedCon}
          onChange={updatedConChangeHandler}
          //   ref={updatedConRef}
          title={`Previous CON: ${props.con}`}
          placeholder="CON"
        />
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          value={updatedMem}
          onChange={updatedMemChangeHandler}
          //   ref={updatedMemRef}
          title={`Previous MEM: ${props.mem}`}
          placeholder="MEM"
        />
        <input
          className="inputField"
          type="number"
          min="1"
          max="20"
          value={updatedWit}
          onChange={updatedWitChangeHandler}
          //   ref={updatedWitRef}
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
