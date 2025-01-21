import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect } from 'react';
import { modalResponseContext } from '../context/Contextshare';
import { useNavigate } from 'react-router-dom';
import { reportdisasterApi, updateusersdisasterApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function DisasterModal() {
    const {
        setIsModalOpen,
        isModalOpen,
        selectedDisaster,
        setSelectedDisaster,
        setDisasters,
        disasters,
    } = useContext(modalResponseContext);

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
                name: selectedDisaster.name || '',
                date: selectedDisaster.date || '',
                description: selectedDisaster.description || '',
                location: selectedDisaster.location || '',
                affectedarea: selectedDisaster.affectedarea || '',
                impact: selectedDisaster.impact || '',
                contacts: selectedDisaster.contacts || '',
                image: null,
            });
        } else {
            setFormData({
                name: '',
                date: '',
                description: '',
                location: '',
                affectedarea: '',
                impact: '',
                contacts: '',
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
            image: files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.date ||
            !formData.description ||
            !formData.location ||
            !formData.affectedarea ||
            !formData.impact ||
            !formData.contacts ||
            (!selectedDisaster && !formData.image)
        ) {
            alert('All fields are required.');
            return;
        }

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key !== 'image') {
                data.append(key, formData[key]);
            }
        });
        if (formData.image) {
            data.append('image', formData.image);
        }

        const token = sessionStorage.getItem('token') || sessionStorage.getItem('adminToken');
        const headers = token
            ? { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
            : { 'Content-Type': 'multipart/form-data' };

        try {
            let response;
            if (selectedDisaster) {
                response = await updateusersdisasterApi(selectedDisaster._id, data, headers);
            } else {
                response = await reportdisasterApi(data, headers);
            }

            if (response.status === 200) {
                alert(selectedDisaster ? 'Disaster updated successfully.' : 'Disaster reported successfully.');

                setIsModalOpen(false);
                setSelectedDisaster(null); // Reset the selected disaster
                setFormData({
                    name: '',
                    date: '',
                    description: '',
                    location: '',
                    affectedarea: '',
                    impact: '',
                    contacts: '',
                    image: null,
                });

                if (selectedDisaster) {
                    setDisasters(
                        disasters.map((d) => (d._id === selectedDisaster._id ? response.data.disaster : d))
                    );
                } else {
                    setDisasters([...disasters, response.data.disaster]);
                }
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Error occurred during submission.');
            console.error(error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDisaster(null); // Ensure we reset the selected disaster
        setFormData({
            name: '',
            date: '',
            description: '',
            location: '',
            affectedarea: '',
            impact: '',
            contacts: '',
            image: null,
        });
    };

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center pt-20">
                    <div className="bg-gray-800 rounded-lg shadow-xl md:p-8 w-full p-4 md:w-1/3 text-white max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold">
                                {selectedDisaster ? 'Edit Disaster' : 'Report a Disaster'}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-red-600 transition duration-300"
                            >
                                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* Disaster Name */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-medium mb-2">
                                    Disaster Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Date */}
                            <div className="mb-4">
                                <label htmlFor="date" className="block text-lg font-medium mb-2">
                                    Date of Disaster
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date ? new Date(formData.date).toISOString().split('T')[0] : ''}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-lg font-medium mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:ring focus:ring-blue-500"
                                    rows="4"
                                    required
                                />
                            </div>

                            {/* Location */}
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-lg font-medium mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Affected Area */}
                            <div className="mb-4">
                                <label htmlFor="affectedarea" className="block text-lg font-medium mb-2">
                                    Affected Area
                                </label>
                                <input
                                    type="text"
                                    id="affectedarea"
                                    name="affectedarea"
                                    value={formData.affectedarea}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Impact */}
                            <div className="mb-4">
                                <label htmlFor="impact" className="block text-lg font-medium mb-2">
                                    Impact
                                </label>
                                <input
                                    type="text"
                                    id="impact"
                                    name="impact"
                                    value={formData.impact}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Contacts */}
                            <div className="mb-4">
                                <label htmlFor="contacts" className="block text-lg font-medium mb-2">
                                    Emergency Contacts
                                </label>
                                <input
                                    type="text"
                                    id="contacts"
                                    name="contacts"
                                    value={formData.contacts}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Current Image */}
                            {selectedDisaster?.image && (
                                <div className="mb-4">
                                    <label className="block text-lg font-medium">Current Image</label>
                                    <img
                                        src={`${serverUrl}/${selectedDisaster.image}`}
                                        alt="Current disaster proof"
                                        className="rounded-md"
                                    />
                                    <p className="text-sm text-gray-400 mt-2">
                                        Leave this field blank to keep the current image.
                                    </p>
                                </div>
                            )}

                            {/* Image Upload */}
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-lg font-medium mb-2">
                                    Upload Image (Proof of Disaster)
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white focus:ring focus:ring-blue-500"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                                >
                                    {selectedDisaster ? 'Update' : 'Report'}
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
