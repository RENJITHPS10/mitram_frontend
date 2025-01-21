import React, { useEffect, useState, useContext } from 'react';
import Adminsidebar from '../components/Adminsidebar';
import AdminHeader from '../components/AdminHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEye, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import DisasterModal from '../components/DisasterModal';
import { modalResponseContext } from '../context/Contextshare';
import { deleteUserDisaster, getalldisasterApi } from '../services/allApi';
import ViewDisasterModal from '../components/ViewDisasterModal';
import { useNavigate } from 'react-router-dom';

function DisasterManagement() {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const { setIsModalOpen, setSelectedDisaster ,selectedDisaster} = useContext(modalResponseContext);
  const [alldisaster, setAlldisaster] = useState([]);
  const navigate = useNavigate();

  const getDisaster = async () => {
    try {
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        navigate('*');
      }
      const result = await getalldisasterApi();
      if (result.data) {
        setAlldisaster(result.data.data);
      }
    } catch (error) {
      console.error('Error fetching disasters:', error);
    }
  };

  const handleEditDisaster = (disaster) => {
    setSelectedDisaster(disaster);
    setIsModalOpen(true);
  };

  const handleDeleteDisaster = async (disasterId) => {
    const token = sessionStorage.getItem('adminToken');
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };
      const response = await deleteUserDisaster(disasterId, reqHeader);

      if (response.status === 200) {
        setAlldisaster((prev) => prev.filter((disaster) => disaster._id !== disasterId));
        alert('Disaster report deleted successfully.');
      } else {
        alert(response.data.message || 'Failed to delete disaster report. Please try again later.');
      }
    } catch (err) {
      console.error('Error deleting disaster:', err);
      alert('Failed to delete disaster report. Please try again later.');
    }
  };

  const handleViewDisaster = (disaster) => {
    setSelectedDisaster(disaster);
    setIsViewModalOpen(true);
  };

  useEffect(() => {
    getDisaster();
  }, [alldisaster]);

  return (
    <>
      <AdminHeader />
      <div className="flex">
        <Adminsidebar />
        <div className="bg-gray-950 w-full h-screen">
          <div className="flex justify-center pt-28 pb-10">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end mb-5">
                <button
                  className="text-white px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg hover:from-red-700 hover:to-red-800 transition duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faTriangleExclamation} className="me-2 text-yellow-400 fa-lg" />
                  Report Disaster
                </button>
              </div>

              <div className="overflow-x-auto shadow sm:rounded-lg">
                <table className="w-full text-sm text-left bg-gray-900 text-gray-400">
                  <thead className="text-xs uppercase bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-6 py-3 text-lg">SI No</th>
                      <th className="px-6 py-3 text-lg">Name</th>
                      <th className="px-6 py-3 text-lg">Location</th>
                      <th className="px-6 py-3 text-lg">Date</th>
                      <th className="px-6 py-3 text-lg text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alldisaster.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-6 py-4 text-center text-lg text-gray-500">
                          No disasters reported yet!
                        </td>
                      </tr>
                    ) : (
                      alldisaster.map((disaster, index) => (
                        <tr
                          key={disaster._id}
                          className="border-b bg-gray-800 border-gray-700 hover:bg-gray-700"
                        >
                          <td className="px-6 py-4">{index + 1}</td>
                          <td className="px-6 py-4">{disaster.name || 'N/A'}</td>
                          <td className="px-6 py-4">{disaster.location || 'N/A'}</td>
                          <td className="px-6 py-4">{new Date(disaster.date).toLocaleDateString() || 'N/A'}</td>
                          <td className="px-6 py-4 text-center flex justify-center space-x-4">
                            <button
                              title="View Details"
                              onClick={() => handleViewDisaster(disaster)}
                              className="text-green-500 hover:text-green-600"
                            >
                              <FontAwesomeIcon icon={faEye} className="fa-lg" />
                            </button>

                            <button onClick={() => handleEditDisaster(disaster)}
                              title="Edit"
                              className="text-blue-500 hover:text-blue-600"
                            >
                              <FontAwesomeIcon icon={faEdit} className="fa-lg" />
                            </button>
                            <button onClick={() => handleDeleteDisaster(disaster._id)}
                              title="Delete"
                              className="text-red-500 hover:text-red-600"
                            >
                              <FontAwesomeIcon icon={faTrash} className="fa-lg" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisasterModal />
      <ViewDisasterModal
        isOpen={isViewModalOpen}
        disasterDetails={selectedDisaster}
        setSelectedDisaster={setSelectedDisaster}
        onClose={() => setIsViewModalOpen(false)}
      />
    </>
  );
}

export default DisasterManagement;
