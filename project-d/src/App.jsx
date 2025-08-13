import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

const Home = () => {

};


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
