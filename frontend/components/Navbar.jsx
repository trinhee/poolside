"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isShadowVisible, setIsShadowVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      // Add shadow when scrolling down
      setIsShadowVisible(currentScrollY > 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isScrollingDown ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed left-0 top-0 w-full px-4 md:px-10 py-4 z-50 flex items-center justify-between transition-all ${
        isShadowVisible ? "bg-black/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* logo */}
      <a href="#hero" className="relative flex-shrink-0 left-0 md:left-0">
        <Image
          src="/logo.png"
          alt="logo"
          width={240}
          height={133}
          priority
          className="w-[90px] h-[54px] md:w-[160px] md:h-[90px] fill-current hover:-translate-y-1 transition-transform object-contain"
        />
      </a>

      {/* pc */}
      <nav className="hidden md:flex space-x-20 pr-5">
        {["GALLERY", "TESTIMONIALS", "ABOUT", "INFO"].map((text, index) => (
          <a
            key={index}
            href={`#${text.toLowerCase()}`}
            className="relative font-[Montserrat] text-white text-sm font-medium transition-all text-center"
          >
            <span className="absolute invisible font-bold">{text}</span>
            <span className="block hover:font-bold">{text}</span>
          </a>
        ))}
      </nav>

      {/* hamburger */}
      <button
        className="cursor-pointer sm:flex md:hidden text-white text-2xl absolute right-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
    </motion.header>
  );
};

export default Navbar;
