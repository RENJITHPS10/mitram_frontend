
import React from "react";

function AdminAuth() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center text-white">
        <section className="bg-gray-800 bg-opacity-80 shadow-2xl rounded-lg p-8 w-[24rem] sm:w-[30rem] space-y-8">
        <div className="flex justify-center mb-6">
            <img
              src="Mitramicon.png" // Path to your logo
              alt="Logo"
              className="h-20 w-auto" // Adjust the size as necessary
            />
          </div>
          <h1 className="text-center text-4xl font-extrabold text-sky-400">
            Admin Login
          </h1>
          
          <div className="space-y-6">
            {/* Email input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-3 text-lg bg-transparent border-b-2 border-gray-500 placeholder-gray-400 outline-none focus:border-sky-500  transition-all"
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 text-lg bg-transparent border-b-2 border-gray-500 placeholder-gray-400 outline-none focus:border-sky-500  transition-all"
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-slate-900 via-cyan-500 to-slate-900 rounded-lg shadow-lg hover:from-sky-500 hover:from-slate-950 hover:via-cyan-600 hover:to-slate-950  hover:shadow-xl transition-all">
            LOG IN
          </button>

         
          
        </section>
      </main>
    </>
  );
}

export default AdminAuth;
