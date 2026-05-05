import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            VEX<span>US</span>
          </div>
          <p className={styles.tagline}>
            Racing-inspired apparel for India and Singapore. Speed made
            wearable. Season 01 now live.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Shop</p>
          <ul className={styles.links}>
            <li><Link href="/shop">All Products</Link></li>
            <li><Link href="/shop?cat=jacket">Jackets</Link></li>
            <li><Link href="/shop?cat=hoodie">Hoodies</Link></li>
            <li><Link href="/shop">New Arrivals</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Info</p>
          <ul className={styles.links}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/collections">Lookbook</Link></li>
            <li><Link href="/about#sizing">Sizing Guide</Link></li>
            <li><Link href="/about#contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Support</p>
          <ul className={styles.links}>
            <li><Link href="/about#shipping">Shipping Policy</Link></li>
            <li><Link href="/about#returns">Returns</Link></li>
            <li><Link href="/about#faq">FAQ</Link></li>
            <li><Link href="/about#track">Track Order</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2025 Vexus — All rights reserved</p>
        <div className={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
