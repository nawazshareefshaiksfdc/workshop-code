import React from 'react';
import './style.css';

const FilterHeader = () => {
    let FilterImages = [
        { alt:"Grocery", src:"https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" },
        { alt:"Mobiles", src:"https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" },
        { alt:"Fashion", src:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" },
        { alt:"Electronics" ,src:"https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" },
        { alt:"Home &amp; Furniture", src:"https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" },
        { alt:"Appliances", src:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100"},
        { alt:"Travel", src:"https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100"},
        { alt:"Beauty, Toys &amp; More", src:"https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100"},
        { alt:"Two Wheelers", src:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100"},
    ];
    return (
        <div className='FilterHeader'>
           
            {FilterImages.map((slide, index) => (
          <div className='filter-image-container'>
            <img id={`slideImage-${index + 1}`} src={slide.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        </div>
    )
}

export default FilterHeader
