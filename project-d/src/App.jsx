import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/pages/dashboard/components/navbar/navbar.jsx';
import Hero from '../src/pages/dashboard/components/hero/hero.jsx';
import SubHero from './pages/dashboard/components/sub-hero/sub-hero.jsx';
import About from './pages/dashboard/components/about/about.jsx';
import Services from './pages/dashboard/components/services/services.jsx';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <SubHero />
    <About />
    <Services />
    
  </>
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
};

export default App
