import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Adminsidebar from '../components/Adminsidebar'
import { approveuserApi, getallpendinguserAPi, rejectUserApi } from '../services/allApi'
import { serverUrl } from '../services/serverUrl'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Usermanagement() {
    const [pendingUsers, setPendingUsers] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null); // State for selected image
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const navigate = useNavigate(); // Use navigate for redirection

    // Fetch Pending Users
    const fetchPendingUsers = async () => {
        try {
            const token = sessionStorage.getItem("adminToken"); // Retrieve the token
            if (!token) {
                navigate('*')

            }

            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
            };

            const response = await getallpendinguserAPi(headers);
            if (response.status === 200) {
                setPendingUsers(response.data); // Update state with the pending users
            } else {
                console.error("Error fetching pending users:", response?.data?.message || "Unknown Error");
            }
        } catch (error) {
            console.error("Error in fetchPendingUsers:", error.message || error);
        }
    };

    // Approve User
    const handleApproveUser = async (userId) => {
        try {
            const token = sessionStorage.getItem("adminToken"); // Retrieve the token
            if (!token) {
                console.error("Token is missing");
                return;
            }

            // Set up Authorization headers
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Include the token in Authorization header
            };

            // Send API request with headers and get response
            const response = await approveuserApi(userId, headers); // Pass headers to API
            console.log("Approve User Response:", response);

            // Check if the response is successful
            if (response?.status === 200) {
                toast.success("User approved successfully!");
                // Update state by removing the approved user
                setPendingUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
            } else {
                console.error("Error approving user:", response?.data?.message || "Unknown Error");
            }
        } catch (error) {
            // Handle error correctly, show appropriate error message
            console.error("Error approving user:", error.response?.data?.message || error.message || error);
        }
    };


    // Reject User
    const handleRejectUser = async (userId) => {
        try {
            const token = sessionStorage.getItem("adminToken"); // Retrieve the token
            if (!token) {
                console.error("Token is missing");
                return;
            }

            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Include the token in Authorization header
            };

            const response = await rejectUserApi(userId, headers); // Pass headers to API
            if (response.status === 200) {
                toast.success("User rejected successfully!");
                // Optionally refresh the pending user list
                setPendingUsers(pendingUsers.filter(user => user._id !== userId));
            } else {
                console.error("Error rejecting user:", response?.data?.message || "Unknown Error");
            }
        } catch (error) {
            console.error("Error rejecting user:", error.message || error);
        }
    };

    // Open Modal to View Image
    const openModal = (imagePath) => {
        if (imagePath) {
            setSelectedImage(imagePath);
            setIsModalOpen(true);
        }
    };

    // Close Modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    // Fetch pending users on component mount
    useEffect(() => {
        fetchPendingUsers();
    }, []);

    return (
        <>
            <AdminHeader />
            <div className='flex'>
                <Adminsidebar />
                <div className='bg-gray-950 w-full'>
                    <div className='flex justify-center h-screen pt-28'>
                        <div className="relative sm:rounded-lg overflow-x-auto w-full max-w-6xl">
                            <div className="overflow-x-auto">
                                {pendingUsers.length === 0 ? (
                                    <div className="text-center py-10 text-white text-2xl bg-gray-800 rounded-lg shadow-xl">
                                        <h2>No Pending Users at the Moment</h2>
                                    </div>
                                ) : (
                                    <table className="min-w-full text-sm text-left shadow-xl text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 bg-gray-900 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">SI_NO</th>
                                                <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">USERNAME</th>
                                                <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">EMAIL</th>
                                                <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">PROOF</th>
                                                <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pendingUsers.map((user, index) => (
                                                <tr key={user._id} className="border-b bg-slate-800 border-gray-700 hover:bg-gray-800">
                                                    <th scope="row" className="md:px-14 px-5 py-2 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                                                    <td className="md:px-14 px-5 py-2 text-lg">{user.username}</td>
                                                    <td className="md:px-14 px-5 py-2 text-lg">{user.email}</td>
                                                    <td className="md:px-14 px-5 py-2 text-lg">
                                                        <img
                                                            src={`${serverUrl}/${user.proof.filepath}`}
                                                            alt="proof"
                                                            className="h-20 w-20 rounded-full cursor-pointer"
                                                            onClick={() => openModal(`${serverUrl}/${user.proof.filepath}`)} // Open modal on click
                                                        />
                                                    </td>
                                                    <td className="md:px-14 px-5 py-2 text-lg">
                                                        <div className="flex">
                                                            <button onClick={() => handleRejectUser(user._id)}>
                                                                <FontAwesomeIcon icon={faCircleXmark} className="text-red-700 fa-2x" />
                                                            </button>
                                                            <button onClick={() => handleApproveUser(user._id)} className="ms-4">
                                                                <FontAwesomeIcon icon={faCircleCheck} className="text-green-700 fa-2x" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>

                        {/* Modal for enlarged image */}

                        {isModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-md transition-opacity duration-300">
                                <div className="relative">
                                    {/* Modal Image */}
                                    <img
                                        src={selectedImage}
                                        alt="Proof Enlarged"
                                        className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                                    />

                                    {/* Close Button */}
                                    <button
                                        className="absolute top-3 right-3 bg-gray-800 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-700 hover:scale-110 transition-transform duration-300"
                                        onClick={closeModal}
                                        aria-label="Close Modal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.47 4.47a.75.75 0 011.06 0L12 9.94l5.47-5.47a.75.75 0 011.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 14.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            < ToastContainer
                position="top-center"
                autoClose={3000}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                theme="dark"
                transition:Slide

            />
        </>
    );
}

export default Usermanagement;
