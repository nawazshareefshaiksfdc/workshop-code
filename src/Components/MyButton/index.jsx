import React from 'react';
import './style.css';

const MyButton = ({ Name }) => {
  return (
    <div className='MyButton'>
      {Name}
    </div>
  );
}

export default MyButton;
