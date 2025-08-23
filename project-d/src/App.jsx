import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

//Home Components
import Navbar from '../src/pages/dashboard/components/navbar/navbar.jsx';
import Hero from '../src/pages/dashboard/components/hero/hero.jsx';
import SubHero from './pages/dashboard/components/sub-hero/sub-hero.jsx';
import About from './pages/dashboard/components/about/about.jsx';
import Services from './pages/dashboard/components/services/services.jsx';
import Reviews from './pages/dashboard/components/reviews/reviews.jsx';
import Gallery from './pages/dashboard/components/gallery/gallery.jsx';
import Contact from './pages/dashboard/components/contact/contact.jsx';

//AboutPage Components
import AboutNavbar from '../src/pages/about/components/about-navbar/about-navbar.jsx';
import AboutHero from './pages/about/components/about-hero/about-hero.jsx';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <SubHero />
    <About />
    <Services />
    <Gallery />
    <Reviews />
    <Contact />

  </>
);

const AboutPage = () => (
  <>
    <AboutNavbar />
    <AboutHero />
  </>
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<AboutPage />}/>
      </Routes>
    </>
  );
};

export default App
