import React, { useEffect, useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import Adminsidebar from '../components/Adminsidebar';
import { useNavigate } from 'react-router-dom';
import { gethelprequesApi, updateHelpRequestApi, deleteHelpRequestApi } from '../services/allApi';

function HelpRequest() {
    const [HelpRequest, setAllHelpRequest] = useState([]);
    const [updatedStatus, setUpdatedStatus] = useState({});
    const navigate = useNavigate();
    const token = sessionStorage.getItem('adminToken');

    useEffect(() => {
        const getAllHelpRequest = async () => {
            if (!token) {
                navigate('*');
                return;
            }
            const reqHeader = { Authorization: `Bearer ${token}` };
            const response = await gethelprequesApi(reqHeader);
            setAllHelpRequest(response.data.data);
        };
        getAllHelpRequest();
    }, [navigate, token]);

    const handleStatusChange = async (id) => {
        try {
            const reqHeader = { Authorization: `Bearer ${token}` };
            const newStatus = updatedStatus[id];
            if (!newStatus) {
                alert('Please select a status to update.');
                return;
            }
            await updateHelpRequestApi(id, { status: newStatus }, reqHeader);
            setAllHelpRequest((prevState) =>
                prevState.map((item) =>
                    item._id === id ? { ...item, status: newStatus } : item
                )
            );
            alert('Status updated successfully!');
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status.');
        }
    };

    const handleDeleteRequest = async (id) => {
        try {
            const reqHeader = { Authorization: `Bearer ${token}` };
            await deleteHelpRequestApi(id, reqHeader);
            setAllHelpRequest((prevState) => prevState.filter((item) => item._id !== id));
            alert('Help request deleted successfully!');
        } catch (error) {
            console.error('Error deleting request:', error);
            alert('Failed to delete help request.');
        }
    };

    return (
        <>
            <AdminHeader />
            <div className="flex">
                <Adminsidebar />
                <div className="bg-gray-950 w-full ">
                    <div className="flex justify-center h-screen pt-48">
                        <div className="relative sm:rounded-lg overflow-x-auto w-full max-w-6xl">
                            <div className="overflow-x-auto">
                            <table className="min-w-full text-xs text-left shadow-xl text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 bg-gray-900 dark:text-gray-400">
    <tr>
      <th className="px-3 py-2">SI_NO</th>
      <th className="px-3 py-2">USERNAME</th>
      <th className="px-3 py-2">Request Type</th>
      <th className="px-3 py-2">Description</th>
      <th className="px-3 py-2">Location</th>
      <th className="px-3 py-2">Contact</th>
      <th className="px-3 py-2">Status</th>
      <th className="px-3 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {HelpRequest.length === 0 ? (
      <tr className="bg-gray-900">
        <td colSpan="8" className="text-center py-6 text-gray-600 text-2xl" >
          No help requests available
        </td>
      </tr>
    ) : (
      HelpRequest.map((item, index) => (
        <tr
          key={item._id}
          className="border-b bg-slate-800 border-gray-700 hover:bg-gray-800"
        >
          <td className="px-3 py-1 text-sm">{index + 1}</td>
          <td className="px-3 py-1 text-sm">{item.userId.username || 'N/A'}</td>
          <td className="px-3 py-1 text-sm">{item.requestType}</td>
          <td className="px-3 py-1 text-sm">{item.description}</td>
          <td className="px-3 py-1 text-sm">{item.location}</td>
          <td className="px-3 py-1 text-sm">{item.contact}</td>
          <td className="px-3 py-1 text-sm">
            <select
              value={updatedStatus[item._id] || item.status}
              onChange={(e) =>
                setUpdatedStatus({
                  ...updatedStatus,
                  [item._id]: e.target.value,
                })
              }
              className="bg-gray-800 text-sm text-white px-2 py-1 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Completed">Completed</option>
            </select>
          </td>
          <td className="px-3 py-1 text-sm flex gap-2">
            <button
              onClick={() => handleStatusChange(item._id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
            >
              Update
            </button>
            <button
              onClick={() => handleDeleteRequest(item._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            >
              Delete
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
        </>
    );
}

export default HelpRequest;
