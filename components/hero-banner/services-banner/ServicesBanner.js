import Link from "next/link";
import { servicesBanner } from "@/content/data/hero-banner/services-banner";
import styles from "./ServicesBanner.module.css";

const ServicesBanner = () => {
  return (
    <section className={styles.serviceContainer} aria-label="Our Services">
      <div className={styles.serviceItemsWrapper}>
        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgTilingUrl}
            alt="Tiling"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Tiling</p>
        </div>

        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgWaterproofingUrl}
            alt="Waterproofing"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Waterproofing</p>
        </div>

        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgRenovationUrl}
            alt="Tiling Renovation"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Renovation</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <a href="tel:+61449009154">
          <span
            className={styles.btnGetQuote}
            role="link" // Use "link" role to make it clear it's a link
            tabIndex="0"
            aria-label="Get a Quote" 
          >
            {servicesBanner.ctaText}
          </span>
        </a>
      </div>
    </section>
  );
};

export default ServicesBanner;
