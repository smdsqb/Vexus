import styles from "./FeatureStrip.module.css";

const features = [
  {
    num: "01.",
    title: "Race-Grade Fabric",
    desc: "High-density cotton blends built for the Indian climate. Breathable in Chennai, layerable in Singapore.",
  },
  {
    num: "02.",
    title: "No Logos. No Noise.",
    desc: "Motorsport energy without the marketing. Designed for people who know — and don't need to announce it.",
  },
  {
    num: "03.",
    title: "Real Price. Real People.",
    desc: "₹1,500 flat. No hype markup. Premium clothing at a price the Indian middle class actually deserves.",
  },
];

export default function FeatureStrip() {
  return (
    <div className={styles.strip}>
      {features.map((f) => (
        <div key={f.num} className={styles.item}>
          <p className={styles.num}>{f.num}</p>
          <p className={styles.title}>{f.title}</p>
          <p className={styles.desc}>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
