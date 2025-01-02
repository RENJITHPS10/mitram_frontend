import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { serverUrl } from '../services/serverUrl';

function ViewDisasterModal({ isOpen, disasterDetails, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-gray-900 rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 overflow-hidden text-white max-h-[90%]">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-800 px-6 py-4">
          <h2 className="text-xl font-semibold">Disaster Details</h2>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faTimesCircle} className="text-gray-400 hover:text-white fa-xl" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 py-5 space-y-5 overflow-y-auto max-h-[70vh]">
          <div>
            <strong className="text-gray-400">Disaster Type:</strong>
            <span className="block text-lg text-gray-200">{disasterDetails.type || 'N/A'}</span>
          </div>
          <div>
            <strong className="text-gray-400">Location:</strong>
            <span className="block text-lg text-gray-200">{disasterDetails.location || 'N/A'}</span>
          </div>
          <div>
            <strong className="text-gray-400">Affected Areas:</strong>
            <span className="block text-lg text-gray-200">{disasterDetails.affectedAreas || 'N/A'}</span>
          </div>
          <div>
            <strong className="text-gray-400">Date:</strong>
            <span className="block text-lg text-gray-200">
              {new Date(disasterDetails.date).toLocaleDateString() || 'N/A'}
            </span>
          </div>
          <div>
            <strong className="text-gray-400">Impact:</strong>
            <span className="block text-lg text-gray-200">{disasterDetails.impact || 'N/A'}</span>
          </div>
          <div>
            <strong className="text-gray-400">Contacts:</strong>
            <span className="block text-lg text-gray-200">{disasterDetails.contacts || 'N/A'}</span>
          </div>
          {disasterDetails.image && (
            <div className="text-center">
              <strong className="text-gray-400">Image:</strong>
              <img
                src={`${serverUrl}/${disasterDetails.image}`}
                alt="Disaster"
                className="mt-3 rounded-lg shadow-lg mx-auto max-w-full"
              />
            </div>
          )}
          <div>
            <strong className="text-gray-400">Description:</strong>
            <p className="mt-2 text-gray-300 text-base leading-relaxed">
              {disasterDetails.description || 'N/A'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end bg-gray-800 px-6 py-4">
          <button
            className="px-6 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
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
