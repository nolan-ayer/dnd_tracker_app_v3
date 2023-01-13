import { useContext } from "react";
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
          <>
            <section className="contentMain">Fixes Coming Soon:</section>
            <section className="contentMain">
              onCardEdit, values can exceed the maxValue set in the initial form
            </section>
            <section className="contentMain">
              Custom hooks should be used for HTTP requests
            </section>
            <section className="contentMain">
              {`   Scaling issue at width ~450px; potential Chrome DevTools
              responsive dimensions bug; does not happen when window is resized
              & responsive is disabled; chrome revision: e7c5703604daa9cc128ccf5a5d3e993513758913-refs/branch-heads/5414@{#1172}`}
            </section>
            <section className="contentMain">Add inventory to cards</section>
          </>
        )}
      </section>
    </div>
  );
};

export default Welcome;
