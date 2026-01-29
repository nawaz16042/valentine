'use client';

import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Confetti = () => {
  const [pieces, setPieces] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newPieces: React.ReactNode[] = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      newPieces.push(<FaHeart key={i} className="confetti-piece heart" style={style} />);
    }
    setPieces(newPieces);
  }, []);

  return <div className="confetti-container">{pieces}</div>;
};

export default Confetti;
