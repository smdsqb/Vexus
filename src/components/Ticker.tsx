import styles from "./Ticker.module.css";

const ITEMS = [
  "Free shipping India & Singapore",
  "Season 01 — Limited pieces",
  "Ships within 48 hours",
  "Race-grade aesthetic",
  "₹1,500 onwards",
];

export default function Ticker() {
  // Doubled for seamless loop
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
