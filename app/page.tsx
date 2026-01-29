'use client';

import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import FloatingHearts from './components/FloatingHearts';
import DuduGif from './components/DuduGif';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500); // Wait 1.5 seconds before showing the rest of the content

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#fce4ec]">
      <FloatingHearts />
      <div className="relative z-20 flex flex-col items-center">
        <DuduGif />
        <h1 className="text-8xl font-bold text-pink-800 mb-4 text-center italic">
          To the love of my life, Sariya Khanam
        </h1>
        <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}>
          <p className="text-4xl text-pink-700 my-8 text-center italic">
            Would you like to see what I have made for you?
          </p>
          <div className="flex space-x-8 mt-8">
            <button className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-pink-400/50">
              <FaHeart />
              <span>Yes</span>
            </button>
            <button className="flex items-center space-x-2 bg-white hover:bg-pink-100 text-pink-700 font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-pink-200/50">
              <FaRegHeart />
              <span>No</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
