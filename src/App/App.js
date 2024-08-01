import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from "../Components/NavBar";
import HomePage from '../Pages/HomePage';
import ShopNow from '../Pages/ShopNow';
import ContactUs from '../Pages/ContactUs';
import AboutUs from '../Pages/AboutUs';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop-now" element={<ShopNow />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
