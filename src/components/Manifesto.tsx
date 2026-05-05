import styles from "./Manifesto.module.css";

export default function Manifesto() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <p className={styles.quote}>
          Speed<br />is a<br /><em>feeling,</em><br />not a<br />logo.
        </p>
      </div>
      <div className={styles.right}>
        <p className={styles.text}>
          Vexus wasn&apos;t built to sell you fan merchandise. We built it because
          the energy of motorsport — that obsession with precision, with pushing
          limits, with going faster than anyone told you was possible — deserves
          to live off the track too.
        </p>
        <p className={styles.text}>
          Every piece is designed to carry that weight without announcing it.
          Clean lines. Deliberate details. Built for the streets of India and
          Singapore, where the passion runs as deep as anywhere in the world.
        </p>
        <p className={styles.sig}>— Vexus, S01</p>
      </div>
    </section>
  );
}
