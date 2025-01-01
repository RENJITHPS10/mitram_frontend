import React from 'react';

function Pagenotfound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-blue-500">
      <div className="text-center text-white px-5">
        <h1
          className="text-9xl font-extrabold drop-shadow-lg"
          style={{
            textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)',
          }}
        >
          404
        </h1>
        <p className="text-xl md:text-2xl mt-4 drop-shadow-md">
          Oops! The page you're looking for seems to have vanished.
        </p>
        <p className="text-sm md:text-lg mt-2 text-gray-300 drop-shadow-sm">
          It may have been moved or never existed in the first place.
        </p>
        <div className="mt-10">
          <a
            href="/"
            className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-lg font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Back to Home
          </a>
        </div>
       
      </div>
    </div>
  );
}

export default Pagenotfound;
