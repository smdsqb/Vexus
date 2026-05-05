"use client";

import { useState } from "react";
import { products, type ProductCategory } from "@/lib/products";
import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

interface Props {
  limit?: number;
  showFilters?: boolean;
  initialCategory?: ProductCategory | "all";
}

export default function ProductGrid({
  limit,
  showFilters = false,
  initialCategory = "all",
}: Props) {
  const [active, setActive] = useState<ProductCategory | "all">(initialCategory);

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className="sec-label">New In</p>
          <h2 className="sec-heading">THE DROP</h2>
          <p className="sec-sub">Season 01</p>
        </div>
        {showFilters && (
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
        )}
      </div>

      <div className={styles.grid}>
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
