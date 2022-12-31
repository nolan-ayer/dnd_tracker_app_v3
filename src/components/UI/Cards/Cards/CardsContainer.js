import { useContext } from "react";

import Card from "./Card";
import CardsForm from "./CardsForm";
import styles from "./CardsContainer.module.css";
import AuthContext from "../../../../context/auth-context";
import { useLocation } from "react-router-dom";

const CardsContainer = (props) => {
  const cards = props.cards;
  const cardContentsArray = [];

  cards.forEach((card) => {
    cardContentsArray.push({
      key: card.id,
      id: card.id,
      name: card.name,
      lvl: card.lvl,
      str: card.str,
      fin: card.fin,
      int: card.int,
      con: card.con,
      mem: card.mem,
      wit: card.wit,
    });
  });

  const location = useLocation();
  const authCtx = useContext;

  return (
    <div className={styles.cardContainer}>
      <CardsForm />
      {cardContentsArray.map((contents) => (
        <Card
          key={contents.id}
          id={contents.id}
          name={contents.name}
          lvl={contents.lvl}
          str={contents.str}
          fin={contents.fin}
          int={contents.int}
          con={contents.con}
          mem={contents.mem}
          wit={contents.wit}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
