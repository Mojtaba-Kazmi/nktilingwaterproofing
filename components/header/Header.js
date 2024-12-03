"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Hide the header when scrolling down unless at the top
    if (currentScrollY > lastScrollY && currentScrollY > 0) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }

    setLastScrollY(currentScrollY);

    // Set isScrolled based on scroll position
    setScrolled(currentScrollY > 0);
  }, [lastScrollY]); // Include lastScrollY in dependencies

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Add handleScroll as a dependency

  return (
    <header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""} ${
        isHeaderVisible ? "" : styles.hidden
      }`}
    >
      <div className={styles.wrapper}>
        {/* Logo */}
        <div className={styles.branding}>
          <Link href="/" passHref>
            <Image
              src="/assets/logo/nk.webp"
              className={styles.logoImage}
              width={100}
              height={80}
              alt="NK tiling waterproofing"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              quality={100}
              unoptimized
            />
          </Link>
        </div>
        {/* Fullscreen Navbar */}
        <nav
          className={`${styles.navbarMenu} ${
            isMenuOpen ? styles.active : styles.exit
          }`}
        >
          <ul className={styles.list}>
            <Navbar
              isMenuOpen={isMenuOpen}
              onCloseMenu={() => setMenuOpen(false)}
            />
          </ul>
        </nav>
        {/* Free Quote Button */}
        <a href="tel:+61449009154">
          <button
            className={styles.quoteButton}
            aria-label="Request a free quote"
          >
            Get a free Quote
          </button>
        </a>
        {/* Burger Menu */}
        <div
          className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span> {/* Burger icon */}
        </div>
      </div>
    </header>
  );
}
