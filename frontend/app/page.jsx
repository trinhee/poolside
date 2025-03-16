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
    <>
    <Navbar/>
    <Hero/>
    <Contact/>
    <Gallery/>
    <Service/>

    <Info/>

    </>
  )
}

export default page