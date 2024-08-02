import React from 'react';
import './style.css';
import GroceryImage from './smallImages/Grocery.webp';
import Mobiles from './smallImages/Mobile.webp';
import Fashion from './smallImages/Fashion.webp';
import Electronics from './smallImages/Electronics.webp';
import Homefurniture from './smallImages/Homefurniture.webp';
import Appliances from './smallImages/Appliances.webp';
import Travel from './smallImages/Travel.webp';
import Beautytoysmore from './smallImages/Beauty, Toys & more.webp';
import Twowheelers from './smallImages/Twowheelers.webp';
const FilterHeader = () => {
  const FilterImages = [
    { alt: "Grocery", src: GroceryImage },
    { alt: "Mobiles", src: Mobiles },
    { alt: "Fashion", src: Fashion, sub: ["Men's Top Wear", "Women's Top Wear", "Women's Ethnic Wear", "Men's Footwear", "Women's Footwear", "Men's Watches", "Watches & Accessories"] },
    { alt: "Electronics", src: Electronics, sub: ['Audio', 'Electronic GST store', 'Cameras & Accessories', 'Gaming', "Health & Personal care "] },
    { alt: "Home & Furniture", src: Homefurniture, sub: ["home furnishing", "Living Room Furniture", "Kitchen & Dining", "Kitchen Furniture", "Space saving and Dining"] },
    { alt: "Appliances", src: Appliances },
    { alt: "Travel", src: Travel },
    { alt: "Beauty, Toys & More", src: Beautytoysmore, sub: ["Beauty & Personal Care", "Men's Grooming", "Food & Drinks", "Nutrition & Health Care", "Toys & School Supplies"] },
    { alt: "Two Wheelers", src: Twowheelers, sub: ["Petrol Vehicles", "Electric Vehicles"] }
  ];
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
