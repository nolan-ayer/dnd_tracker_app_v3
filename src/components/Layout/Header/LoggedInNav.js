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
          to="/profile"
          className={
            window.location.pathname === "/profile"
              ? styles.navButton__selected
              : styles.navButton
          }
        >
          Profile
        </Link>
        <Link
          to="/cards"
          className={
            window.location.pathname === "/cards"
              ? styles.navButton__selected
              : styles.navButton
          }
        >
          Cards
        </Link>

        <Link
          to="/notes"
          className={
            window.location.pathname === "/notes"
              ? styles.navButton__selected
              : styles.navButton
          }
        >
          Notes
        </Link>

        <Link to="/" className={styles.navButton} onClick={logout}>
          Logout
        </Link>
      </nav>
    </>
  );
};

export default LoggedInNav;
