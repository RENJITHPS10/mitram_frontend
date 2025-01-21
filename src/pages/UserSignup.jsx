import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userregisterApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

function UserSignup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        proof: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { files } = e.target;
        if (files && files[0]) {
            setFormData((prevData) => ({
                ...prevData,
                proof: files[0],
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (!formData.username || !formData.email || !formData.phone || !formData.password || !formData.proof) {
            toast.warning('All fields are required');
            return;
        }

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key !== 'confirmPassword') {
                data.append(key, formData[key]);
            }
        });

        data.append('role', 'user');

        try {
            const response = await userregisterApi(data, {
                'Content-Type': 'multipart/form-data',
            });

            if (response.status === 200) {
                toast.success('Registration successful');
                setTimeout(() => {
                    navigate('/verify');
                }, 3000);
            } else if (response.status === 406) {
                toast.info('User already exists');
                setFormData({
                    username: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                    proof: null,
                });
            } else {
                toast.error('Something went wrong. Please try again');
            }
        } catch (error) {
            toast.error('Error occurred during registration');
            console.error(error);
        }
    };

    return (
        <div className="bg-logincover bg-no-repeat bg-cover bg-center">
            <ToastContainer /> {/* Toast container */}

            <Link to={'/'}>
                <button className="absolute md:top-1 md:left-64 md:bg-gradient-to-r from-[#3182CE] to-[#066bb4] px-6 py-2 text-white text-xl hover:from-[#2563EB] hover:to-[#1E40AF] transition duration-300 rounded-full">
                    <FontAwesomeIcon icon={faBackward} className="me-2" />
                    Back to Home
                </button>
            </Link>

            <div className="grid md:grid-cols-2 items-center md:px-60 md:h-screen">
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
                        <p className="text-2xl italic mb-5">Help Build a Safer Community!</p>
                        <p className="text-xl text-justify">
                            Stay informed and help others by posting disaster updates. Sign up today to join a
                            community focused on safety and support. Your contributions will keep people connected
                            and safe during emergencies. Start making an impact now!
                        </p>
                        <p className="text-2xl italic pt-32">
                            Already have an account?
                            <Link to={'/userlogin'}>
                                <span className="not-italic font-bold hover:text-blue-500 text-blue-400 underline">
                                    Sign In
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="bg-[#1A202C] md:rounded-r-3xl pb-10">
                    <h1 className="text-4xl font-bold text-center py-10 text-white">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="rounded-full w-3/4 ps-10 text-xl h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                            placeholder="Username"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-full w-3/4 ps-10 text-xl h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                            placeholder="Enter email"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="rounded-full w-3/4 ps-10 text-xl h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                            placeholder="Phone Number"
                        />
                        <label htmlFor="file-upload" className="w-3/4">
                            <p className="rounded-full w-full ps-10 pt-2 text-xl h-12 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] hover:bg-[#4A5568] transition duration-300">
                                Upload Proof
                            </p>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="rounded-full w-3/4 ps-10 text-xl h-12 mt-5 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                            placeholder="Password"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="rounded-full w-3/4 ps-10 text-xl h-12 mt-5 border bg-[#2D3748] text-white border-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] placeholder:text-white"
                            placeholder="Confirm Password"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#3182CE] to-[#1E40AF] w-3/4 rounded-full py-2 mt-6 text-xl hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#1D4ED8]"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserSignup;
