"use client";

import { useState } from "react";

export default function Gallery() {
  const images = [
    { id: 1, src: "/gallery1.jpg", alt: "Pool gallery image 1" },
    { id: 2, src: "/gallery2.jpg", alt: "Pool gallery image 2" },
    { id: 3, src: "/gallery3.jpg", alt: "Pool gallery image 3" },
    { id: 4, src: "/gallery4.jpg", alt: "Pool gallery image 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id = "gallery" className="relative w-full h-screen overflow-hidden">
      {/* Image Container with Smooth Transition */}
      <div
        className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${image.src})`,
              opacity: index === currentIndex ? 1 : 0.5,
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-black md:w-14 md:h-14"
        aria-label="Previous image"
      >
        {"<"}
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-black md:w-14 md:h-14"
        aria-label="Next image"
      >
        {">"}
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
