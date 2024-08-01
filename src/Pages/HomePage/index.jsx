import React from 'react';
import './HomePage.css';
import FilterHeader from '../../Components/FilterHeader';
import HeroHeader from '../../Components/HeroHeader';
const HomePage = () => {
  return (
    <div className="home-page">
        <FilterHeader/>
        <HeroHeader/>
    </div>
  );
};

export default HomePage;
