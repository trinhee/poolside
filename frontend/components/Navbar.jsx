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
      className={`fixed top-5 left-0 w-full px-15 py-3 z-50 flex items-center justify-between transition-all ${
        isShadowVisible
          ? "shadow-lg backdrop-blur-md bg-black/30"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="flex items-center text-white text-3xl font-light"
      >
        <IconLogo
          src="/logo.png"
          alt="logo"
          width={180}
          height={100}
          priority
          className="w-[90px] h-[50px] md:w-[108px] md:h-[60px] fill-current hover:-translate-y-1 transition-transform object-contain"
        />
      </a>

      {/* links, filler for now */}
      <nav className="hidden md:flex space-x-1">
        {["GALLERY", "TESTIMONIALS", "ABOUT", "INFO"].map((text, index) => (
          <a
            key={index}
            href={`#${text.toLowerCase()}`}
            className="relative font-[Montserrat] text-white text-sm font-light transition-all min-w-[200px] text-center"
          >
            {/* Invisible text that forces the largest width */}
            <span className="absolute invisible font-medium">{text}</span>

            {/* Actual visible text that changes on hover */}
            <span className="block hover:font-medium">{text}</span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar;
