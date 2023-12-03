import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.cell}>
        Thank you for using my application - as a developer, it brings me great
        joy to know that someone somewhere is interacting with something I've
        created.
      </div>
      <div className={styles.cell}>
        <label>Quick Links</label>
        <ul>
          <li>
            <a href="https://github.com/nowolan?tab=repositories">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nolan-ayer/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
