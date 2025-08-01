import Marquee from "react-fast-marquee";
import aditya from "@/assets/aditya.webp";
import aig from "@/assets/aig.webp";
import icici from "@/assets/icici.webp";
import lombard from "@/assets/lombard.webp";
import niva from "@/assets/niva.webp";
import care from "@/assets/care.webp";
import cigna from "@/assets/cigna.webp";
import ergo from "@/assets/ergo.webp";
import star from "@/assets/star.webp";
import styles from "@/styles/home/PartnersSection.module.css";

const InsurancePartnersSection = () => {
  const insurancePartners = [
    { src: aditya, alt: "Aditya Birla Insurance" },
    { src: aig, alt: "AIG" },
    { src: icici, alt: "ICICI Lombard" },
    { src: lombard, alt: "Lombard" },
    { src: niva, alt: "Niva Bupa" },
    { src: care, alt: "Care Health Insurance" },
    { src: cigna, alt: "Cigna TTK" },
    { src: ergo, alt: "Ergo Insurance" },
    { src: star, alt: "Star Health" },
  ];

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...insurancePartners, ...insurancePartners];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        <div className={styles.partnersHeader}>
          <h2 className={styles.partnersTitle}>
            Our Insurance Partners
          </h2>
          <p className={styles.partnersSubtitle}>
            We collaborate with leading insurance companies to provide
            you the best coverage options
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

export default InsurancePartnersSection;