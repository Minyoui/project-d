import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/pages/dashboard/components/navbar/navbar.jsx';
import Hero from '../src/pages/dashboard/components/hero/hero.jsx';
import SubHero from './pages/dashboard/components/sub-hero/sub-hero.jsx';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <SubHero />
    
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
