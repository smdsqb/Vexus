import Link from "next/link";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <section className={styles.section}>
      <Link href="/shop?cat=jacket" className={styles.card}>
        <div className={`${styles.bg} ${styles.bgJacket}`}>
          <div className={`${styles.stripe} ${styles.stripeRed}`} />
          <span className={styles.count}>02</span>
          <div className={styles.content}>
            <p className={styles.label}>Category</p>
            <h3 className={styles.title}>
              Racing<br />Jackets
            </h3>
            <span className={styles.cta}>Shop Jackets →</span>
          </div>
        </div>
      </Link>

      <Link href="/shop?cat=hoodie" className={styles.card}>
        <div className={`${styles.bg} ${styles.bgHoodie}`}>
          <div className={`${styles.stripe} ${styles.stripeGold}`} />
          <span className={styles.count}>02</span>
          <div className={styles.content}>
            <p className={styles.label}>Category</p>
            <h3 className={styles.title}>
              Street<br />Hoodies
            </h3>
            <span className={styles.cta}>Shop Hoodies →</span>
          </div>
        </div>
      </Link>
    </section>
  );
}
