import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect } from 'react';
import { modalResponseContext } from '../context/Contextshare';
import { useNavigate } from 'react-router-dom';
import { createHelpRequestApi, updateUsersHelpRequests, } from '../services/allApi';

function HelpRequestModal() {
    const { setIsHelpModalOpen, isHelpModalOpen, selectedHelpRequest, setHelpRequests, helpRequests } = useContext(modalResponseContext);
    const [formData, setFormData] = useState({
        requestType: '',
        description: '',
        location: '',
        contact: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (selectedHelpRequest) {
            setFormData({
                requestType: selectedHelpRequest.requestType,
                description: selectedHelpRequest.description,
                location: selectedHelpRequest.location,
                contact: selectedHelpRequest.contact,
            });
        }
    }, [selectedHelpRequest]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!formData.requestType || !formData.description || !formData.location || !formData.contact) {
            alert('All fields are required');
            return;
        }

        const token = sessionStorage.getItem('token');
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

        try {
            let response;
            if (selectedHelpRequest) {
                response = await updateUsersHelpRequests(selectedHelpRequest._id, formData, headers); // Update help request
            } else {
                response = await createHelpRequestApi(formData, headers); // Create new help request
            }

            if (response.status === 200 || response.status === 201) {
                alert('Help request processed successfully');

                // Close modal and update help requests
                setIsHelpModalOpen(false);
                setHelpRequests(selectedHelpRequest
                    ? helpRequests.map((req) => req._id === selectedHelpRequest._id ? response.data.helpRequest : req)
                    : [...helpRequests, response.data.helpRequest]
                );
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Error occurred during request submission.');
            console.error(error);
        }
    };

    return (
        <>
            {isHelpModalOpen && (
                <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-50 flex items-center justify-center pt-20">
                    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl md:p-8 w-full p-4 md:w-1/3 text-white max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold">{selectedHelpRequest ? 'Edit Help Request' : 'Create Help Request'}</h2>
                            <button
                                onClick={() => setIsHelpModalOpen(false)}
                                className="text-gray-400 hover:text-red-600 transition duration-300"
                            >
                                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* Request Type */}
                            <div className="mb-4">
                                <label htmlFor="requestType" className="block text-lg mb-2 font-medium">Request Type</label>
                                <select
                                    id="requestType"
                                    name="requestType"
                                    value={formData.requestType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                >
                                    <option value="">Select request type</option>
                                    <option value="Food">Food</option>
                                    <option value="Shelter">Shelter</option>
                                    <option value="Medical">Medical</option>
                                    <option value="Rescue">Rescue</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-lg mb-2 font-medium">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Describe your request"
                                    required
                                />
                            </div>

                            {/* Location */}
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-lg mb-2 font-medium">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your location"
                                    required
                                />
                            </div>

                            {/* Contact Information */}
                            <div className="mb-4">
                                <label htmlFor="contact" className="block text-lg mb-2 font-medium">Contact Information</label>
                                <input
                                    type="number"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Provide your contact details"
                                    required
                                />
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() => { setFormData({
                                        requestType:'' ,
                                        description:'' ,
                                        location: '',
                                        contact: '',
                                    });
                                        
                                    }}
                                    className="px-5 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
                                >
                                    {selectedHelpRequest ? 'Update Request' : 'Submit Request'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default HelpRequestModal;
