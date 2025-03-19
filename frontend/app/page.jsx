import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact'
import About from '../components/About';
import Gallery from '../components/Gallery';
import Service from '../components/Service';
import Info from '../components/Info';

const page = () => {
  return (
    // <main className="m-4 md:m-8">
    <>
    <Navbar/>
    <Hero/>
    <Contact/>
    <Gallery/>
    <Service/>
    <Info/>
    </>
    // </main>
  )
}

export default page