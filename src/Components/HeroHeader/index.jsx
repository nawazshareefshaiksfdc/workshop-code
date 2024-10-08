import React, { useState, useEffect } from 'react';
import './style.css';
import slideImages from './slideImages';
const HeroHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;
  const autoplayInterval = 3000; // autoplay interval in milliseconds
  // Function to navigate slides
  const navigateSlides = (step) => {
    setCurrentSlide((prev) => {
      let newSlide = prev + step;
      if (newSlide < 1) {
        return totalSlides;
      } else if (newSlide > totalSlides) {
        return 1;
      }
      return newSlide;
    });
  };
  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      navigateSlides(1);
    }, autoplayInterval);
    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);
  return (
    <div className="HeroHeader">
      <div className="slideshow-container">
        {slideImages.map((slide, index) => (
          <div key={slide.src} className={`mySlides fade ${index + 1 === currentSlide ? 'active' : ''}`}>
            <img id={`slideImage-${index + 1}`} src={slide.src} alt={`Slide ${index + 1}`} className='slider-image' />
          </div>
        ))}
        <button className="prev" onClick={() => navigateSlides(-1)}>&#10094;</button>
        <button className="next" onClick={() => navigateSlides(1)}>&#10095;</button>
      </div>
      <div className="slide-navigation" style={{ textAlign: 'center' }}>
        {slideImages.map((_, index) => (
          <span key={index} className={`dot ${index + 1 === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index + 1)}></span>
        ))}
      </div>
    </div>
  );
};
export default HeroHeader;
