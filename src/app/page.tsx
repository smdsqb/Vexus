"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ProductCard from "@/components/ProductCard";
import Categories from "@/components/Categories";
import FeatureStrip from "@/components/FeatureStrip";
import Manifesto from "@/components/Manifesto";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import { products, type ProductCategory } from "@/lib/products";
import styles from "./page.module.css";

function ProductSection() {
  const [active, setActive] = useState<ProductCategory | "all">("all");

  const visible =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section className={styles.productsSection}>
      <div className={styles.productsHeader}>
        <div>
          <p className="sec-label">New In</p>
          <h2 className="sec-heading">THE DROP</h2>
          <p className="sec-sub">Season 01</p>
        </div>
        <div className={styles.filters}>
          {(["all", "jacket", "hoodie"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ""}`}
            >
              {cat === "all" ? "All" : cat === "jacket" ? "Jackets" : "Hoodies"}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.productsGrid}>
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.nlLeft}>
        <p className="sec-label">Stay in the loop</p>
        <h2 className="sec-heading">EARLY</h2>
        <p className="sec-sub">Access</p>
        <div className={styles.nlRow}>
          <input
            className={styles.nlInput}
            type="email"
            placeholder="your@email.com"
          />
          <button className={styles.nlBtn}>Join</button>
        </div>
        <p className={styles.nlNote}>No spam. Drop alerts only.</p>
      </div>
      <div className={styles.nlRight}>
        <p className="sec-label">We ship to</p>
        <div className={styles.markets}>
          <div className={styles.market}>
            <span className={styles.marketCode}>IN</span>
            <div>
              <p className={styles.marketName}>India</p>
              <p className={styles.marketDesc}>
                Free shipping · 3–5 days · Pan-India delivery
              </p>
            </div>
          </div>
          <div className={styles.market}>
            <span className={styles.marketCode}>SG</span>
            <div>
              <p className={styles.marketName}>Singapore</p>
              <p className={styles.marketDesc}>
                Free shipping · 5–7 days · SGD prices available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <ProductSection />
      <Categories />
      <FeatureStrip />
      <Manifesto />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}
