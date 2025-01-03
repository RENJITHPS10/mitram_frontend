import React from 'react';
import { faHandshakeAngle, faPersonShelter, faTriangleExclamation, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

function Adminsidebar() {
    const location = useLocation();

    // Helper function to determine if a menu item is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-black w-96 pt-28 hidden md:block">
            <Link to={'/usermngm'}>
                <h1
                    className={`text-xl p-5 transition duration-300 ${
                        isActive('/usermngm') ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                >
                    <FontAwesomeIcon icon={faUsers} className="me-2 text-blue-500" />
                    User Management
                </h1>
            </Link>
            <Link to={'/disastermngm'}>
                <h1
                    className={`text-xl p-5 transition duration-300 ${
                        isActive('/disastermngm') ? 'bg-yellow-700 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                >
                    <FontAwesomeIcon icon={faTriangleExclamation} className="me-2 text-yellow-400" />
                    Disaster Management
                </h1>
            </Link>
            <Link to={'/sheltermngm'}>
                <h1
                    className={`text-xl p-5 transition duration-300 ${
                        isActive('/sheltermngm') ? 'bg-teal-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                >
                    <FontAwesomeIcon icon={faPersonShelter} className="me-2 text-teal-500" />
                    Shelter Management
                </h1>
            </Link>
            <Link to={'/helprequest'}>
                <h1
                    className={`text-xl p-5 transition duration-300 ${
                        isActive('/helprequest') ? 'bg-red-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                >
                    <FontAwesomeIcon icon={faHandshakeAngle} className="me-2 text-red-300" />
                    Help Requests
                </h1>
            </Link>
        </div>
    );
}

export default Adminsidebar;
