import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { modalResponseContext } from '../context/Contextshare';
import DisasterModal from '../components/DisasterModal';
import { getusersdisaster, deleteUserDisaster, getUsersHelpRequests, deleteUserHelpRequest } from '../services/allApi'; // Import API methods
import { serverUrl } from '../services/serverUrl';
import HelpRequestModal from '../components/HelpRequestModal';

function UserDashboard() {
    const {
        setIsModalOpen,
        isModalOpen,
        isHelpModalOpen, // Provide help modal visibility state
        setIsHelpModalOpen,
        disasters,
        setDisasters,
        setSelectedDisaster,
        helpRequests,
        setHelpRequests,
        setSelectedHelpRequest,
    } = useContext(modalResponseContext);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const token = sessionStorage.getItem('token');
    if (!token) {
        return <Navigate to="*" />;
    }

    // Fetch disasters from the backend
    const fetchDisasters = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const reqHeader = { Authorization: `Bearer ${token}` };
            const response = await getusersdisaster(reqHeader);
            setDisasters(response.data.disasters|| [] );
        } catch (err) {
            setError('Failed to load disasters. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch help requests from the backend
    const fetchHelpRequests = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const reqHeader = { Authorization: `Bearer ${token}` };
            const response = await getUsersHelpRequests(reqHeader);
            setHelpRequests(response.data.helpRequests || []);
        } catch (err) {
            setError('Failed to load help requests. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteDisaster = async (disasterId) => {
   
    console.log(token)
        try {
            const reqHeader = { Authorization: `Bearer ${token}` };
            const response = await deleteUserDisaster(disasterId, reqHeader);
    
            // Check if the response indicates success
            if (response.status === 200) {
                setDisasters((prev) => prev.filter((disaster) => disaster._id !== disasterId));
                alert('Disaster report deleted successfully.');
            } else {
                alert(response.data.message || 'Failed to delete disaster report. Please try again later.');
            }
        } catch (err) {
            console.error('Error deleting disaster:', err); // Log error to console for debugging
            alert('Failed to delete disaster report. Please try again later.');
        }
    };
    
    const handleDeleteHelpRequest = async (requestId) => {
        // Confirm the deletion action with the user
        const confirmDelete = window.confirm('Are you sure you want to delete this help request?');
        if (!confirmDelete) return; // Exit if the user cancels the deletion
    
        // Proceed if the deletion is confirmed
        try {
            const reqHeader = { Authorization: `Bearer ${token}` }; // Add the Authorization header
            const response = await deleteUserHelpRequest(requestId, reqHeader); // Call the API to delete the request
            
            // Check if the API responds with a success status (200)
            if (response.status === 200) {
                // Update the UI by removing the deleted request from the state
                setHelpRequests((prev) => prev.filter((request) => request._id !== requestId));
                alert('Help request deleted successfully.'); // Success message
            } else {
                // Show an appropriate error message if the deletion was unsuccessful
                alert(response.data.message || 'Failed to delete help request. Please try again later.');
            }
        } catch (err) {
            console.error('Error deleting help request:', err); // Log the error to the console
            alert('Failed to delete help request. Please try again later.'); // Generic error message
        }
    };
    

    useEffect(() => {
        fetchDisasters();
        fetchHelpRequests(); // Fetch help requests when component mounts
    }, []);

    const handleEditDisaster = (disaster) => {
        setSelectedDisaster(disaster);
        setIsModalOpen(true);
    };

    const handleEditHelpRequest = (request) => {
        setSelectedHelpRequest(request);
        setIsHelpModalOpen(true);
    };
    console.log(disasters)

    return (
        <>
            <Header />
            <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-20 px-5">
                <div className="text-center text-white mb-10">
                    <h1 className="text-5xl font-extrabold">User Dashboard</h1>
                    <p className="text-lg text-gray-400 mt-3">
                        Manage your reported disasters and help requests in one place.
                    </p>
                </div>

                <div className="flex justify-center space-x-6 mb-16">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-xl shadow-lg"
                    >
                        Report Disaster
                    </button>
                    <button
                        onClick={() => setIsHelpModalOpen(true)} // Open modal to request help
                        className="bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 px-8 rounded-xl shadow-lg"
                    >
                        Request Help
                    </button>

                </div>

                <div className="text-white mb-16">
                    <h2 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-3">Reported Disasters</h2>
                    {isLoading ? (
                        <p className="text-gray-400">Loading disasters...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : disasters.length === 0 ? (
                        <p className="text-gray-400">No disasters reported yet.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {disasters.map((disaster) => (
                                <div key={disaster._id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        className="h-48 w-full object-cover"
                                        src={`${serverUrl}/${disaster.image}`}
                                        alt={disaster.name}
                                    />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{disaster.name}</h3>
                                        <p className="text-gray-300 mb-3">{disaster.description}</p>
                                        <p className="text-sm text-gray-400">
                                            Reported on: {new Date(disaster.date).toLocaleDateString()}
                                        </p>
                                        <div className="flex space-x-3 mt-4">
                                            <button
                                                onClick={() => handleEditDisaster(disaster)}
                                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
                                            >
                                                Edit Report
                                            </button>
                                            <button
                                                onClick={() => handleDeleteDisaster(disaster._id)}
                                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
                                            >
                                                Delete Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="text-white mb-16">
                    <h2 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-3">Help Requests</h2>
                    {isLoading ? (
                        <p className="text-gray-400">Loading help requests...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : helpRequests.length === 0 ? (
                        <p className="text-gray-400">No help requests submitted yet.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {helpRequests.map((request) => (
                            <div key={request._id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{request.title}</h3>
                                    <p className="text-gray-300 mb-3">{request.description}</p>
                                    <p className="text-sm text-gray-400">
                                        Requested on: {new Date(request.dateCreated).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">Status: <span className={`font-semibold ${request.status === 'Completed' ? 'text-green-500' : request.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>{request.status}</span></p>
                                    <div className="flex space-x-3 mt-4">
                                        <button
                                            onClick={() => handleEditHelpRequest(request)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
                                        >
                                            Edit Request
                                        </button>
                                        <button
                                            onClick={() => handleDeleteHelpRequest(request._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
                                        >
                                            Delete Request
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    )}
                </div>

                {isModalOpen && <DisasterModal />}
                {isHelpModalOpen && <HelpRequestModal />}
            </div>
            <Footer />
        </>
    );
}

export default UserDashboard;
