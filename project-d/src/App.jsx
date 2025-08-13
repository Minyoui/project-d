import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css' 

const Home = () => {

};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
};

export default App
