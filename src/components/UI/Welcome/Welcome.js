import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className="contentMain">
      <h3 className="centered">Welcome!</h3>
      <article className="centered">
        This application is designed using the Divinity 2 Original Sin leveling
        architecture and is intended for use by both players and their Dungeon
        Masters. Within the app, you will find organizational tools for keeping
        track of charactersheets and assorted notes for your game.
      </article>
      <article className="centered">
        To begin, please login with your username and password. If you haven't
        created an account yet, just click {""}
        <Link className="embeddedLink" to="/signup">
          here
        </Link>
        {""} to get started!
      </article>
    </div>
  );
};

export default Welcome;
