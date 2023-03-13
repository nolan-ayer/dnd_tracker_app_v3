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

  const authCtx = useContext(AuthContext);

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
    console.log("clicked");
    if (
      (playerLvlRef.current.value ||
        playerStrRef.current.value ||
        playerFinRef.current.value ||
        playerIntRef.current.value ||
        playerConRef.current.value ||
        playerMemRef.current.value ||
        playerWitRef.current.value) > 20 ||
      (playerLvlRef.current.value ||
        playerStrRef.current.value ||
        playerFinRef.current.value ||
        playerIntRef.current.value ||
        playerConRef.current.value ||
        playerMemRef.current.value ||
        playerWitRef.current.value) < 1
    ) {
      setShowModal(true);
    } else if (
      (playerLvlRef.current.value &&
        playerStrRef.current.value &&
        playerFinRef.current.value &&
        playerIntRef.current.value &&
        playerConRef.current.value &&
        playerMemRef.current.value &&
        playerWitRef.current.value) >= 1 &&
      (playerLvlRef.current.value &&
        playerStrRef.current.value &&
        playerFinRef.current.value &&
        playerIntRef.current.value &&
        playerConRef.current.value &&
        playerMemRef.current.value &&
        playerWitRef.current.value) <= 20
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
          `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
            "userId"
          )}/cards.json`,
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
      resetHandler();
    }
  };

  return (
    <div className={styles.cardsFormContainer}>
      <form className={styles.cardsForm}>
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
            className={isDisabled ? "submitButton__disabled" : "submitButton"}
            type="submit"
            disabled={isDisabled}
            title={isDisabled ? "Enter something to clear it" : null}
          >
            <span class="material-icons md-light undo">undo</span>
          </button>
        </div>

        <ul className={styles.attributes}>
          <li />
          <li>
            <input
              className="inputField"
              type="number"
              min="1"
              max="20"
              ref={playerLvlRef}
              title="Level"
              placeholder="LVL"
            />
          </li>
          <li />
          <li>
            <input
              className="inputField"
              type="number"
              min="1"
              max="20"
              ref={playerStrRef}
              title="Strength"
              placeholder="STR"
            />
          </li>
          <li>
            <input
              className="inputField"
              type="number"
              min="1"
              max="20"
              ref={playerFinRef}
              title="Finesse"
              placeholder="FIN"
            />
          </li>
          <li>
            <input
              className="inputField"
              type="number"
              min="1"
              max="20"
              ref={playerIntRef}
              title="Intelligence "
              placeholder="INT"
            />
          </li>
          <li>
            <input
              className="inputField"
              type="number"
              min="1"
              max="20"
              ref={playerConRef}
              title="Constitution"
              placeholder="CON"
            />
          </li>
          <li>
            <input
              className="inputField"
              type="number"
              min="1"
              max="20"
              ref={playerMemRef}
              title="Memory"
              placeholder="MEM"
            />
          </li>
          <li>
            <input
              className="inputField"
              type="number"
              min="1"
              max="20"
              ref={playerWitRef}
              title="Wits"
              placeholder="WIT"
            />
          </li>
        </ul>
        <nav className="submitButtonContainer">
          <button
            className={isDisabled ? "submitButton__disabled" : "submitButton"}
            type="submit"
            onClick={submitHandler}
            disabled={isDisabled}
            title={
              isDisabled
                ? "Please fill out all entries before submitting"
                : null
            }
          >
            <span class="material-icons md-light save">save</span>
          </button>
        </nav>
      </form>
    </div>
  );
};

export default CardsForm;
