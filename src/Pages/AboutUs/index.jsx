import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our company! We are committed to providing the best service and products to our customers. Here’s a little bit about who we are and what we stand for.</p>
      <div className="about-info">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver high-quality products and exceptional customer service. We strive to exceed our customers' expectations with every interaction.</p>
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Customer Focus</li>
          <li>Innovation</li>
          <li>Excellence</li>
        </ul>
        <h2>Our Team</h2>
        <p>Our team is composed of dedicated professionals who are passionate about what they do. Together, we work hard to achieve our goals and make a positive impact.</p>
      </div>
    </div>
  );
};

export default AboutUs;
