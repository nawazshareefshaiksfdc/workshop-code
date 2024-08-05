import React from 'react';
import './style.css';
import FilterImages from './FilterImages';
const FilterHeader = () => {
  return (
    <div className='FilterHeader'>
      {FilterImages.map((slide, index) => (
        <div key={index} className='filter-image-container'>
          <img id={`slideImage-${index + 1}`} src={slide.src} alt={slide.alt} />
          <div className="dropdown">
            <div className='filter-data'>
              {slide.alt}
              {slide.sub && <span>&gt;</span>}
            </div>
            {slide.sub && (
              <div className="dropdown-content">
                {slide.sub.map((subItem, subIndex) => (
                  <a key={subIndex} href="#">{subItem}</a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default FilterHeader;
