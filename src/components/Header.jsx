import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Get current route

    const toggleMenu = () => {
        setShow(!show);
    };

    const handleLogin = () => {
        toast(
            <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-lg">
                <Link to={'/userlogin'}>
                    <button
                        className="w-full bg-white text-blue-600 font-semibold rounded-xl py-3 transition-all duration-300 hover:bg-sky hover:text-white shadow-md hover:scale-105 mb-3"
                    >
                        USER
                    </button>
                </Link>
            </div>
        );
    };

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    };

    const isLoggedIn = sessionStorage.getItem('token');

    const isActive = (path) => location.pathname === path; // Check if the route matches

    return (
        <>
            <div className="bg-black w-full fixed z-10">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="/Mitram.png" alt="" className="w-20 h-20" />
                    </div>
                    <div className="justify-center items-center text-sky font-bold text-xl hidden md:flex">
                        <Link to={isLoggedIn ? '/userdashboard' : '/'} className={`md:me-20 me-5 ${isActive(isLoggedIn ? '/userdashboard' : '/') ? 'text-blue-800' : ''}`}>
                            Home
                        </Link>
                        <Link to={'/disasters'} className={`md:me-20 me-5 ${isActive('/disasters') ? 'text-blue-800' : ''}`}>
                            Disasters
                        </Link>
                        <Link to={'/shelters'} className={`md:me-20 me-5 ${isActive('/shelters') ? 'text-blue-800' : ''}`}>
                            Shelters
                        </Link>

                        {!isLoggedIn ? (
                            <button
                                className="bg-sky-500 text-white rounded-full font-semibold hidden md:flex px-8 pb-2 pt-1 me-5 transition-all duration-300 hover:bg-sky border border-sky hover:shadow-lg group"
                                onClick={handleLogin}
                            >
                                <div className="flex items-center text-sky group-hover:text-white">
                                    <FontAwesomeIcon icon={faUser} className="me-2 " />
                                    Login
                                </div>
                            </button>
                        ) : (
                            <button
                                className="bg-sky-600 text-white rounded-full font-semibold hidden md:flex px-8 pb-2 pt-1 me-5 transition-all duration-300 hover:bg-red-500 border border-sky hover:shadow-lg group"
                                onClick={handleLogout}
                            >
                                <div className="flex items-center text-sky group-hover:text-white">
                                    <FontAwesomeIcon icon={faRightFromBracket} className="me-2 mt-1" />
                                    Logout
                                </div>
                            </button>
                        )}
                    </div>
                    <div className="md:hidden" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className="text-sky fa-xl me-5" />
                    </div>
                </div>
            </div>

            {/* Mobile View */}
           {/* Mobile View */}
<div
    className={`fixed top-20 right-0 lg:hidden bg-black font-semibold w-40 h-full shadow-lg transition-transform duration-500 z-10 ease-in-out transform ${show ? 'translate-x-0' : 'translate-x-full'}`}
>
    <div className="p-5">
        <Link
            to={isLoggedIn ? '/userdashboard' : '/'}
            onClick={toggleMenu}
            className={`text-lg block mb-4 ${isActive(isLoggedIn ? '/userdashboard' : '/') ? 'text-blue-800' : 'text-white'}`}
        >
            Home
        </Link>
        <Link
            to={'/disasters'}
            onClick={toggleMenu}
            className={`text-lg block mb-4 ${isActive('/disasters') ? 'text-blue-800' : 'text-white'}`}
        >
            Disasters
        </Link>
        <Link
            to={'/shelters'}
            onClick={toggleMenu}
            className={`text-lg block mb-4 ${isActive('/shelters') ? 'text-blue-800' : 'text-white'}`}
        >
            Shelters
        </Link>

        {/* Mobile Login/Logout Button */}
        {!isLoggedIn ? (
            <button
                className="bg-sky-500 text-white rounded-full font-semibold w-full px-8 py-2 mt-4 transition-all duration-300 hover:bg-sky border border-sky hover:shadow-lg"
                onClick={() => {
                    handleLogin();
                    toggleMenu(); // Close the menu
                }}
            >
                Login
            </button>
        ) : (
            <button
                className="bg-sky-600 text-white rounded-full font-semibold w-full px-8 py-2 mt-4 transition-all duration-300 hover:bg-red-500 border border-sky hover:shadow-lg"
                onClick={() => {
                    handleLogout();
                    toggleMenu(); // Close the menu
                }}
            >
                Logout
            </button>
        )}
    </div>
</div>


            <ToastContainer
                position="top-right"
                autoClose={false}
                closeOnClick
                newestOnTop
                draggable
                pauseOnFocusLoss
                theme="dark"
                style={{ marginTop: '60px' }}
            />
        </>
    );
}

export default Header;
