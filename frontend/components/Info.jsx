"use client"

import { useState } from "react"
import Image from "next/image";
import IconInstagram from "../icons/Instagram";
import IconFacebook from "../icons/Facebook";
import IconLinkedin from "../icons/Linkedin";
import IconYoutube from "../icons/Youtube";


export default function InfoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div id="info" className="min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="py-8 flex justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold tracking-tighter">PS</div>
          <div className="text-sm tracking-widest mt-1">POOLSIDE INC</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">CONTACT</h2>
              <p className="mb-1">(416) 399-6769</p>
              <a href="mailto:katyoontorabi@yahoo.com" className="text-blue-600 hover:underline">
              anthony@poolsideinc.ca
              </a>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">PLACEHOLDER</h2>
              <p className="mb-1">Luxury Backyards and Swimming Pools</p>
              <p className="mb-1"></p>
              <p></p>
            </div>
          </div>

          {/* Right Column - Address and Social */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">ADDRESS</h2>
              <p className="mb-1">123 Pool St, Water City, WC 12345</p>
              <p>Toronto, ON, Canada</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start md:justify-end space-x-3 mt-6">
              <IconFacebook />
              <IconInstagram />
              <IconLinkedin />
              <IconYoutube />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-600 my-8">
          
        </div>

        {/*  Logo */}
        <div className="flex justify-center my-8">
            <Image src="/web-app-manifest-512x512.png" alt="Logo" width={64} height={64} className="object-contain"/>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-center mb-4">
            <button onClick={toggleMobileMenu} className="px-4 py-2 border border-gray-300 rounded">
              {mobileMenuOpen ? "Close Menu" : "Menu"}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-8">
            <a href="/" className="px-2 py-1 hover:underline">
              Home
            </a>
            
            <a href="/work" className="px-2 py-1 hover:underline">
              Featured Work
            </a>
            <a href="/search" className="px-2 py-1 hover:underline">
              Search
            </a>
            
            <a href="/contact" className="px-2 py-1 hover:underline">
              Contact
            </a>
            <a href="/links" className="px-2 py-1 hover:underline">
              Important Links
            </a>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden flex flex-col items-center space-y-4">
              <a href="/" className="px-2 py-1 hover:underline">
                Home
              </a>
              <a href="/meet" className="px-2 py-1 hover:underline">
                Meet Poolside
              </a>
              <a href="/properties" className="px-2 py-1 hover:underline">
                Featured
              </a>
              <a href="/search" className="px-2 py-1 hover:underline">
                Search
              </a>
              <a href="/valuation" className="px-2 py-1 hover:underline">
                Valuation
              </a>
              <a href="/contact" className="px-2 py-1 hover:underline">
                Contact
              </a>
              <a href="/links" className="px-2 py-1 hover:underline">
                Important Links
              </a>
            </nav>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-2 md:mb-0">Copyright 2025</div>
          <div className="text-sm text-gray-600">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

