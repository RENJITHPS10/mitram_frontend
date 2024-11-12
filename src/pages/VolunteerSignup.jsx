import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function VolunteerSignup() {
    return (
        <>
            <div className="bg-logincover bg-no-repeat bg-cover bg-center">
                {/* Back to Home Button (Optional) */}
                <Link to={'/'}>
          <button className="absolute md:top-1 md:left-64 md:bg-gradient-to-r from-[#3182CE] to-[#066bb4] px-6 py-2 text-white text-xl hover:from-[#2563EB] hover:to-[#1E40AF] transition duration-300 rounded-full">
            <FontAwesomeIcon icon={faBackward} className="me-2" />
            Back to Home
          </button>
        </Link>

                <div className="grid md:grid-cols-2 items-center md:px-60 md:h-screen">
                    {/* Left Section */}
                    <div className="bg-gradient-to-tr from-[#2D3748] to-[#4A5568] md:rounded-l-3xl p-10 text-white">
                        <div className="flex items-center mb-8">
                            <img
                                src="/Mitramicon.png"
                                alt="Mitramicon"
                                className="w-20 h-20 me-5"
                                style={{ filter: 'brightness(10)' }}
                            />
                            <h1 className="font-bold text-3xl my-14">Welcome to Mitram</h1>
                        </div>

                        <div className="ps-5 mt-6">
                            <p className="text-2xl italic mb-5">"Join Us in Making a Difference!"</p>
                            <p className="text-xl text-justify">
                            Empower communities, provide shelter, and share updates during emergencies. Sign up today to create safer spaces for all! Your contributions ensure timely information and support, making a difference in times of need. Join us now to protect and inform.


                            </p>
                            <p className="text-2xl italic pt-32">
                                Already have account? <Link to={'/volunteerlogin'}> <span className="not-italic font-bold  hover:text-blue-500 text-blue-400 underline">Sign In </span></Link>
                            </p>
                        </div>
                    </div>

                    {/* Right Section - SignUp Form */}
                    <div className="bg-[#1A202C] md:rounded-r-3xl pb-10">
                        <h1 className="text-4xl font-bold text-center py-10 text-white">Sign Up</h1>

                        <div className="flex flex-col items-center space-y-6">
                            {/* Username Input */}
                            <input
                                type="text"
                                className="rounded-full w-3/4 ps-10 text-xl h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                                placeholder="Username"
                            />
                            {/* Email Input */}
                            <input
                                type="email"
                                className="rounded-full w-3/4 ps-10 text-xl h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                                placeholder="Enter email"
                            />
                            {/* Phone Number Input */}
                            <input
                                type="tel"
                                className="rounded-full w-3/4 ps-10 text-xl h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                                placeholder="Phone Number"
                            />

                            {/* File Upload Button */}
                            <label htmlFor="file-upload" className="w-3/4">
                                <p className="rounded-full w-full ps-10 pt-2 text-xl h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] hover:bg-[#4A5568] transition duration-300 ">
                                    Upload Proof
                                </p>
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                                    accept="image/*" // Optional: Restrict the file types (e.g., only images)
                                />
                            </label>


                            {/* Password Input */}
                            <input
                                type="password"
                                className="rounded-full w-3/4 ps-10 text-xl h-12 mt-5 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                                placeholder="Password"
                            />
                            <input
                                type="password"
                                className="rounded-full w-3/4 ps-10 text-xl h-12 mt-5 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                                placeholder="Confirm Password"
                            />

                            {/* Submit Button */}
                            <button className="bg-gradient-to-r from-[#3182CE] to-[#63B3ED] rounded-full w-3/4 h-12 my-12 text-white text-2xl font-bold shadow-lg hover:from-[#2563EB] hover:to-[#1E40AF] transition duration-500 ease-in-out">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VolunteerSignup;
