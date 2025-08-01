import Marquee from "react-fast-marquee";
import poonawalla from "../../public/assets/poonwalla.jpeg";
import smfg from "../../public/assets/smfg.jpeg";
import southIndian from "../../public/assets/southIndian.jpeg";
import shriram from "../../public/assets/shriram.jpeg";
import TATA from "../../public/assets/TATA.jpeg";
import Birla from "../../public/assets/Birla.jpeg";
import Axis from "../../public/assets/Axis.jpeg";
import Axisfinance from "../../public/assets/AxisFinance.jpeg";
import Bajaj from "../../public/assets/bajaj.jpeg";
import chola from "../../public/assets/chola.jpeg";
import finnable from "../../public/assets/finnable.jpeg";
import HDFC from "../../public/assets/HDFC.jpeg";
import IDBI from "../../public/assets/IDBI.jpeg";
import IDFC from "../../public/assets/IDFC.jpeg";
import inCred from "../../public/assets/inCred.jpeg";
import IndusInd from "../../public/assets/IndusInd.jpeg";
import kotak from "../../public/assets/kotak.jpeg";
import LTFinance from "../../public/assets/LTFinance.jpeg";
import muthoot from "../../public/assets/muthoot.jpeg";
import piramal from "../../public/assets/piramal.jpeg";
import yesBank from "../../public/assets/yesBank.jpeg";
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