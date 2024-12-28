import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Adminsidebar from '../components/Adminsidebar'
import { approveuserApi, getallpendinguserAPi } from '../services/allApi'
import { serverUrl } from '../services/serverUrl'

function Usermanagement() {
    const [pendingUsers, setPendingUsers] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null); // State for selected image
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const handleApproveUser = async (userId) => {
    
        try {
            const response = await approveuserApi(userId);
            console.log(response)
            if (response.status === 200) {
                alert("User approved successfully!");
                // Optionally refresh the pending user list
                setPendingUsers(pendingUsers.filter(user => user._id !== userId));
            }
        } catch (error) {
            console.error("Error approving user:", error);
        }
    };

    const fetchPendingUsers = async () => {
        const response = await getallpendinguserAPi();
        setPendingUsers(response.data);
    };



    const openModal = (imagePath) => {
        setSelectedImage(imagePath);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };


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
                                                        <button ><FontAwesomeIcon icon={faCircleXmark} className="text-red-700 fa-2x" /></button>
                                                        <button onClick={()=>handleApproveUser(user._id)}><FontAwesomeIcon icon={faCircleCheck} className="text-green-700 fa-2x ms-4" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Modal for enlarged image */}
                        {isModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                                <div className="relative">
                                    <img src={selectedImage} alt="proof enlarged" className="max-h-[80vh] max-w-[90vw] rounded-lg" />
                                    <button
                                        className="absolute top-3 right-3 text-white text-3xl font-bold"
                                        onClick={closeModal}
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Usermanagement;
