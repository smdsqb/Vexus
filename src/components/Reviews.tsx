import styles from "./Reviews.module.css";

const reviews = [
  {
    text: "Bhai finally something that looks like it costs three times the price. The jacket quality is genuinely insane for fifteen hundred.",
    author: "Arjun M.",
    city: "Chennai, India",
  },
  {
    text: "Was skeptical but the Monza jacket is exactly what I wanted. No loud branding, just looks clean. Wore it to the Singapore GP watch party.",
    author: "Vikram S.",
    city: "Singapore",
  },
  {
    text: "The hoodie fits perfectly and the fabric is thick. Doesn't feel like some cheap print-on-demand thing. Will be ordering the jacket next.",
    author: "Rahul K.",
    city: "Hyderabad, India",
  },
];

function Stars() {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={styles.star} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className="sec-label">Reviews</p>
          <h2 className="sec-heading">WHAT THEY</h2>
          <p className="sec-sub">Said</p>
        </div>
      </div>
      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.card}>
            <Stars />
            <p className={styles.text}>{r.text}</p>
            <p className={styles.author}>{r.author}</p>
            <p className={styles.city}>{r.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
