import React from 'react'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Adminsidebar from '../components/Adminsidebar'
import AdminHeader from '../components/AdminHeader'

function Volunteermanagement() {
    return (
        <>
        <AdminHeader/>
           <div className='flex'>
            <Adminsidebar/>
            <div className='bg-gray-950  w-full '>
                    <div className='flex justify-center  h-screen pt-28'>


                        <div className="relative sm:rounded-lg overflow-x-auto w-full max-w-6xl ">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm text-left shadow-xl text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 bg-gray-900 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                                                SI_NO
                                            </th>
                                            <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                                                USERNAME
                                            </th>
                                            <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                                                EMAIL
                                            </th>
                                            <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                                                PROOF
                                            </th>
                                            <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b bg-slate-800 border-gray-700 hover:bg-gray-800">
                                            <th scope="row" className="md:px-14 px-5 py-2 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                1
                                            </th>
                                            <td className="md:px-14 px-5 py-2 text-lg">
                                                RENJITH
                                            </td>
                                            <td className="md:px-14 px-5 py-2 text-lg">
                                                renjithpandiyath@gmail.com
                                            </td>
                                            <td className="md:px-14 px-5 py-2 text-lg">
                                                <img src="/camp.jpg" alt="proof" className="h-20 w-20 rounded-full" />
                                            </td>
                                            <td className="md:px-14 px-5 py-2 text-lg">
                                                <div className="flex">
                                                    <button><FontAwesomeIcon icon={faCircleXmark} className="text-red-700 fa-2x" /></button>
                                                    <button><FontAwesomeIcon icon={faCircleCheck} className="text-green-700 fa-2x ms-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>




                    </div>


                </div>
           </div>

        </>
    )
}

export default Volunteermanagement
