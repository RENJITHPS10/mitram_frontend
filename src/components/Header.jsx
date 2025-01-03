import { faBars, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShow(!show);
    };

    const handleLogin = () => {
        toast(
            <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-lg">
                <Link to={'/userlogin'}>
                    <button className="w-full bg-white text-blue-600 font-semibold rounded-xl py-3 transition-all duration-300 hover:bg-sky hover:text-white shadow-md hover:scale-105 mb-3">
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

    // Check if token is available in sessionStorage
    const isLoggedIn = sessionStorage.getItem('token');

    return (
        <>
            <div className='bg-black w-full fixed z-10'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src="/Mitram.png" alt="" className='w-20 h-20' />
                    </div>
                    <div className='justify-center items-center text-sky font-bold text-xl hidden md:flex'>
                        {/* Check if user is logged in to redirect to dashboard */}
                        <Link to={isLoggedIn ? '/userdashboard' : '/'}><h1 className='md:me-20 me-5'>Home</h1></Link>
                        <Link to={'/disasters'}><h1 className='md:me-20 me-5'>Disasters</h1></Link>
                        <Link to={'/shelters'}><h1 className='md:me-20 me-5'>Shelters</h1></Link>

                        {!isLoggedIn ? (
                            <button
                                className="bg-sky-500 text-white rounded-full font-semibold hidden md:flex px-8 pb-2 pt-1 me-5 transition-all duration-300 hover:bg-sky border border-sky hover:shadow-lg group"
                                onClick={handleLogin}
                            >
                                <div className='flex items-center text-sky group-hover:text-white'>
                                    <FontAwesomeIcon icon={faUser} className='me-2 ' />
                                    Login
                                </div>
                            </button>
                        ) : (
                            <button
                                className="bg-sky-600 text-white rounded-full font-semibold hidden md:flex px-8 pb-2 pt-1 me-5 transition-all duration-300 hover:bg-red-500 border border-sky hover:shadow-lg group"
                                onClick={handleLogout}
                            >
                                <div className='flex items-center text-sky group-hover:text-white'>
                                    <FontAwesomeIcon icon={faRightFromBracket} className='me-2 mt-1' />
                                    Logout
                                </div>
                            </button>
                        )}
                    </div>
                    <div className='md:hidden' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className='text-sky fa-xl me-5' />
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div
                className={`fixed top-20 right-0 lg:hidden bg-black font-semibold w-40 h-full shadow-lg transition-transform duration-500 z-10 ease-in-out transform ${show ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className='p-5'>
                    <Link to={isLoggedIn ? '/userdashboard' : '/'} onClick={toggleMenu} className='text-lg text-white '><p className='mt-1'>Home </p></Link>
                    <Link to={'/disasters'} onClick={toggleMenu} className='text-lg text-white '><p className='mt-1'>Disasters</p></Link>
                    <Link to={'/shelters'} onClick={toggleMenu} className='text-lg text-white'><p className='mt-1'>Shelters</p></Link>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={false} // Close after 5 seconds or you can set it as per your preference
                closeOnClick={true} // Ensure close on clicking toast
                limit={1} // To allow only one toast at a time, or you can increase as needed
                newestOnTop={true} // Newest toast comes on top
                rtl={false} // Right to left layout if needed
                pauseOnFocusLoss={false}
                draggable={false} // Disables dragging the toast to dismiss it
                theme="dark"
                transition="Slide"
                style={{ marginTop: '60px' }}
            />

        </>
    );
}

export default Header;
