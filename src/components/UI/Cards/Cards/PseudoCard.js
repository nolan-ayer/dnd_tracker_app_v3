import styles from "./Cards.module.css";

function PseudoCard() {
  return (
    <div className={styles.card}>
      <h5 className={styles.cardTitle}>Example Name</h5>
      <ul>
        <div className={styles.cardInnerOne__One}>
          <li>LVL: 12</li>
          <div className={styles.cardInnerOne__Two}>
            <section className={styles.cardInnerOne__Three}>
              <li>STR: 12</li>
              <li>FIN: 12</li>
              <li>INT: 12</li>
            </section>
            <section className={styles.cardInnerOne__Three}>
              <li>CON: 12</li>
              <li>MEM: 12</li>
              <li>WIT: 12</li>
            </section>
          </div>
        </div>
      </ul>
      <ul className={styles.cardInnerTwo__One}>
        <li>Sword</li>
        <li>Shield</li>
        <li>Minor Health Potion</li>
        <li>2019 Dodge Challenger Scat Pack</li>
      </ul>
    </div>
  );
}

export default PseudoCard;
