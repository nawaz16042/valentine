'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const messages = [
  "From the day I have laid my eyes on you......",
  "I have been feeling a heartbeat....",
  "a heartbeat which is louder than ever before which is faster than ever before.......",
  "And this heartbeat is just for yoou my love.......",
  "i want you to feel this heartbeat..... not just as a frnd .....",
  "not just as sariyaaa......",
  "but as mine....",
  "AS MY VALENTINE.....",
  "sooo babbyy .....",
  "will you be my valentine ?"
];

export default function ValentinePage() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentMessageIndex(prevIndex => prevIndex + 1);
          setIsFading(false);
        }, 1000); // Fade transition duration
      }, 3000); // Time each message is visible

      return () => clearTimeout(timer);
    } else {
      const buttonTimer = setTimeout(() => {
        setShowButtons(true);
      }, 3000);
      return () => clearTimeout(buttonTimer);
    }
  }, [currentMessageIndex]);

  const handleButtonClick = () => {
    router.push('/confetti');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#fce4ec]">
      <div className="relative z-20 flex flex-col items-center text-center">
        <p className={`text-8xl text-pink-700 my-8 italic transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {messages[currentMessageIndex]}
        </p>
        {showButtons && (
          <div className="flex flex-row items-center space-x-8 mt-8">
            <button onClick={handleButtonClick} className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-pink-400/50 text-2xl">
              <span>yesss</span>
            </button>
            <button onClick={handleButtonClick} className="flex items-center space-x-2 bg-white hover:bg-pink-100 text-pink-700 font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-pink-200/50">
              <span>ofcc yesss</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
