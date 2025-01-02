import React, { useContext, useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import { faEdit, faHouseCircleCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Adminsidebar from "../components/Adminsidebar";
import ShelterModal from "../components/ShelterModal";
import { modalResponseContext } from "../context/Contextshare";
import { useNavigate } from "react-router-dom";
import { getallshelterApi } from "../services/allApi";

function ShelterManagement() {
  const { setIsModalOpen } = useContext(modalResponseContext);
  const [allShelters, setAllShelters] = useState([]);
  const [selectedShelter, setSelectedShelter] = useState(null);
  const navigate = useNavigate();

  const fetchShelters = async () => {
    const token = sessionStorage.getItem("adminToken");
    if (!token) {
      navigate("*");
      return;
    }

    try {
      const response = await getallshelterApi();
      setAllShelters(response.data); // Populate shelter data
    } catch (error) {
      console.error("Error fetching shelters:", error);
    }
  };

  useEffect(() => {
    fetchShelters();
  }, []);

  const handleEdit = (shelter) => {
    setSelectedShelter(shelter);
    setIsModalOpen(true);
  };

  return (
    <>
      <AdminHeader />
      <div className="flex">
        <Adminsidebar />
        <div className="bg-gray-950 w-full">
          <div className="flex justify-center h-screen pt-28">
            <div className="relative overflow-x-auto max-w-6xl sm:rounded-lg">
              <div className="flex justify-end">
                <button
                  className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 rounded-xl px-6 py-3 font-semibold hover:shadow-xl transition duration-300 ease-in-out mb-2"
                  onClick={() => {
                    setSelectedShelter(null); // Reset to null for adding new
                    setIsModalOpen(true);
                  }}
                >
                  <FontAwesomeIcon icon={faHouseCircleCheck} className="mr-2" />
                  ADD SHELTER
                </button>
              </div>

              <table className="w-full text-sm text-left shadow-xl text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-900 uppercase">
                  <tr>
                    <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                      SI_NO
                    </th>
                    <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                      Shelter Name
                    </th>
                    <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                      Location
                    </th>
                    <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                      Capacity
                    </th>
                    <th scope="col" className="md:px-14 px-5 md:py-3 text-xl">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allShelters.map((shelter, index) => (
                    <tr
                      key={shelter._id || index}
                      className="border-b bg-slate-800 border-gray-700 hover:bg-gray-800"
                    >
                      <th
                        scope="row"
                        className="md:px-14 px-5 py-2 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="md:px-14 px-5 py-2 text-lg">{shelter.name}</td>
                      <td className="md:px-14 px-5 py-2 text-lg">{shelter.location}</td>
                      <td className="md:px-14 px-5 py-2 text-lg">{shelter.capacity}</td>
                      <td className="px-6 py-4 text-center space-x-4">
                        <button
                          onClick={() => handleEdit(shelter)}
                          className="text-blue-500 hover:text-blue-600"
                        >
                          <FontAwesomeIcon icon={faEdit} className="fa-2x me-2" />
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          <FontAwesomeIcon icon={faTrash} className="fa-2x" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ShelterModal shelter={selectedShelter} onSuccess={fetchShelters} />
    </>
  );
}

export default ShelterManagement;
