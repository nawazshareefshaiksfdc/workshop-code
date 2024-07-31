import React, { useState, useEffect } from 'react';
import './style.css';

const HeroHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;
  const autoplayInterval = 3000; // autoplay interval in milliseconds

  const slideImages = [
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/04bb152bb2d3f429.jpg?q=20" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3c0e1e3aca8b3c9d.jpg?q=20" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5bd9c5c309353306.jpeg?q=20" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/45491294b0d546c4.jpg?q=20" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b61d308e686f6f8e.jpg?q=20" },
    { src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4373e1bc9ffd7daa.jpeg?q=20" }
  ];

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
            <img id={`slideImage-${index + 1}`} src={slide.src} alt={`Slide ${index + 1}`} />
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
