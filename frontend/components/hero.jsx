"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = ["Luxury Backyards", "Extraordinary Swimming Pools", "Trusted Company", "World-Class Service", "Bring Beauty Into Your Home"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* video bg */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/poolsidemain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30">
        {/* looping text */}
        <div className="h-10 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-lg uppercase tracking-wide font-light"
            >
              {phrases[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* main */}
        <h1 className="text-5xl md:text-7xl mt-2 tracking-wider">POOLSIDE INC</h1>

        <p className="font-[Alegreya] text-lg md:text-xl italic mt-2">
          Toronto Swimming Pool Company
        </p>

        {/* buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 border border-white text-white uppercase font-medium hover:bg-white hover:text-black transition">
            Get a Quote
          </button>
          <button className="px-6 py-3 border border-white text-white uppercase font-medium hover:bg-white hover:text-black transition">
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
