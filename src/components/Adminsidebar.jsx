import React from 'react'
import { faHandshakeAngle, faPersonShelter, faTriangleExclamation, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Adminsidebar() {

    return (
        <>
            <div className='bg-black  w-96 pt-28 hidden md:block'>
                <Link to={'/usermngm'}>
                    <h1 className='text-xl text-white p-5'>
                        <FontAwesomeIcon icon={faUsers} className='me-2 text-blue-500' />
                        User Management
                    </h1>
                </Link>
                <Link to={'/disastermngm'}>
                    <h1 className='text-xl text-white p-5'>
                        <FontAwesomeIcon icon={faTriangleExclamation} className='me-2 text-yellow-400' />
                        Disaster Management
                    </h1>
                </Link>
                
                <Link to={'/sheltermngm'}>
                    <h1 className='text-xl text-white p-5'>
                        <FontAwesomeIcon icon={faPersonShelter} className='me-2 text-teal-500' />
                        Shelter Management
                    </h1>
                </Link>
                <Link to={'/helprequest'}>
                    <h1 className='text-xl text-white p-5'>
                        <FontAwesomeIcon icon={faHandshakeAngle} className='me-2 text-red-300' />
                        Help Requests
                    </h1>
                </Link>
            </div>

        </>
    )
}

export default Adminsidebar
