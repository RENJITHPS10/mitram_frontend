import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { modalResponseContext } from '../context/Contextshare';
import DisasterModal from '../components/DisasterModal';
import { getusersdisaster } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function UserDashboard() {
    const { setIsModalOpen, isModalOpen, disasters, setDisasters, setSelectedDisaster } = useContext(modalResponseContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch disasters from the backend
    const fetchDisasters = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const token = sessionStorage.getItem('token');
            const reqHeader = { 'Authorization': `Bearer ${token}` };
            const response = await getusersdisaster(reqHeader);
            setDisasters(response.data.disasters); // Update context with fetched disasters
        } catch (err) {
            setError('Failed to load disasters. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDisasters();
    }, []);

    const handleEdit = (disaster) => {
        setSelectedDisaster(disaster); // Set selected disaster in the context for editing
        setIsModalOpen(true); // Open the modal
    };
    

    return (
        <>
            <Header />
            <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-20 px-5">
                <div className="text-center text-white mb-10">
                    <h1 className="text-5xl font-extrabold">User Dashboard</h1>
                    <p className="text-lg text-gray-400 mt-3">
                        Manage your reported disasters in one place.
                    </p>
                </div>

                <div className="flex justify-center space-x-6 mb-16">
                    <button
                        onClick={() => setIsModalOpen(true)} // Open modal to report new disaster
                        className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-xl shadow-lg"
                    >
                        Report Disaster
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 px-8 rounded-xl shadow-lg">
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
                                        <button
                                            onClick={() => handleEdit(disaster)} // Open modal for editing disaster
                                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
                                        >
                                            Edit Report
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {isModalOpen && <DisasterModal />}
            </div>
            <Footer />
        </>
    );
}

export default UserDashboard;
