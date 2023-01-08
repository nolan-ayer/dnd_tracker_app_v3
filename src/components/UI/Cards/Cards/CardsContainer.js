import Card from "./Card";
import CardsForm from "./CardsForm";
import styles from "./CardsContainer.module.css";

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

  return (
    <ul className={styles.cardContainer}>
      <CardsForm updateCardList={props.updateCardList} />
      {cardContentsArray.map((contents) => (
        <Card
          updateCardList={props.updateCardList}
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
    </ul>
  );
};

export default CardsContainer;
