'use client';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';

export default function NoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#fce4ec]">
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-8xl font-bold text-pink-800 mb-4 text-center italic">
          To the love of my life, Sariya Khanam
        </h1>
        <div className={"flex flex-col items-center"}>
          <p className="text-4xl text-pink-700 my-8 text-center italic">
            Are you sure? Take a moment to reconsider...
          </p>
          <div className="flex items-center space-x-8 mt-8">
            <Link href="/valentine">
              <button className="flex items-center space-x-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-12 px-24 text-6xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-pink-400/50">
                <FaHeart />
                <span>Yes</span>
              </button>
            </Link>
            <Link href="/valentine">
              <button className="flex items-center space-x-2 bg-white hover:bg-pink-100 text-pink-700 font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-pink-200/50">
                <FaRegHeart />
                <span>u sure??</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
