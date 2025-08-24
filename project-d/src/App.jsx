import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Loader Component

import Loader from './pages/loading-screen/component/loader.jsx';

// Home Components
import Navbar from '../src/pages/dashboard/components/navbar/navbar.jsx';
import Hero from '../src/pages/dashboard/components/hero/hero.jsx';
import SubHero from './pages/dashboard/components/sub-hero/sub-hero.jsx';
import About from './pages/dashboard/components/about/about.jsx';
import Services from './pages/dashboard/components/services/services.jsx';
import Reviews from './pages/dashboard/components/reviews/reviews.jsx';
import Gallery from './pages/dashboard/components/gallery/gallery.jsx';
import Contact from './pages/dashboard/components/contact/contact.jsx';
import Footer from './pages/dashboard/components/footer/footer.jsx';

// AboutPage Components
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
    <Footer />

  </>
);

const AboutPage = () => (
  <>
    <AboutNavbar />
    <AboutHero />
  </>
);

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only trigger loader if navigating between Home and AboutPage
    if (
      (location.pathname === '/' || location.pathname  === '/About')
    ) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1000); // 1 sec fake load
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<AboutPage />}/>
        </Routes>
      )}
    </>
  );
};

export default App
