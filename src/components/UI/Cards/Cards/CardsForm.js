import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./CardsForm.module.css";
import AddCardErrorModal from "../../../Modals/AddCardErrorModal/AddCardErrorModal";
import AuthContext from "../../../../context/auth-context";

const CardsForm = (props) => {
  const [playerName, setPlayerName] = useState("");
  const playerLvlRef = useRef(null);
  const playerStrRef = useRef(null);
  const playerFinRef = useRef(null);
  const playerIntRef = useRef(null);
  const playerConRef = useRef(null);
  const playerMemRef = useRef(null);
  const playerWitRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const nameChangeHandler = (event) => {
    setPlayerName(event.target.value);
  };

  const id = localStorage.getItem("userId");

  useEffect(() => {
    if (
      !playerName ||
      !playerLvlRef ||
      !playerStrRef ||
      !playerFinRef ||
      !playerIntRef ||
      !playerConRef ||
      !playerMemRef ||
      !playerWitRef
    ) {
      setIsDisabled(true);
    } else if (
      !!playerName &&
      !!playerLvlRef &&
      !!playerStrRef &&
      !!playerFinRef &&
      !!playerIntRef &&
      !!playerConRef &&
      !!playerMemRef &&
      !!playerWitRef
    ) {
      setIsDisabled(false);
    }
  }, [
    playerName,
    playerLvlRef,
    playerStrRef,
    playerFinRef,
    playerIntRef,
    playerConRef,
    playerMemRef,
    playerWitRef,
  ]);

  const resetHandler = () => {
    setPlayerName("");
    playerLvlRef.current.value = null;
    playerStrRef.current.value = null;
    playerFinRef.current.value = null;
    playerIntRef.current.value = null;
    playerConRef.current.value = null;
    playerMemRef.current.value = null;
    playerWitRef.current.value = null;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      playerLvlRef.current.value > 20 ||
      (playerLvlRef.current.value < 1 && playerStrRef.current.value > 20) ||
      (playerStrRef.current.value < 1 && playerFinRef.current.value > 20) ||
      (playerFinRef.current.value < 1 && playerIntRef.current.value > 20) ||
      (playerIntRef.current.value < 1 && playerConRef.current.value > 20) ||
      (playerConRef.current.value < 1 && playerMemRef.current.value > 20) ||
      (playerMemRef.current.value < 1 && playerWitRef.current.value > 20) ||
      playerWitRef.current.value < 1
    ) {
      setShowModal(true);
    } else if (
      playerLvlRef.current.value >= 1 &&
      playerLvlRef.current.value <= 20 &&
      playerStrRef.current.value >= 1 &&
      playerStrRef.current.value <= 20 &&
      playerFinRef.current.value >= 1 &&
      playerFinRef.current.value <= 20 &&
      playerIntRef.current.value >= 1 &&
      playerIntRef.current.value <= 20 &&
      playerConRef.current.value >= 1 &&
      playerConRef.current.value <= 20 &&
      playerMemRef.current.value >= 1 &&
      playerMemRef.current.value <= 20 &&
      playerWitRef.current.value >= 1 &&
      playerWitRef.current.value <= 20
    ) {
      const playerData = {
        name: playerName,
        lvl: playerLvlRef.current.value,
        str: playerStrRef.current.value,
        fin: playerFinRef.current.value,
        int: playerIntRef.current.value,
        con: playerConRef.current.value,
        mem: playerMemRef.current.value,
        wit: playerWitRef.current.value,
      };

      async function postCardHandler(playerData) {
        const response = await fetch(
          `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${id}/cards.json`,
          {
            method: "POST",
            body: JSON.stringify(playerData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          props.updateCardList();
        }
        console.log(data);
      }
      postCardHandler(playerData);
    }
    resetHandler();
  };

  return (
    // <div className={styles.cardsFormContainer}>
    <form className={styles.cardsForm} onSubmit={submitHandler}>
      {showModal ? (
        <div className={styles.modalPlacementHelper}>
          <AddCardErrorModal
            show={showModal}
            hide={() => setShowModal(false)}
          />
        </div>
      ) : null}
      <div className={styles.cardNameContainer}>
        <input
          className={styles.cardNameInput}
          type="text"
          value={playerName}
          onChange={nameChangeHandler}
          title="Name"
          placeholder="Name"
        />
        <button
          onClick={resetHandler}
          className={
            isDisabled
              ? "material-icons md-light md-inactive"
              : "material-icons md-light undo"
          }
          // className="material-icons md-light undo"
          type="submit"
          disabled={isDisabled}
          title={isDisabled ? "Enter something to clear it" : null}
        >
          undo
        </button>
      </div>
      <div className={styles.attributes}>
        <span />
        <input
          className="inputField"
          max="20"
          min="1"
          placeholder="LVL"
          ref={playerLvlRef}
          title="Level"
          type="number"
        />
        <span />
        <input
          className="inputField"
          max="20"
          min="1"
          placeholder="STR"
          ref={playerStrRef}
          title="Strength"
          type="number"
        />
        <input
          className="inputField"
          max="20"
          min="1"
          placeholder="FIN"
          ref={playerFinRef}
          title="Finesse"
          type="number"
        />
        <input
          className="inputField"
          max="20"
          min="1"
          placeholder="INT"
          ref={playerIntRef}
          type="number"
        />
        <input
          className="inputField"
          max="20"
          min="1"
          placeholder="CON"
          ref={playerConRef}
          title="Constitution"
          type="number"
        />
        <input
          className="inputField"
          max="20"
          min="1"
          placeholder="MEM"
          ref={playerMemRef}
          title="Memory"
          type="number"
        />
        <input
          className="inputField"
          max="20"
          min="1"
          placeholder="WIT"
          ref={playerWitRef}
          title="Wits"
          type="number"
        />
      </div>
      <nav className="submitButtonContainer">
        <button
          // className={isDisabled ? "submitButton__disabled" : "submitButton"}
          className={
            isDisabled
              ? "material-icons md-light md-inactive"
              : "material-icons md-light save"
          }
          disabled={isDisabled}
          // onClick={submitHandler}
          title={
            isDisabled ? "Please fill out all entries before submitting" : null
          }
          type="submit"
        >
          save
          {/* <span className="material-icons md-light save">save</span> */}
        </button>
      </nav>
    </form>
    //</div>
  );
};

export default CardsForm;
