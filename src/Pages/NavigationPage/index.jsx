import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationPage.css'
const Navigation = () => {
  return (
    <nav className='nav-page'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
