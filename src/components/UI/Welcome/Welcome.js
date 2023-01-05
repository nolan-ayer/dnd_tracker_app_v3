import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth-context";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="contentMain">
      <h3 className="centered">Welcome!</h3>
      <section className="contentMainPlacementHelper">
        <section className="mainContentsStandalone">
          This application is designed using the Divinity 2 Original Sin
          leveling architecture and is intended for use by both players and
          their Dungeon Masters. Within the app, you will find organizational
          tools for keeping track of charactersheets and assorted notes for your
          game.
        </section>
        {!authCtx.isLoggedIn ? (
          <section className="mainContentsStandalone">
            To begin, please login with your username and password. If you
            haven't created an account yet, just click {""}
            <Link className="embeddedLink" to="/signup">
              here
            </Link>
            {""} to get started!
          </section>
        ) : (
          <section className="contentMain">Thank you for signing in!</section>
        )}
      </section>
    </div>
  );
};

export default Welcome;
