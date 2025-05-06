import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Website/Navbar';
import Home from './Website/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* Add more routes here if needed */}
      </Routes>
    </>
  );
}

export default App;
