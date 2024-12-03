// components/MainBanner.js
import AboutBanner from "./about-banner/AboutBanner";
import ServicesBanner from "./services-banner/ServicesBanner";
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div className={styles.heroBannerWrapper}>
      <div className={styles.heroBanner}>
        <AboutBanner />
        <ServicesBanner />
      </div>
    </div>
  );
};

export default HeroBanner;