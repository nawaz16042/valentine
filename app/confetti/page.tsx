'use client';

import Confetti from '../components/Confetti';

export default function ConfettiPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#fce4ec]">
      <Confetti />
      <div className="relative z-20 text-center">
        <h1 className="text-9xl font-bold text-pink-700 italic">I AM BLESSED</h1>
      </div>
    </main>
  );
}
