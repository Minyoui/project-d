import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/pages/dashboard/components/navbar/navbar.jsx';

const Home = () => (
  <>
    <Navbar />
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
