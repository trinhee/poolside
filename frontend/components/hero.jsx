"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = ["Luxury Backyards", "Extraordinary Swimming Pools", "Trusted Company", "World-Class Service", "Bringing Beauty Into Your Home"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000); // 5 sec
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
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src="/poolsidemain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* tint */ }
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50">

        {/* looping text */}
        <div className="h-10 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-[Montserrat] text-xs md:text-xl uppercase tracking-wide font-light"
            >
              {phrases[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* main */}
        <h1 className="font-[Montserrat] text-5xl md:text-7xl mt-2 tracking">POOLSIDE INC</h1>

        <p className="font-[Playfair] text-xl md:text-2xl italic mt-6">
          Luxury Backyards & Swimming Pools
        </p>

        {/* buttons */}
        <div className="mt-8 flex gap-4">
          <button className="font-[Montserrat] cursor-pointer px-8 py-2.5 border-2 border-white text-white uppercase font-light hover:bg-white hover:text-black transition">
            Get a Quote
          </button>
          <button className="font-[Montserrat] cursor-pointer px-8 py-2.5 border-2 border-white text-white uppercase font-light hover:bg-white hover:text-black transition ease-in-out">
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
