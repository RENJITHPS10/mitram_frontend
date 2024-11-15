import React, { useContext } from 'react'
import { modalResponseContext } from '../context/Contextshare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function ShelterModal() {

    const { setIsModalOpen, isModalOpen } = useContext(modalResponseContext)
    return (
        <>
          {isModalOpen &&
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl md:p-8 w-full p-4 md:w-2/3 text-white max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">Add Shelter</h2>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-red-600 transition duration-300"
                >
                    <FontAwesomeIcon icon={faXmark} className="text-3xl" />
                </button>
            </div>
            <form>
                {/* Grid Container for Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column 1 */}
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-lg mb-2 font-medium">
                            Location
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter Location"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="capacity" className="block text-lg mb-2 font-medium">
                            Capacity
                        </label>
                        <input
                            type="text"
                            id="capacity"
                            name="capacity"
                            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter Capacity"
                            required
                        />
                    </div>
                    {/* Column 2 */}
                    <div className="mb-4">
                        <label htmlFor="occupancy" className="block text-lg mb-2 font-medium">
                            Current Occupancy
                        </label>
                        <input
                            type="text"
                            id="occupancy"
                            name="occupancy"
                            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter Current Occupancy"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amenities" className="block text-lg mb-2 font-medium">
                            Amenities
                        </label>
                        <textarea
                            id="amenities"
                            name="amenities"
                            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter Amenities"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-lg mb-2 font-medium">
                            Contact Information
                        </label>
                        <textarea
                            id="contact"
                            name="contact"
                            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter Contact Information"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="liveLocation" className="block text-lg mb-2 font-medium">
                            Live Location
                        </label>
                        <input
                            type="text"
                            id="liveLocation"
                            name="liveLocation"
                            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter Live Location"
                            required
                        />
                    </div>
                </div>
                {/* Full-Width Row for Upload Image */}
                <div className="mb-4">
                    <label htmlFor="uploadImage" className="block text-lg mb-2 font-medium text-white">
                        Upload Image
                    </label>
                    <div className="flex items-center space-x-4">
                        <label
                            htmlFor="uploadImage"
                            className="px-5 py-2 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-500 transition duration-300"
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
                {/* Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-5 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300"
                    >
                        Close
                    </button>
                    <button
                        className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition duration-300"
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

export default ShelterModal
