import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const LoginNav = () => {
  const location = useLocation();

  return (
    <nav className={styles.navContainer}>
      <Link
        to="/signup"
        className={
          window.location.pathname === "/signup"
            ? styles.navButton__selected
            : styles.navButton
        }
      >
        <span className={styles.text}>Signup</span>
      </Link>
      <Link
        to="/login"
        className={
          window.location.pathname === "/login"
            ? styles.navButton__selected
            : styles.navButton
        }
      >
        <span className={styles.text}>Login</span>
      </Link>
    </nav>
  );
};

export default LoginNav;
