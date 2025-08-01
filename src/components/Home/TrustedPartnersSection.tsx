import Marquee from "react-fast-marquee";
import poonawalla from "../../public/assets/poonwalla.webp";
import smfg from "../../public/assets/smfg.webp";
import southIndian from "../../public/assets/southIndian.webp";
import shriram from "../../public/assets/shriram.webp";
import TATA from "../../public/assets/TATA.webp";
import Birla from "../../public/assets/Birla.webp";
import Axis from "../../public/assets/Axis.webp";
import Axisfinance from "../../public/assets/AxisFinance.webp";
import Bajaj from "../../public/assets/bajaj.webp";
import chola from "../../public/assets/chola.webp";
import finnable from "../../public/assets/finnable.webp";
import HDFC from "../../public/assets/HDFC.webp";
import IDBI from "../../public/assets/IDBI.webp";
import IDFC from "../../public/assets/IDFC.webp";
import inCred from "../../public/assets/inCred.webp";
import IndusInd from "../../public/assets/IndusInd.webp";
import kotak from "../../public/assets/kotak.webp";
import LTFinance from "../../public/assets/LTFinance.webp";
import muthoot from "../../public/assets/muthoot.webp";
import piramal from "../../public/assets/piramal.webp";
import yesBank from "../../public/assets/yesBank.webp";
import styles from "../../styles/home/PartnersSection.module.css";

const TrustedPartnersSection = () => {
  const partners = [
    { src: poonawalla, alt: "Poonawalla" },
    { src: smfg, alt: "SMFG" },
    { src: southIndian, alt: "South Indian Bank" },
    { src: shriram, alt: "Shriram" },
    { src: TATA, alt: "TATA" },
    { src: Birla, alt: "Birla" },
    { src: Axis, alt: "Axis" },
    { src: Axisfinance, alt: "Axis Finance" },
    { src: Bajaj, alt: "Bajaj" },
    { src: chola, alt: "Chola" },
    { src: finnable, alt: "Finnable" },
    { src: HDFC, alt: "HDFC" },
    { src: IDBI, alt: "IDBI" },
    { src: IDFC, alt: "IDFC" },
    { src: inCred, alt: "InCred" },
    { src: IndusInd, alt: "IndusInd" },
    { src: kotak, alt: "Kotak" },
    { src: LTFinance, alt: "L&T Finance" },
    { src: muthoot, alt: "Muthoot" },
    { src: piramal, alt: "Piramal" },
    { src: yesBank, alt: "Yes Bank" },
  ];

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        <div className={styles.partnersHeader}>
          <h2 className={styles.partnersTitle}>
            Our Trusted Partners
          </h2>
          <p className={styles.partnersSubtitle}>
            We collaborate with leading financial institutions to provide
            you the best services
          </p>
        </div>

        <Marquee
          gradient={false}
          speed={45}
          pauseOnHover={true}
          className={styles.partnersMarquee}
        >
          <div className={styles.partnersGrid}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className={styles.partnerCard}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className={styles.partnerLogo}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;