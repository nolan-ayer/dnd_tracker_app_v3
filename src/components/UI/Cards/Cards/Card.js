import { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import Inventory from "./Inventory";
import RemoveElementModal from "../../../Modals/RemoveElementModal/RemoveElementModal";

const Card = (props) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  async function deleteHandler() {
    await fetch(
      `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
        "userId"
      )}/cards/${props.id}.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      },
      console.log(`deleted ${props.id}`)
    );
    window.location.reload(true);
  }

  const editHandler = () => {
    console.log("selected for editing");
  };

  return (
    <div className={styles.card} key={props.id}>
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
      <span className={styles.cardHeader}>
        <h5 className={styles.cardTitle}>{props.name}</h5>
        <nav className={styles.cardButtonContainer__One}>
          {/* <button className="submitButton" onClick={editHandler}>
            Edit
          </button> */}
          <button
            className="submitButton"
            onClick={() => {
              setShowRemoveModal(true);
            }}
          >
            Delete
          </button>
        </nav>
      </span>
      <ul>
        <div className={styles.cardInnerOne__One}>
          <li>LVL: {props.lvl}</li>
          <div className={styles.cardInnerOne__Two}>
            <ul className={styles.cardInnerOne__Three}>
              <li>STR: {props.str}</li>
              <li>FIN: {props.fin}</li>
              <li>INT: {props.int}</li>
            </ul>
            <ul className={styles.cardInnerOne__Three}>
              <li>CON: {props.con}</li>
              <li>MEM: {props.mem}</li>
              <li>WIT: {props.wit}</li>
            </ul>
          </div>
        </div>
      </ul>
      {/* <ul className={styles.cardInnerTwo__One}>

      </ul> */}
    </div>
  );
};

export default Card;
