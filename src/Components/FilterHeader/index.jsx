import React from 'react';
import './style.css';


import GroceryImage from './smallImages/Grocery.webp';
import Mobiles from './smallImages/Mobile.webp';
import Fashion from './smallImages/Fashion.webp';
import Electronics from './smallImages/Electronics.webp';
import Homefurniture from './smallImages/Homefurniture.webp'
import Appliances from './smallImages/Appliances.webp';
import Travel from './smallImages/Travel.webp';
import Beautytoysmore from './smallImages/Beauty, Toys & more.webp'
import Twowheelers from './smallImages/Twowheelers.webp'; 
const FilterHeader = () => {  
    const FilterImages = [
        { alt: "Grocery", src: GroceryImage },
        { alt: "Mobiles", src: Mobiles},
        { alt: "Fashion", src: Fashion},
        { alt: "Electronics", src: Electronics},
        { alt: "Home & Furniture", src: Homefurniture},
        { alt: "Appliances", src: Appliances},
        { alt: "Travel", src: Travel},
        { alt: "Beauty, Toys & More", src: Beautytoysmore},
        { alt: "Two Wheelers", src: Twowheelers},
    ];
 
    return (
        <div className='FilterHeader'>
        {FilterImages.map((slide, index) => (
          <div key={index} className='filter-image-container'>
            <img id={`slideImage-${index + 1}`} src={slide.src} alt={slide.alt} />
            <div class="dropdown">
              <div className='filter-data'>{slide.alt}<span>&gt;</span></div>
              <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default FilterHeader;
