import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import JacketSVG from "./JacketSVG";
import styles from "./ProductCard.module.css";

const VARIANT_MAP: Record<string, "monza" | "silverstone" | "suzuka" | "imola"> = {
  "monza-jacket": "monza",
  "silverstone-hoodie": "silverstone",
  "suzuka-jacket": "suzuka",
  "imola-hoodie": "imola",
};

const BADGE_CLASS: Record<string, string> = {
  Bestseller: styles.badgeRed,
  New: styles.badgeOutline,
  Limited: styles.badgeGold,
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const svgVariant = VARIANT_MAP[product.id] ?? "monza";

  return (
    <div className={styles.card}>
      <Link href={`/shop/${product.id}`} className={styles.imageWrap}>
        {product.badge && (
          <span className={`${styles.badge} ${BADGE_CLASS[product.badge]}`}>
            {product.badge}
          </span>
        )}
        <JacketSVG variant={svgVariant} size={130} />
        <span className={styles.ghostNum}>{product.num}</span>
      </Link>

      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.type}>
          {product.subtitle} — {product.colorway}
        </p>
        <div className={styles.row}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <button className={styles.addBtn}>Add</button>
        </div>
      </div>
    </div>
  );
}
