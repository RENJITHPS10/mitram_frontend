import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

function AdminHeader() {
    return (
        <>
            <div className='bg-black w-full fixed'>
                <div className='flex justify-between items-center'>
                    <img src="/Mitram.png" className='w-20 h-20 ' alt="logo" />
                    <h1 className='text-white text-2xl'>ADMIN DASHBOARD</h1>
                    <button className="bg-sky-500 text-white rounded-full font-semibold hidden md:flex px-8 pb-2 pt-1 me-5 transition-all duration-300 hover:bg-red-600 border border-sky hover:shadow-lg group"
                    >
                        <div className='flex items-center text-sky group-hover:text-white'> <FontAwesomeIcon icon={faRightFromBracket} className='me-2 mt-1' />    Logout</div>
                    </button>


                </div>

            </div>


        </>
    )
}

export default AdminHeader
