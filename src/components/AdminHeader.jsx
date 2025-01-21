import { faBars, faHandshakeAngle, faPersonShelter, faRightFromBracket, faTriangleExclamation, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminHeader() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate(); // To navigate after logout

    const toggleMenu = () => {
        setShow(!show);
    };

    const onLogout = () => {
        sessionStorage.removeItem('adminToken'); // Clear admin token
        navigate('/admin'); // Redirect to login page
    };

    return (
        <>
            <div className='bg-black w-full fixed'>
                <div className='flex justify-between items-center'>
                    <img src="/Mitram.png" className='w-20 h-20 ' alt="logo" />

                    <button
                        className="bg-sky-500 text-white rounded-full font-semibold hidden md:flex px-8 pb-2 pt-1 me-5 transition-all duration-300 hover:bg-red-600 border border-sky hover:shadow-lg group"
                        onClick={onLogout} // Attach onLogout handler
                    >
                        <div className='flex items-center text-sky group-hover:text-white'>
                            <FontAwesomeIcon icon={faRightFromBracket} className='me-2 mt-1' />
                            Logout
                        </div>
                    </button>

                    <div className='md:hidden' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className='text-sky fa-xl me-5' />
                    </div>
                </div>
            </div>

            <div
                className={`fixed top-20 right-0 lg:hidden bg-black font-semibold w-72 h-full shadow-lg transition-transform duration-500 z-10 ease-in-out transform ${
                    show ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='py-4'>
                    <Link to={'/usermngm'}>
                        <h1 className='text-lg text-white px-5 py-4'>
                            <FontAwesomeIcon icon={faUsers} className='me-2 text-blue-500' />
                            User Management
                        </h1>
                    </Link>
                    <Link to={'disastermngm'}>
                        <h1 className='text-xl text-white px-5 py-4'>
                            <FontAwesomeIcon icon={faTriangleExclamation} className='me-2 text-yellow-400' />
                            Report Disaster
                        </h1>
                    </Link>
                  
                    <Link to={'/sheltermngm'}>
                        <h1 className='text-xl text-white px-5 py-4'>
                            <FontAwesomeIcon icon={faPersonShelter} className='me-2' />
                            Shelter Management
                        </h1>
                    </Link>
                    <Link to={'/helprequest'}>
                        <h1 className='text-xl text-white px-5 py-4'>
                            <FontAwesomeIcon icon={faHandshakeAngle} className='me-2' />
                            Help Requests
                        </h1>
                    </Link>

                    <button
                        className="bg-sky-500 text-white rounded-full font-semibold mx-4 md:hidden px-8 pb-2 pt-1 mt-4 transition-all duration-300 hover:bg-red-600 border border-sky hover:shadow-lg group"
                        onClick={onLogout} // Attach onLogout handler
                    >
                        <div className='flex items-center text-sky group-hover:text-white'>
                            <FontAwesomeIcon icon={faRightFromBracket} className='me-2 mt-1' />
                            Logout
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default AdminHeader;
