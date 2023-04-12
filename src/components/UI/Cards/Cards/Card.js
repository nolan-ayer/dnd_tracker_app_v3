import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Cards.module.css";
import Inventory from "./Inventory";
import RemoveElementModal from "../../../Modals/RemoveElementModal/RemoveElementModal";
import EditCard from "./EditCard";

const Card = (props) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
    props.updateCardList();
  }

  const showEditHandler = () => {
    console.log("selected for editing");
    setIsEditing(true);
  };

  return (
    <li className={styles.card} key={props.id}>
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
      {isEditing ? (
        <div className={styles.modalPlacementHelper}>
          <EditCard
            id={props.id}
            name={props.name}
            lvl={props.lvl}
            str={props.str}
            fin={props.fin}
            int={props.int}
            con={props.con}
            mem={props.mem}
            wit={props.wit}
            cancel={() => {
              setIsEditing(false);
            }}
            removeItem={() => {
              deleteHandler();
              setShowRemoveModal(false);
            }}
            updateCardList={props.updateCardList}
          />
        </div>
      ) : null}
      <h5 className={styles.cardTitle}>{props.name}</h5>
      <ul className={styles.attributeGrid}>
        <li />
        <li>LVL: {props.lvl}</li>
        <li />
        <li>STR: {props.str}</li>
        <li>FIN: {props.fin}</li>
        <li>INT: {props.int}</li>
        <li>CON: {props.con}</li>
        <li>MEM: {props.mem}</li>
        <li>WIT: {props.wit}</li>
      </ul>
      {/* <ul className={styles.cardInnerTwo__One}>

      </ul> */}
      <nav className={styles.cardButtonContainer}>
        <button
          className="material-icons md-light edit"
          onClick={showEditHandler}
          title="Edit"
        >
          edit
        </button>
        <button
          className="material-icons md-light delete"
          onClick={() => {
            setShowRemoveModal(true);
          }}
          title="Delete"
        >
          delete
        </button>
      </nav>
    </li>
  );
};

export default Card;
