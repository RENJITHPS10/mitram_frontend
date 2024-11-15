
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { modalResponseContext } from '../context/Contextshare';
FontAwesomeIcon

function DisasterModal() {

    const {setIsModalOpen,isModalOpen}=useContext(modalResponseContext)
    
   
    return (
        <>
         
            {/* Modal for Reporting Disaster */}
            {isModalOpen &&
                <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl md:p-8 w-full p-4 md:w-1/3 text-white max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold">Report a Disaster</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-red-600 transition duration-300"
                            >
                                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
                            </button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="disasterType" className="block text-lg mb-2 font-medium">
                                    Disaster Type
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter disaster type"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-lg mb-2 font-medium">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter location"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="affectedAreas" className="block text-lg mb-2 font-medium">
                                    Affected Areas
                                </label>
                                <textarea
                                    id="affectedAreas"
                                    name="affectedAreas"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter affected areas"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="affectedAreas" className="block text-lg mb-2 font-medium">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter Description"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="affectedAreas" className="block text-lg mb-2 font-medium">
                                    Description
                                </label>
                                <textarea
                                    id="emergency"
                                    name="emergency"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter Emergency Contacts"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="uploadImage" className="block text-lg mb-2 font-medium text-white">
                                    Upload Image
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label
                                        htmlFor="uploadImage"
                                        className="px-5 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-500 transition duration-300"
                                    >
                                        Choose File
                                    </label>
                                    <input
                                        type="file"
                                        id="uploadImage"
                                        className="hidden"
                                    />

                                </div>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-5 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300"
                                >
                                    Close
                                </button>
                                <button
                                    className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
                                >
                                    Report
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            }

        </>
    )
}

export default DisasterModal
