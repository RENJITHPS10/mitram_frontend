import React, { useContext, useState, useEffect } from 'react';
import { modalResponseContext } from '../context/Contextshare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { updateshelterApi, createshelterApi } from '../services/allApi';

function ShelterModal({ shelter = null, onSuccess }) {
  const { setIsModalOpen, isModalOpen } = useContext(modalResponseContext);
  const token = sessionStorage.getItem('adminToken');

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    capacity: '',
    current_occupancy: '',
    amenities: '',
    contact: '',
    map: '',
    image: null, // File upload
  });

  // Pre-fill the form if a shelter is being edited
  useEffect(() => {
    if (shelter) {
      setFormData({
        name: shelter.name || '',
        location: shelter.location || '',
        capacity: shelter.capacity || '',
        current_occupancy: shelter.current_occupancy || '',
        amenities: shelter.amenities || '',
        contact: shelter.contact || '',
        map: shelter.map || '',
        image: null, // Reset file input for simplicity
      });
    }
  }, [shelter]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  // Handle form submission (add or update shelter)
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'image' || value) {
        data.append(key, value);
      }
    });
  
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };
  
    try {
      let response;
  
      if (shelter) {
        // Update the shelter
        response = await updateshelterApi(shelter._id, data, headers);
      } else {
        // Create a new shelter
        response = await createshelterApi(data, headers);
      }
  
      if (response.status === 200 || response.status === 201) { // Check for success status codes
        console.log('Shelter updated/created successfully');
        setIsModalOpen(false); // Close the modal
        if (onSuccess) onSuccess(); // Refresh shelter list
      } else {
        console.error('Server returned an error:', response.status, response.statusText);
        // Handle specific errors based on response status 
      }
  
    } catch (error) {
      console.error('Error submitting shelter:', error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-lg shadow-2xl p-8 w-full md:w-2/3 max-h-[90vh] overflow-y-auto text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">{shelter ? 'Edit Shelter' : 'Add Shelter'}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faXmark} className="text-3xl" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label className="block text-lg font-medium">Shelter Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Shelter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium">Capacity</label>
                  <input
                    type="number"
                    name="capacity"
                    placeholder="Enter Capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium">Current Occupancy</label>
                  <input
                    type="number"
                    name="current_occupancy"
                    placeholder="Enter Current Occupancy"
                    value={formData.current_occupancy}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium">Amenities</label>
                  <textarea
                    name="amenities"
                    placeholder="Describe Amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium">Contact</label>
                  <textarea
                    name="contact"
                    placeholder="Enter Contact Info"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium">Map Link</label>
                  <input
                    type="text"
                    name="map"
                    placeholder="Google Map Link"
                    value={formData.map}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium">Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 bg-gray-800 text-white"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setFormData({
                    name: '',
                    location: '',
                    capacity: '',
                    current_occupancy: '',
                    amenities: '',
                    contact: '',
                    map: '',
                    image: null, // File upload
                  }
                    
                  )}
                  className="px-5 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
                >
                  {shelter ? 'Update Shelter' : 'Add Shelter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ShelterModal;
