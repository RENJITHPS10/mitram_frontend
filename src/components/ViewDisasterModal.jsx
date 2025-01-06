import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { serverUrl } from '../services/serverUrl';

function ViewDisasterModal({ isOpen, disasterDetails, onClose }) {
  if (!isOpen) return null;
  console.log(disasterDetails)

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md transition duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className="bg-gradient-to-b from-black via-gray-800 to-black rounded-lg shadow-lg w-full sm:w-4/5 md:w-2/3 lg:w-1/2 p-6 transition-all transform scale-95 sm:scale-100"
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Disaster Details</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-red-600 transition duration-200 ease-in-out"
          >
            <FontAwesomeIcon icon={faTimesCircle} className="fa-lg" />
          </button>
        </div>

        {/* Disaster Details */}
        <div className="space-y-5 overflow-y-auto max-h-[60vh]">
          {/* Reported By */}
          <div className="border-b pb-4">
            <strong className="text-gray-400">Reported By:</strong>
            <div className="text-white">
              <span>Name: {disasterDetails.reportedBy?.userId?.username ||disasterDetails.reportedBy?.adminId?.name }</span>
              <br />
              <span>Email: {disasterDetails.reportedBy?.userId?.email || disasterDetails.reportedBy?.adminId?.email}</span>
            </div>
          </div>

          {/* Disaster Type */}
          <div className="border-b pb-4">
            <strong className="text-gray-400">Disaster Name:</strong>
            <span className="block text-white">{disasterDetails.name || 'N/A'}</span>
          </div>

          {/* Location */}
          <div className="border-b pb-4">
            <strong className="text-gray-400">Location:</strong>
            <span className="block text-white">{disasterDetails.location || 'N/A'}</span>
          </div>

          {/* Affected Areas */}
          <div className="border-b pb-4">
            <strong className="text-gray-400">Affected Areas:</strong>
            <span className="block text-white">{disasterDetails.affectedarea || 'N/A'}</span>
          </div>

          {/* Date */}
          <div className="border-b pb-4">
            <strong className="text-gray-400">Date:</strong>
            <span className="block text-white">
              {new Date(disasterDetails.date).toLocaleDateString() || 'N/A'}
            </span>
          </div>

          {/* Impact */}
          <div className="border-b pb-4">
            <strong className="text-gray-400">Impact:</strong>
            <span className="block text-white">{disasterDetails.impact || 'N/A'}</span>
          </div>

          {/* Contacts */}
          <div className="border-b pb-4">
            <strong className="text-gray-400">Contacts:</strong>
            <span className="block text-white">{disasterDetails.contacts || 'N/A'}</span>
          </div>

          {/* Image */}
          {disasterDetails.image && (
            <div className="border-b pb-4">
              <strong className="text-gray-400">Image:</strong>
              <img
                src={`${serverUrl}/${disasterDetails.image}`}
                alt="Disaster"
                className="mt-4 rounded-md shadow-md w-full"
              />
            </div>
          )}

          {/* Description */}
          <div>
            <strong className="text-gray-400">Description:</strong>
            <p className="mt-2 text-white">{disasterDetails.description || 'N/A'}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button
            className="px-6 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDisasterModal;
