import Link from "next/link";
import JacketSVG from "./JacketSVG";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>Season 01 — 2025</p>
        <h1 className={styles.title}>BUILT FOR</h1>
        <h1 className={styles.titleItalic}>the circuit.</h1>
        <p className={styles.desc}>
          Racing-inspired jackets and hoodies for the streets of India and
          Singapore. No noise. No logos. Just the energy of speed, made
          wearable.
        </p>
        <div className={styles.actions}>
          <Link href="/shop" className={styles.btnSolid}>
            Shop the Drop
          </Link>
          <Link href="/collections" className={styles.btnLine}>
            View Lookbook
          </Link>
        </div>
        <div className={styles.cornerTag}>
          <span>Starting from</span>
          <strong>₹1,500</strong>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.redBar} />
        <JacketSVG variant="monza" size={260} />
        <div className={styles.prodTag}>
          <p>Featured drop</p>
          <strong>Monza Jacket</strong>
        </div>
        <div className={styles.scrollHint}>Scroll</div>
      </div>
    </section>
  );
}
