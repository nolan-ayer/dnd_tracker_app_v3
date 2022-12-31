import { Route, Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const LoginNav = () => {
  const location = useLocation();

  return (
    <nav className={styles.navContainer}>
      <Link
        to="/login"
        className={
          window.location.pathname === "/login"
            ? styles.navButton__selected
            : styles.navButton
        }
      >
        Login
      </Link>
    </nav>
  );
};

export default LoginNav;
