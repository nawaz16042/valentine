'use client';

import { FaHeart } from 'react-icons/fa';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 });

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden">
      {hearts.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 2}s`,
          fontSize: `${Math.random() * 1.5 + 0.5}rem`,
          '--final-y': `${Math.random() * 15}vh`,
        } as React.CSSProperties;
        return <FaHeart key={i} className="absolute text-pink-400 animate-float" style={style} />;
      })}
    </div>
  );
};

export default FloatingHearts;
