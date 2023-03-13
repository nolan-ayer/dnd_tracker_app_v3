import { Link, Route, Routes, useLocation } from "react-router-dom";
import Welcome from "../../UI/Welcome/Welcome";

import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

const HeaderMain = () => {
  const location = useLocation();

  return (
    <>
      <header className={styles.headerMain}>
        <Link
          to="/"
          className={
            window.location.pathname === "/"
              ? styles.titleButton__selected
              : styles.titleButton
          }
        >
          <section className={styles.headerTitle}>
            <span class="material-icons md-light logout">home</span>
          </section>
        </Link>
        <HeaderNav />
      </header>
    </>
  );
};

export default HeaderMain;
