import React, { useContext, useState } from 'react';
import Adminsidebar from '../components/Adminsidebar';
import AdminHeader from '../components/AdminHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import DisasterModal from '../components/DisasterModal';
import { modalResponseContext } from '../context/Contextshare';

function DisasterManagement() {
  // State to control the modal visibility
const {setIsModalOpen}=useContext(modalResponseContext)







  return (
    <>
      <AdminHeader />
      <div className='flex'>
        <Adminsidebar />
        <div className='bg-gray-950 w-full'>
          <div className='flex justify-center h-screen pt-28'>
            <div className="relative overflow-x-auto max-w-6xl sm:rounded-lg">
              <div className='overflow-x-auto'>
                <div className='flex justify-end'>
                  <button
                    className="text-white px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg hover:from-red-700 hover:to-red-800 transform transition duration-300 mb-3"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <FontAwesomeIcon icon={faTriangleExclamation} className='me-2 text-yellow-400 fa-xl' />
                    Report Disaster
                  </button>
                </div>
                <table className="w-full text-sm text-left shadow-xl text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 bg-gray-900 dark:text-gray-400 uppercase">
                    <tr>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">SI_NO</th>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">Disaster Type</th>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">Location</th>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">Affected Areas</th>
                      <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">ACTIONs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-slate-800 border-gray-700 hover:bg-gray-800">
                      <th scope="row" className="md:px-14 px-5 py-2 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                      </th>
                      <td className="md:px-14 px-5 py-2 text-lg">Kochi shelter</td>
                      <td className="md:px-14 px-5 py-2 text-lg">Kochi</td>
                      <td className="md:px-14 px-5 py-2 text-lg">Downtown, Riverside Heights, and Westside neighborhoods</td>
                      <td className="px-6 py-4 text-center space-x-4">
                        <button className="text-blue-500 hover:text-blue-600">
                          <FontAwesomeIcon icon={faEdit} className='fa-2x me-2' />
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          <FontAwesomeIcon icon={faTrash} className='fa-2x' />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    <DisasterModal />
    </>
  );
}

export default DisasterManagement;
