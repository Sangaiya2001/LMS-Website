// src/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Testimonials from './Testimonials';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Testimonials" element={<Testimonials />} />
    </Routes>
  );
};

export default AppRoutes;
