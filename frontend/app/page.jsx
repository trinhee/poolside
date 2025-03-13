import React from 'react';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Contact from '@components/Contact'
import About from '@components/About';
import Gallery from '@components/Gallery';

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Contact/>
    <About/>
    <Gallery/>
    </>
  )
}

export default page