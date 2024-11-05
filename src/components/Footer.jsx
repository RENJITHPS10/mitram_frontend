import { faFacebookF, faInstagram, faSquareWhatsapp, faSquareXTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-black'>
                <h1 className='text-4xl font-semibold text-white text-center py-10'>Follow Our Updates</h1>
                <div className='flex justify-evenly items-center py-20'>
                    <FontAwesomeIcon icon={faInstagram} className=' fa-5x  text-pink-700' />
                    <div className=' bg-white py-2 px-2 rounded-xl  '>
                        <FontAwesomeIcon icon={faInstagram} className=' fa-3x  text-pink-700 hover:text-white ' />
                    </div>
                    <img src="/youtube.png" alt="" className='h-20 w-20' />

                    <img src="/whatsapp.png" alt="" className='h-16 w-16' />
                    <img src="/twitter.png" alt="" className='h-20 w-20' />
                </div>


            </div>
            <div className='bg-gray-800'>
                <h1 className='text-2xl text-white text-center py-5'>© 2024 MITRAM. All rights reserved.</h1>

            </div>

        </>
    )
}

export default Footer
