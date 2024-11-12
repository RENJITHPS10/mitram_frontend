import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Volunteerlogin() {
  return (
    <div className="bg-logincover bg-no-repeat bg-cover bg-center">
    <Link to={'/'}>
          <button className="absolute md:top-24 md:left-64 md:bg-gradient-to-r from-[#3182CE] to-[#066bb4] px-6 py-2 text-white text-xl hover:from-[#2563EB] hover:to-[#1E40AF] transition duration-300 rounded-full">
            <FontAwesomeIcon icon={faBackward} className="me-2" />
            Back to Home
          </button>
    </Link>
      
      <div className="grid md:grid-cols-2 items-center md:px-60 md:h-screen">
        <div className="bg-gradient-to-tr from-[#2D3748] to-[#4A5568] md:rounded-l-3xl md:p-10 pt-20 text-white">
          <div className="flex items-center">
            <img src="/Mitramicon.png" alt="Mitramicon" className="w-20 h-20 me-5" style={{ filter: 'brightness(10)' }} />
            <h1 className="font-bold text-3xl mt-7">Welcome to Mitram</h1>
          </div>

          <div className="px-5 mt-6">
            <p className="text-2xl italic mb-6">"Welcome Back, Hero!"</p>
            <p className="text-xl text-justify">Log in to continue empowering communities and supporting those in need. Together, we create safer spaces for all!</p>
            <p className="text-2xl italic md:pt-24 md:py-0 py-10">
              New here?<Link to={'/volunteersignup'}> <span className="not-italic font-bold hover:text-blue-500 text-blue-400 underline">Sign Up</span></Link>
            </p>
          </div>
        </div>

        <div className="bg-[#1A202C] md:rounded-r-3xl">
          <h1 className="text-4xl font-bold text-center py-16 text-white">Login</h1>

          <div className="flex flex-col items-center">
            <input
              type="text"
              className="rounded-full w-3/4 ps-10 text-xl mt-1 h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
              placeholder="Enter email"
            />
            <input
              type="password"
              className="rounded-full w-3/4 ps-10 text-xl h-12 mt-10 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
              placeholder="Password"
            />
            <button className="bg-gradient-to-r from-[#3182CE] to-[#63B3ED] rounded-full w-3/4 h-12 my-12 text-white text-2xl font-bold shadow-lg hover:from-[#2563EB] hover:to-[#1E40AF] transition duration-500 ease-in-out">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteerlogin;
