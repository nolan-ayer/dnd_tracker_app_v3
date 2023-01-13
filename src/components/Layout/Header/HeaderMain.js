import { Link, Route, Routes } from "react-router-dom";
import Welcome from "../../UI/Welcome/Welcome";

import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

const HeaderMain = () => {
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
          <section className={styles.headerTitle}>>tracker app</section>
        </Link>
        <HeaderNav />
      </header>
    </>
  );
};

export default HeaderMain;
