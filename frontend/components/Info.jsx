"use client"

import { useState } from "react"
import Image from "next/image";

// Social Media Icons
const IconInstagram = () => (
  <a
    href="https://www.instagram.com/poolsideinc"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-12 h-12 rounded-full border-1 border-current transition-all hover:border-white hover:bg-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 transition-all group-hover:stroke-black"
    >
      <title>Instagram</title>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </a>
)

const IconFacebook = () => (
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-12 h-12 rounded-full border-1 border-current transition-all hover:border-white hover:bg-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 transition-all group-hover:stroke-black"
    >
      <title>Facebook</title>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  </a>
)

const IconLinkedin = () => (
  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-12 h-12 rounded-full border-1 border-current transition-all hover:border-white hover:bg-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 transition-all group-hover:stroke-black"
    >
      <title>LinkedIn</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>
)

const IconYoutube = () => (
  <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-12 h-12 rounded-full border-1 border-current transition-all hover:border-white hover:bg-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 transition-all group-hover:stroke-black"
    >
      <title>YouTube</title>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  </a>
)

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
              anothony@poolsideinc.ca
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
          <div className="w-16 h-16 border-2 border-black flex items-center justify-center bg-black">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="object-contain"/>
          </div>
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
            
            <a href="/properties" className="px-2 py-1 hover:underline">
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

