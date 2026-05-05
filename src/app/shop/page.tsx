import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, type ProductCategory } from "@/lib/products";
import styles from "./page.module.css";

interface Props {
  searchParams: { cat?: string };
}

export default function ShopPage({ searchParams }: Props) {
  const cat = searchParams.cat as ProductCategory | undefined;
  const isValidCat = cat === "jacket" || cat === "hoodie";

  const filtered = isValidCat
    ? products.filter((p) => p.category === cat)
    : products;

  const activeLabel =
    cat === "jacket" ? "Jackets" : cat === "hoodie" ? "Hoodies" : "All";

  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className={styles.header}>
        <div>
          <p className="sec-label">Season 01</p>
          <h1 className="sec-heading">SHOP</h1>
          <p className="sec-sub">{activeLabel}</p>
        </div>
        <div className={styles.filters}>
          <a
            href="/shop"
            className={`${styles.filter} ${!isValidCat ? styles.filterActive : ""}`}
          >
            All
          </a>
          <a
            href="/shop?cat=jacket"
            className={`${styles.filter} ${cat === "jacket" ? styles.filterActive : ""}`}
          >
            Jackets
          </a>
          <a
            href="/shop?cat=hoodie"
            className={`${styles.filter} ${cat === "hoodie" ? styles.filterActive : ""}`}
          >
            Hoodies
          </a>
        </div>
      </div>

      {/* Product grid */}
      <div className={styles.grid}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Footer />
    </>
  );
}
