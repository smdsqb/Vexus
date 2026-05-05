import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JacketSVG from "@/components/JacketSVG";
import { products } from "@/lib/products";
import styles from "./page.module.css";

const VARIANT_MAP: Record<string, "monza" | "silverstone" | "suzuka" | "imola"> = {
  "monza-jacket": "monza",
  "silverstone-hoodie": "silverstone",
  "suzuka-jacket": "suzuka",
  "imola-hoodie": "imola",
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <div className={styles.header}>
        <p className="sec-label">Season 01</p>
        <h1 className="sec-heading">THE LOOKBOOK</h1>
        <p className="sec-sub">Built for the circuit</p>
      </div>

      {/* Editorial intro */}
      <div className={styles.intro}>
        <p className={styles.introText}>
          Season 01 is a study in restraint. Four pieces, two silhouettes, one
          obsession — the feeling of speed without a single logo to explain it.
          Shot on the streets of Hyderabad and Singapore.
        </p>
      </div>

      {/* Large editorial grid */}
      <div className={styles.editorialGrid}>
        {products.map((p, i) => {
          const variant = VARIANT_MAP[p.id] ?? "monza";
          const isBig = i === 0 || i === 3;
          return (
            <div
              key={p.id}
              className={`${styles.editorialCell} ${isBig ? styles.cellBig : styles.cellSmall}`}
            >
              <div className={styles.cellImage}>
                <JacketSVG variant={variant} size={isBig ? 280 : 180} />
                <span className={styles.cellGhost}>{p.num}</span>
              </div>
              <div className={styles.cellInfo}>
                <p className={styles.cellNum}>{p.num}</p>
                <p className={styles.cellName}>{p.name}</p>
                <p className={styles.cellSub}>{p.colorway}</p>
                <a href={`/shop/${p.id}`} className={styles.cellLink}>
                  View Product →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Photo placeholder grid */}
      <div className={styles.photoSection}>
        <div className={styles.photoHeader}>
          <p className="sec-label">On the streets</p>
          <h2 className="sec-heading">CAMPAIGN</h2>
          <p className="sec-sub">Photos coming soon</p>
        </div>
        <div className={styles.photoGrid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.photoCell}>
              <span className={styles.photoPh}>PHOTO {String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
