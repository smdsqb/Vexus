import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <div className={styles.header}>
        <p className="sec-label">The brand</p>
        <h1 className="sec-heading">ABOUT</h1>
        <p className="sec-sub">Vexus</p>
      </div>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyLeft}>
          <p className={styles.storyQuote}>
            We didn&apos;t want to build another merch brand. We wanted to build
            something that <em>means</em> something.
          </p>
        </div>
        <div className={styles.storyRight}>
          <p className={styles.storyText}>
            Vexus started with a simple frustration — if you love motorsport in
            India, your options are overpriced import fan gear or generic
            streetwear with a checkered flag slapped on it. Neither felt right.
          </p>
          <p className={styles.storyText}>
            So we built what we actually wanted to wear. Racing-inspired jackets
            and hoodies with the DNA of the sport in their cut, their details,
            and their colour. No team logos. No corporate licensing. Just the raw
            energy of the grid, made wearable.
          </p>
          <p className={styles.storyText}>
            We&apos;re a small team based across India and Singapore. Every piece is
            designed by us, priced honestly, and built to last longer than a race
            season.
          </p>
        </div>
      </section>

      {/* Values grid */}
      <section className={styles.values}>
        {[
          { num: "01.", title: "Niche, not mass.", desc: "We make clothes for people who know. You either get it or you don't." },
          { num: "02.", title: "Honest price.", desc: "₹1,500 and that's it. No hype cycle, no resale markup." },
          { num: "03.", title: "Designed here.", desc: "Every detail — the stripe, the cut, the trim — is ours." },
          { num: "04.", title: "Both markets.", desc: "Sized and shipped for India and Singapore from day one." },
        ].map((v) => (
          <div key={v.num} className={styles.valueCard}>
            <p className={styles.valueNum}>{v.num}</p>
            <p className={styles.valueTitle}>{v.title}</p>
            <p className={styles.valueDesc}>{v.desc}</p>
          </div>
        ))}
      </section>

      {/* Sizing */}
      <section className={styles.sizing} id="sizing">
        <div className={styles.sizeHeader}>
          <p className="sec-label">Fit guide</p>
          <h2 className="sec-heading">SIZING</h2>
        </div>
        <div className={styles.sizeTable}>
          <div className={styles.sizeRow + " " + styles.sizeRowHead}>
            <span>Size</span><span>Chest (in)</span><span>Length (in)</span><span>Shoulders (in)</span>
          </div>
          {[
            { s: "S", c: "36–38", l: "27", sh: "17" },
            { s: "M", c: "38–40", l: "28", sh: "18" },
            { s: "L", c: "40–42", l: "29", sh: "19" },
            { s: "XL", c: "42–44", l: "30", sh: "20" },
            { s: "2XL", c: "44–46", l: "31", sh: "21" },
            { s: "3XL", c: "46–48", l: "32", sh: "22" },
          ].map((row) => (
            <div key={row.s} className={styles.sizeRow}>
              <span>{row.s}</span>
              <span>{row.c}</span>
              <span>{row.l}</span>
              <span>{row.sh}</span>
            </div>
          ))}
        </div>
        <p className={styles.sizeNote}>
          All pieces run true to size. If you&apos;re between sizes, size up for a
          more relaxed fit.
        </p>
      </section>

      {/* Shipping & Returns */}
      <section className={styles.shipping} id="shipping">
        <div className={styles.shippingGrid}>
          <div className={styles.shippingCard} id="returns">
            <p className="sec-label">Delivery</p>
            <h2 className="sec-heading">SHIPPING</h2>
            <div className={styles.shippingDetails}>
              <div className={styles.shippingRow}>
                <span className={styles.shippingMarket}>India</span>
                <span className={styles.shippingInfo}>Free · Pan-India · 3–5 working days</span>
              </div>
              <div className={styles.shippingRow}>
                <span className={styles.shippingMarket}>Singapore</span>
                <span className={styles.shippingInfo}>Free · 5–7 working days · SGD pricing at checkout</span>
              </div>
            </div>
          </div>
          <div className={styles.shippingCard}>
            <p className="sec-label">Policy</p>
            <h2 className="sec-heading">RETURNS</h2>
            <p className={styles.shippingText}>
              If something isn&apos;t right, we&apos;ll sort it. You have 7 days from
              delivery to raise a return. Items must be unworn and in original
              condition. Contact us via WhatsApp or email and we&apos;ll take it from
              there.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} id="faq">
        <div className={styles.faqHeader}>
          <p className="sec-label">Help</p>
          <h2 className="sec-heading">FAQ</h2>
        </div>
        <div className={styles.faqList}>
          {[
            {
              q: "When will my order ship?",
              a: "All orders are dispatched within 48 hours. You'll receive a tracking link via WhatsApp.",
            },
            {
              q: "Do you ship outside India and Singapore?",
              a: "Not yet. We're focused on getting the first two markets right. International shipping is on the roadmap.",
            },
            {
              q: "Are the pieces limited?",
              a: "Season 01 is a limited run. Once a piece sells out, it's gone. We'll announce restocks on Instagram first.",
            },
            {
              q: "How do I track my order?",
              a: "A tracking link is sent to your WhatsApp after dispatch. You can also message us directly.",
            },
            {
              q: "Can I pay on delivery?",
              a: "Yes — COD is available for all Indian orders. Singapore orders are prepaid only.",
            },
          ].map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <p className={styles.faqQ}>{item.q}</p>
              <p className={styles.faqA}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact} id="contact">
        <div>
          <p className="sec-label">Get in touch</p>
          <h2 className="sec-heading">CONTACT</h2>
          <p className="sec-sub">We&apos;re quick.</p>
        </div>
        <div className={styles.contactLinks}>
          <a href="https://wa.me" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
            <span className={styles.contactType}>WhatsApp</span>
            <span className={styles.contactVal}>+91 XXXXX XXXXX</span>
          </a>
          <a href="mailto:hello@vexus.in" className={styles.contactLink}>
            <span className={styles.contactType}>Email</span>
            <span className={styles.contactVal}>hello@vexus.in</span>
          </a>
          <a href="https://instagram.com" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
            <span className={styles.contactType}>Instagram</span>
            <span className={styles.contactVal}>@vexus.wear</span>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
