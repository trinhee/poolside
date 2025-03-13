"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "/gallery1.jpg",
      alt: "Pool gallery image 1",
      title: "NOTABLE PROJECTS",
      subtitle: "MODERN OASIS",
      details: ["Custom Design", "Infinity Edge", "Natural Stone"],
    },
    {
      id: 2,
      src: "/gallery2.jpg",
      alt: "Pool gallery image 2",
      title: "NOTABLE PROJECTS",
      subtitle: "LUXURY RETREAT",
      details: ["Spa Integration", "LED Lighting", "Waterfall Feature"],
    },
    {
      id: 3,
      src: "/gallery3.jpg",
      alt: "Pool gallery image 3",
      title: "NOTABLE PROJECTS",
      subtitle: "FAMILY PARADISE",
      details: ["Kid-Friendly", "Tanning Ledge", "Outdoor Kitchen"],
    },
    {
      id: 4,
      src: "/gallery4.jpg",
      alt: "Pool gallery image 4",
      title: "NOTABLE PROJECTS",
      subtitle: "COASTAL ELEGANCE",
      details: ["Beachfront View", "Salt System", "Automated Cover"],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const currentImage = images[currentIndex]

  return (
    <div className="relative w-full h-screen">
      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Image Information */}
        <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
          <div className="space-y-2">
            <p className="text-sm md:text-base tracking-wider">{currentImage.title}</p>
            <h2 className="text-2xl md:text-4xl font-bold">{currentImage.subtitle}</h2>
            <div className="flex flex-wrap gap-x-4 text-sm md:text-base mt-2">
              {currentImage.details?.map((detail, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-block",
                    index < currentImage.details.length - 1 && "after:content-['|'] after:ml-4",
                  )}
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
          <Link href="/gallery">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              VIEW ALL
            </Button>
          </Link>
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index ? "bg-white w-4" : "bg-white/50",
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

