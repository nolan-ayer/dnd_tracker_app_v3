import { Link, Route, Routes } from "react-router-dom";
import Welcome from "../../UI/Welcome/Welcome";

import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

const HeaderMain = () => {
  return (
    <>
      <header className={styles.headerMain}>
        <Link to="/" className={styles.titleButton}>
          <section className={styles.headerTitle}>Dnd Tracker App</section>
        </Link>
        <HeaderNav />
      </header>
    </>
  );
};

export default HeaderMain;
