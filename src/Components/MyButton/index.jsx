import React from 'react';
import './MyButton.css'
const MyButton = ({ onClick, Name }) => {
  return (
    <button onClick={onClick} className='MyButton'>
      {Name}
    </button>
  );
};

export default MyButton;
