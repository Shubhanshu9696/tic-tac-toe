// src/components/Square.js
import React from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-16 h-16 bg-white border border-gray-400 flex items-center justify-center text-2xl font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
