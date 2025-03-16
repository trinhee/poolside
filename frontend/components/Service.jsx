"use client"

import { useState } from "react"
import Image from "next/image"

export default function Service() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: 0,
      title: "Pools",
      image: "/gallery1.jpg",
      description:
        "Transform your backyard into a private oasis with our custom-designed pools. Whether you dream of a natural lagoon-style retreat, or a classic family pool, we bring your vision to life with expert craftsmanship, premium materials, and state-of-the-art technology for a stunning and functional outdoor escape.",
    },
    {
      id: 1,
      title: "Interlock",
      image: "/gallery2.jpg",
      description:
        "Elevate your outdoor space with beautifully crafted interlock solutions. From elegant driveways and pathways to stunning patios and pool decks, our high-quality pavers offer durability, style, and seamless integration with your landscape, creating a sophisticated and low-maintenance foundation for your backyard.",
    },
    {
      id: 2,
      title: "Woodwork",
      image: "/gallery3.jpg",
      description:
        "Add warmth and character to your backyard with custom wood features. From pergolas and gazebos to privacy fences and decks, our expert craftsmanship ensures stunning, high-quality woodwork that enhances both the beauty and functionality of your outdoor space.",
    },
    {
      id: 3,
      title: "Masonry",
      image: "/gallery4.jpg",
      description:
        "Bring timeless elegance and durability to your backyard with expert masonry work. Whether it's a stunning stone fireplace, a custom outdoor kitchen, or decorative retaining walls, our skilled masons use premium materials to create structures that stand the test of time while adding charm and sophistication to your property.",
    },
  ]

  return (
    <section id="about" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Build</h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-3 text-sm md:text-base font-medium transition-colors relative
                ${activeTab === service.id ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}
              `}
            >
              {service.title}
              {activeTab === service.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Image Side - Left on desktop, top on mobile */}
          <div className="w-full md:w-1/2 order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={services[activeTab].image || "/placeholder.svg"}
                alt={services[activeTab].title}
                fill
                className="object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Text Side - Right on desktop, bottom on mobile */}
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{services[activeTab].title}</h3>
            <p className="text-gray-700 leading-relaxed">{services[activeTab].description}</p>

            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

