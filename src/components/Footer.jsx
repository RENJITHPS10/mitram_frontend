import { faFacebookF, faInstagram, faSquareWhatsapp, faSquareXTwitter, faTelegram, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-slate-950'>
                <h1 className='text-4xl font-semibold text-white text-center py-10'>Follow Our Updates</h1>
                <div className="flex justify-evenly items-center py-20 flex-wrap gap-6 md:gap-10" data-aos="fade-up" data-aos-duration="500">
                    <div className="bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#515bd4] h-20 w-20 rounded-full transition duration-300 linear hover:scale-110 flex justify-center items-center">
                        <FontAwesomeIcon icon={faInstagram} className="text-5xl text-white transition-colors duration-300" />
                    </div>
                    <div className="bg-blue-800 h-20 w-20 rounded-full transition duration-300 linear hover:scale-110 flex justify-center items-center">
                        <FontAwesomeIcon icon={faFacebookF} className="text-5xl text-white transition-colors duration-300" />
                    </div>
                    <div className="bg-black h-20 w-20 rounded-full transition duration-300 linear hover:scale-110 flex justify-center items-center">
                        <FontAwesomeIcon icon={faXTwitter} className="text-5xl text-white transition-colors duration-300" />
                    </div>
                    <div className="bg-red-600 h-20 w-20 rounded-full transition duration-300 linear hover:scale-110 flex justify-center items-center">
                        <FontAwesomeIcon icon={faYoutube} className="text-5xl text-white transition-colors duration-300" />
                    </div>
                    <div className="bg-green-600 h-20 w-20 rounded-full transition duration-300 linear hover:scale-110 flex justify-center items-center">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-5xl text-white transition-colors duration-300" />
                    </div>
                    <div className="bg-white h-20 w-20 rounded-full transition duration-300 linear hover:scale-110 flex justify-center items-center">
                        <FontAwesomeIcon icon={faTelegram} className=" text-blue-600  transition-colors duration-300" style={{fontSize:'84px'}} />
                    </div>


                </div>



            </div>
            <div className='bg-gray-800'>
                <h1 className='text-2xl text-white text-center py-5'>© 2024 MITRAM. All rights reserved.</h1>

            </div>

        </>
    )
}

export default Footer
