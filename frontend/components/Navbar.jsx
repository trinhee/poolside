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
      setIsScrollingDown(currentScrollY > lastScrollY);

      // Add shadow when scrolling down
      setIsShadowVisible(currentScrollY > 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isScrollingDown ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed left-0 top-0 w-full px-4 md:px-10 py-4 z-50 flex items-center justify-between transition-all ${
        isShadowVisible ? "bg-black/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="/" className="relative flex-shrink-0">
        <Image
          src="/logo.png"
          alt="logo"
          width={240}
          height={133}
          priority
          className="w-[90px] h-[54px] md:w-[160px] md:h-[90px] hover:-translate-y-1 transition-transform object-contain"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-20 pr-5">
        {["gallery", "testimonials", "about", "info"].map((section, index) => (
          <button
            key={index}
            onClick={() => handleScroll(section)}
            className="cursor-pointer font-[Montserrat] text-white text-sm font-medium transition-all text-center hover:font-bold"
          >
            {section.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger Menu */}
      <button
        className="cursor-pointer sm:flex md:hidden text-white text-2xl absolute right-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Overlay Menu */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center space-y-6 text-white text-lg z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: isMenuOpen ? "0%" : "100%", opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {["gallery", "testimonials", "about", "info"].map((section, index) => (
          <button
            key={index}
            onClick={() => handleScroll(section)}
            className="cursor-pointer text-2xl font-semibold hover:underline transition-all"
          >
            {section.toUpperCase()}
          </button>
        ))}
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-3xl">
          ✕
        </button>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
