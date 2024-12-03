import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./LogoSocialMedia.module.css";
import logoSocial from "@/content/data/footer/logo-social/logoSocial.json";

const LogoSocialMedia = () => {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <img
          src={logoSocial.logo.image} // Use the logo object from JSON
          width={parseInt(logoSocial.logo.width)}
          height={parseInt(logoSocial.logo.height)}
          alt={logoSocial.logo.alt}
          loading="lazy"
        />

        <div className={styles.contactDetails}>
          <address>
            {logoSocial.contact.address}
            <p>
              <a href={`mailto:${logoSocial.contact.email}`}>
                {logoSocial.contact.email}
              </a>
            </p>
          </address>
          <button className={styles.contactNumber}>
            <a href={`tel:${logoSocial.contact.number}`}>
              {logoSocial.contact.number}
            </a>
          </button>
        </div>
      </div>

      <nav className={styles.findUs}>
        <Link href="#" aria-label="Find Us">
          {logoSocial.links.findUs}
        </Link>
      </nav>
    </section>
  );
};

export default LogoSocialMedia;
