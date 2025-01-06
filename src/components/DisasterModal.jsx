import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect } from 'react';
import { modalResponseContext } from '../context/Contextshare';
import { useNavigate } from 'react-router-dom';
import { reportdisasterApi, updateusersdisasterApi } from '../services/allApi';

function DisasterModal() {
    const { setIsModalOpen, isModalOpen, selectedDisaster, setDisasters, disasters } = useContext(modalResponseContext);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        description: '',
        location: '',
        affectedarea: '',
        impact: '',
        contacts: '',
        image: null,
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (selectedDisaster) {
            setFormData({
                name: selectedDisaster.name,
                date: selectedDisaster.date,
                description: selectedDisaster.description,
                location: selectedDisaster.location,
                affectedarea: selectedDisaster.affectedarea,
                impact: selectedDisaster.impact,
                contacts: selectedDisaster.contacts,
                image: null,
            });
        }
    }, [selectedDisaster]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            image: files[0], // Store the image file (disaster-related proof)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!formData.name || !formData.date || !formData.description || !formData.location || !formData.affectedarea || !formData.impact || !formData.contacts || !formData.image) {
            alert('All fields are required');
            return;
        }

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key !== 'image') {
                data.append(key, formData[key]);
            }
        });
        data.append('image', formData.image);

        const token = sessionStorage.getItem('token') || sessionStorage.getItem('adminToken');

        const headers = token ? { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}` } : { 'Content-Type': 'multipart/form-data' };

        try {
            let response;
            if (selectedDisaster) {
                response = await updateusersdisasterApi(selectedDisaster._id, data, headers); // Edit disaster
            } else {
                response = await reportdisasterApi(data, headers); // New disaster report
            }

            if (response.status === 200) {
                alert('Disaster reported successfully');

                // Close modal and update disasters
                setIsModalOpen(false);

                // Fetch updated disasters
                setFormData({
                    name: '',
                    date: '',
                    description: '',
                    location: '',
                    affectedarea: '',
                    impact: '',
                    contacts: '',
                    image: null,
                })
                setDisasters([...disasters, response.data.disaster]); // You might want to modify this to fit your requirements
            } else {
                alert('Something went wrong. Please try again');
            }
        } catch (error) {
            alert('Error occurred during report submission');
            console.error(error);
        }
    };

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-50 flex items-center justify-center pt-20">
                    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl md:p-8 w-full p-4 md:w-1/3 text-white max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold">{selectedDisaster ? 'Edit Disaster' : 'Report a Disaster'}</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-red-600 transition duration-300"
                            >
                                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* Disaster Name */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg mb-2 font-medium">Disaster Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter disaster name"
                                    required
                                />
                            </div>

                            {/* Date of disaster */}
                            <div className="mb-4">
                                <label htmlFor="date" className="block text-lg mb-2 font-medium">Date of Disaster</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date ? new Date(formData.date).toISOString().split('T')[0] : ''} // Format date as yyyy-MM-dd
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })} // Update state on change
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
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
                                    placeholder="Describe the disaster"
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
                                    placeholder="Enter the disaster's location"
                                    required
                                />
                            </div>

                            {/* Affected Area */}
                            <div className="mb-4">
                                <label htmlFor="affectedarea" className="block text-lg mb-2 font-medium">Affected Area</label>
                                <input
                                    type="text"
                                    id="affectedarea"
                                    name="affectedarea"
                                    value={formData.affectedarea}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter the affected areas"
                                    required
                                />
                            </div>

                            {/* Impact */}
                            <div className="mb-4">
                                <label htmlFor="impact" className="block text-lg mb-2 font-medium">Impact</label>
                                <textarea
                                    id="impact"
                                    name="impact"
                                    value={formData.impact}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Describe the impact of the disaster"
                                    required
                                />
                            </div>

                            {/* Contacts */}
                            <div className="mb-4">
                                <label htmlFor="contacts" className="block text-lg mb-2 font-medium">Contact Information</label>
                                <textarea
                                    id="contacts"
                                    name="contacts"
                                    value={formData.contacts}
                                    onChange={handleChange}
                                    rows="2"
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Provide contact information for assistance"
                                    required
                                />
                            </div>

                            {/* Image upload */}
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-lg mb-2 font-medium">Upload Image (Proof of Disaster)</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() =>{
                                        setFormData({
                                            name: '',
                                            date: '',
                                            description: '',
                                            location: '',
                                            affectedarea: '',
                                            impact: '',
                                            contacts: '',
                                            image: null,
                                        })
                                    }}
                                    className="px-5 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
                                >
                                    {selectedDisaster ? 'Update Report' : 'Report'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default DisasterModal;
