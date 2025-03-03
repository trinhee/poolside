"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconLogo from "next/image";

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isShadowVisible, setIsShadowVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide on down, show on up
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      // shadow on down scroll
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
      className={`fixed top-0 left-0 w-full px-8 py-3 z-50 flex items-center justify-between transition-all ${
        isShadowVisible ? "shadow-lg backdrop-blur-md bg-black/30" : "bg-transparent"
      }`}
    >
      {/* logo */ }
      <a href="#hero" className="flex items-center text-white text-3xl font-light">
        <IconLogo src="/logo.png" width={50} height={50} priority className="w-10 h-10 fill-current hover:translate-y-[-2px] transition-transform" />
      </a>
      

      {/* links, filler for now */}
      <nav className="hidden md:flex space-x-8">
        <a href="#about" className="text-white text-sm font-light hover:font-bold transition-all">
          About
        </a>
        <a href="#experience" className="text-white text-sm font-light hover:font-bold transition-all">
          Experience
        </a>
        <a href="#work" className="text-white text-sm font-light hover:font-bold transition-all">
          Work
        </a>
        <a href="#contact" className="text-white text-sm font-light hover:font-bold transition-all">
          Contact
        </a>
      </nav>

      {/* menu */}
      <button className="cursor-pointer border border-white text-white text-sm font-light px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
        Menu
      </button>
    </motion.header>
  );
};

export default Navbar;
