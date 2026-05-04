"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [bagCount] = useState(0);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        VEX<span>US</span>
      </Link>

      <ul className={styles.links}>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/shop?cat=jacket">Jackets</Link></li>
        <li><Link href="/shop?cat=hoodie">Hoodies</Link></li>
        <li><Link href="/collections">Collections</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>

      <div className={styles.right}>
        <span className={styles.icon}>Search</span>
        <div className={styles.bag}>Bag ({bagCount})</div>
      </div>
    </nav>
  );
}
