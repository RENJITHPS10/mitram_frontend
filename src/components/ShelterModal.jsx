import React, { useContext, useState, useEffect } from "react";
import { modalResponseContext } from "../context/Contextshare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { updateshelterApi, createshelterApi } from "../services/allApi";
import { serverUrl } from "../services/serverUrl";

function ShelterModal({ shelter = null, onSuccess }) {
  const { setIsModalOpen, isModalOpen } = useContext(modalResponseContext);
  const token = sessionStorage.getItem("adminToken");

  const initialState = {
    name: "",
    location: "",
    capacity: "",
    current_occupancy: "",
    amenities: "",
    contact: "",
    map: "",
    image: null,
    imageUrl: "",
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (shelter) {
      setFormData({
        ...initialState,
        ...shelter,
        imageUrl: shelter.image || "",
      });
    } else {
      setFormData(initialState);
    }
  }, [shelter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "imageUrl" && (key !== "image" || value)) {
        formDataObj.append(key, value);
      }
    });

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };

    try {
      const response = shelter
        ? await updateshelterApi(shelter._id, formDataObj, headers)
        : await createshelterApi(formDataObj, headers);

      if (response.status === 200 || response.status === 201) {
        setIsModalOpen(false);
        onSuccess?.();
      } else {
        console.error("Server error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error during shelter submission:", error);
    }
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
        <div className="bg-gray-800 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white rounded-lg w-3/4 max-h-[90vh] overflow-hidden p-8 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              {shelter ? "Edit Shelter" : "Add Shelter"}
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 hover:text-red-600"
            >
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[75vh] pr-4">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  { label: "Shelter Name", name: "name", type: "text" },
                  { label: "Location", name: "location", type: "text" },
                  { label: "Capacity", name: "capacity", type: "number" },
                  { label: "Current Occupancy", name: "current_occupancy", type: "number" },
                  { label: "Map Link", name: "map", type: "text" },
                ].map((field, idx) => (
                  <div key={idx} className="flex flex-col">
                    <label className="font-medium">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                      placeholder={`Enter ${field.label}`}
                    />
                  </div>
                ))}
                {[
                  { label: "Amenities", name: "amenities" },
                  { label: "Contact", name: "contact" },
                ].map((field, idx) => (
                  <div key={idx} className="flex flex-col">
                    <label className="font-medium">{field.label}</label>
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500 h-24"
                      placeholder={`Describe ${field.label}`}
                    />
                  </div>
                ))}
                <div className="flex flex-col">
                  <label className="font-medium">Image</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                  />
                  {formData.imageUrl && (
                    <img
                      src={`${serverUrl}/${formData.imageUrl}`}
                      alt="Shelter"
                      className="mt-4 rounded-md max-h-48 object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-md text-white"
                >
                  {shelter ? "Update Shelter" : "Add Shelter"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default ShelterModal;
