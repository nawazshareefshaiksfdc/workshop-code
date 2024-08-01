import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import MyButton from '../MyButton';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className='NavBar'>
      <MyButton onClick={() => navigate('/home')} Name="Home" />
      <MyButton onClick={() => navigate('/shop-now')} Name="Shop Now" />
      <MyButton onClick={() => navigate('/contact-us')} Name="Contact Us" />
      <MyButton onClick={() => navigate('/about-us')} Name="About Us" />
    </div>
  );
};

export default NavBar;
