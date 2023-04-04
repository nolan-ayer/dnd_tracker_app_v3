import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../../context/auth-context";
import styles from "./Header.module.css";

const LoggedInNav = () => {
  const location = useLocation();
  const authCtx = useContext(AuthContext);

  const logout = authCtx.logout;

  return (
    <>
      <nav className={styles.navContainer}>
        <Link
          className={
            window.location.pathname === "/profile"
              ? styles.navButton__selected
              : styles.navButton
          }
          title="Profile"
          to="/profile"
        >
          <span class="material-icons md-light">person</span>
        </Link>
        <Link
          className={
            window.location.pathname === "/cards"
              ? styles.navButton__selected
              : styles.navButton
          }
          title="Cards"
          to="/cards"
        >
          <span class="material-icons md-light">note_add</span>
        </Link>
        <Link
          className={
            window.location.pathname === "/notes"
              ? styles.navButton__selected
              : styles.navButton
          }
          title="Notes"
          to="/notes"
        >
          <span class="material-icons md-light">description</span>
        </Link>
        <Link
          className={styles.navButton}
          onClick={logout}
          title="Logout"
          to="/"
        >
          <span class="material-icons md-light delete">logout</span>
        </Link>
      </nav>
    </>
  );
};

export default LoggedInNav;
