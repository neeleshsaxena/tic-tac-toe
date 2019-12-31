import React from 'react';
import '../styles/Game.css';

const Square = ({ value, onClick, x, y }) => (
    <button className="square" onClick={()=>onClick(x,y)}>
      {value}
    </button>
  );

export default Square;
