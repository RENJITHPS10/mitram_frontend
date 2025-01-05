import React from "react";
import { Link } from "react-router-dom";

function VerificationMessage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
      {/* Animated Content Box */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-8 rounded-2xl shadow-lg w-96 animate-slide-down">
        <div className="flex justify-center mb-6">
          {/* Glowing Check Icon */}
          <div className="bg-gray-900 p-4 rounded-full shadow-2xl animate-glow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.383 0 0 5.383 0 12c0 6.617 5.383 12 12 12s12-5.383 12-12c0-6.617-5.383-12-12-12zm-2.25 17.53l-4.53-4.53 1.77-1.77 2.76 2.77 6.72-6.72 1.77 1.77-8.5 8.5z" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-center mb-3 text-gradient-to-br from-blue-400 to-green-400 tracking-wider">
          Verifying Your Account
        </h1>
        <p className="text-gray-300 text-center mb-6 leading-relaxed tracking-wide">
          Thank you for your patience! Your account verification is currently
          underway. You’ll hear from us soon.
        </p>
        <div className="flex flex-col space-y-4 ">
          <Link
            to="/userlogin"
            className="bg-blue-600 py-2 rounded-md text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 ps-24" 
          >
             Proceed to Login
          </Link>
          <Link
            to="/"
            className="bg-gray-600 py-2 rounded-md text-white font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 ps-24"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VerificationMessage;
