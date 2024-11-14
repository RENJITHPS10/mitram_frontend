import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Adminsidebar from '../components/Adminsidebar'
import { faCircleCheck, faCircleXmark, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function HelpRequest() {
    return (
        <>
            <AdminHeader />
            <div className='flex'>
                <Adminsidebar />
                <div className='bg-gray-950  w-full '>
                    <div className='flex justify-center  h-screen pt-28'>


                        <div className="relative sm:rounded-lg overflow-x-auto w-full max-w-6xl ">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm text-left shadow-xl text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 bg-gray-900 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className=" px-5 md:py-3 text-xl">
                                                SI_NO
                                            </th>
                                            <th scope="col" className=" px-5 md:py-3 text-xl">
                                                USERNAME
                                            </th>
                                            <th scope="col" className=" px-5 md:py-3 text-xl">
                                                Request Title
                                            </th>
                                            <th scope="col" className=" px-5 md:py-3 text-xl">
                                                Priority
                                            </th>
                                            <th scope="col" className=" px-5 md:py-3 text-xl">
                                                Status
                                            </th>
                                            <th scope="col" className=" px-5 md:py-3 text-xl">
                                                Date Submitted
                                            </th>
                                            <th scope="col" className=" px-5 md:py-3 text-xl">
                                                Assign Volunteer
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b bg-slate-800 border-gray-700 hover:bg-gray-800">
                                            <th scope="row" className=" px-5 py-2 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                1
                                            </th>
                                            <td className=" px-5 py-2 text-lg">
                                                RENJITH
                                            </td>
                                            <td className=" px-5 py-2 text-lg">
                                                renjithpandiyath@gmail.com
                                            </td>
                                            <td className=" px-5 py-2 text-lg">
                                                dmlfmdmlml
                                            </td>
                                            <td className=" px-5 py-2 text-lg">
                                                Progress
                                            </td>
                                            <td className=" px-5 py-2 text-lg">
                                                11/12/2024
                                            </td>
                                            <td className="px-4 py-2 text-center">
                                                <div className='flex'>
                                                    <select className="border rounded px-2 py-1 mr-2" >
                                                        <option value="">Select Volunteer</option>
                                                        <option value="1">Volunteer 1</option>
                                                        <option value="2">Volunteer 2</option>
                                                    </select>
                                                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-800">
                                                        Assign
                                                    </button>
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

export default HelpRequest
