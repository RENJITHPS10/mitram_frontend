import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // To navigate after login
import { adminloginApi } from "../services/allApi";

function AdminAuth() {
  const [adminForm, setAdminForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle input changes for email and password
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminForm({
      ...adminForm,
      [name]: value,
    });
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent default form submission

    const { email, password } = adminForm;

    // Simple validation check for empty fields
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Make API call to verify login (You will need to define adminLoginApi function)
      const response = await adminloginApi(adminForm);  // Replace with actual API function

      if (response.status === 200) {
        // If login is successful, store necessary information (e.g., JWT token, admin info)
        // Assuming response.data contains the data returned after login
        sessionStorage.setItem('adminToken', response.data.token);
        
        console.log(response.data.token)

        // Redirect to dashboard after successful login
        navigate('/usermngm');  // Adjust the route as per your requirements
      } else {
        alert('Login failed: ' + response.data.message);  // Display error message from API
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed, please try again!');
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center text-white">
        <section className="bg-gray-800 bg-opacity-80 shadow-2xl rounded-lg p-8 w-[24rem] sm:w-[30rem] space-y-8">
          <div className="flex justify-center mb-6">
            <img
              src="Mitramicon.png"  // Path to your logo
              alt="Logo"
              className="h-20 w-auto"
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
                name="email"
                value={adminForm.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 text-lg bg-transparent border-b-2 border-gray-500 placeholder-gray-400 outline-none focus:border-sky-500 transition-all"
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={adminForm.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full px-4 py-3 text-lg bg-transparent border-b-2 border-gray-500 placeholder-gray-400 outline-none focus:border-sky-500 transition-all"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-slate-900 via-cyan-500 to-slate-900 rounded-lg shadow-lg hover:from-sky-500 hover:from-slate-950 hover:via-cyan-600 hover:to-slate-950 hover:shadow-xl transition-all"
          >
            LOG IN
          </button>
        </section>
      </main>
    </>
  );
}

export default AdminAuth;
