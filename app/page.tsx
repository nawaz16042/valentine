export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#fce4ec]">
      <h1 className="text-6xl font-bold text-pink-800 mb-8">
        Will you be my Valentine?
      </h1>

      <div className="flex space-x-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">
          Yes
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">
          Think about it
        </button>
      </div>
    </main>
  );
}
