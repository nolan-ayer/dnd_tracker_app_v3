import { useEffect, useState, useContext } from "react";
import CardsContainer from "./Cards/CardsContainer";
import AuthContext from "../../../context/auth-context";
import styles from "./Cards/Cards.module.css";

const Cards = () => {
  const [playerCards, setPlayerCards] = useState([]);
  // const router = useRouter();
  const authCtx = useContext(AuthContext);

  //rewatch lecture 343
  async function fetchCardsHandler() {
    const response = await fetch(
      `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
        "userId"
      )}/cards.json`
    );
    const data = await response.json();

    if (!response.ok) {
      alert(
        "Oops! It looks like something went wrong. Please reload the page and try again."
      );
    }

    const loadedCards = [];

    for (const key in data) {
      loadedCards.push({
        id: key,
        name: data[key].name,
        lvl: data[key].lvl,
        str: data[key].str,
        fin: data[key].fin,
        int: data[key].int,
        con: data[key].con,
        mem: data[key].mem,
        wit: data[key].wit,
      });
    }
    setPlayerCards(loadedCards);
  }

  useEffect(() => {
    fetchCardsHandler();
  }, []);

  return (
    <>
      {/* <pre>{JSON.stringify(playerCards, null, 2)}</pre> */}
      <CardsContainer
        addCardHandler={fetchCardsHandler}
        className={styles.cardContainer}
        cards={playerCards}
      />
    </>
  );
};

export default Cards;
