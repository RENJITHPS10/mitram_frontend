import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


function Header() {
    const [show, setShow] = useState(false)
    const toggleMenu = () => {
        setShow(!show)
    }
    return (
        <>
            <div className='bg-black  w-full '  >
                <div className='flex justify-between items-center'>
                    <div>
                        <img src="/Mitram.png" alt="" className='w-20 h-20' />
                    </div>
                    <div className='justify-center items-center text-sky font-bold text-xl hidden md:flex '  >
                        <h1 className='md:me-20 me-5'>Home</h1>
                        <h1 className='md:me-20 me-5'>Disasters</h1>
                        <h1 className='md:me-20 me-5'>Shelters</h1>
                        <button className='bg-sky text-white rounded-full font-semibold hidden md:flex px-8 py-2 me-20'>Login</button>
                    </div>
                    <div className='md:hidden ' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className='text-sky fa-xl me-5' />
                    </div>

                </div>

            </div>
            {/* mobile view */}
            <div  className={`fixed top-20 right-0 lg:hidden bg-black font-semibold w-40 h-full shadow-lg transition-transform duration-500 z-10 ease-in-out transform ${show ? 'translate-x-0':'translate-x-full'
          }`}>
           <div className='p-5'> 
            <p className='text-lg text-white mb-5'>Home</p>
            <p className='text-lg text-white mb-5'>Disasters</p>
            <p className='text-lg text-white'>Shelters</p>

            </div>
                

            </div>

        </>
    )
}

export default Header
