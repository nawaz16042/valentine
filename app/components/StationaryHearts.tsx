'use client';

import { FaHeart } from 'react-icons/fa';

const StationaryHearts = () => {
  const numRows = 8;
  const numCols = 12;
  const hearts = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const colOffset = row % 2 === 0 ? 0.5 : 0;
      const style = {
        top: `${(row / numRows) * 100}%`,
        left: `${((col + colOffset) / numCols) * 100}%`,
        fontSize: '1rem', // Uniform size
        color: 'white',
      } as React.CSSProperties;
      hearts.push(<FaHeart key={`${row}-${col}`} className="absolute" style={style} />);
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden">
      {hearts}
    </div>
  );
};

export default StationaryHearts;
