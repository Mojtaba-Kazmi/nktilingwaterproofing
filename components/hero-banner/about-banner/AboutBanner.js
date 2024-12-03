import styles from "./AboutBanner.module.css";
import { aboutBanner } from "@/content/data/hero-banner/about-banner";

const AboutBanner = () => {
  return (
    <section className={styles.container} aria-label="About Us Section">
      <div className={styles.textContent}>
        <h1>{aboutBanner.heading}</h1>  
        <h2>{aboutBanner.subheading}</h2> 
        <p>{aboutBanner.description}</p>
      </div>
    </section>
  );
};

export default AboutBanner;