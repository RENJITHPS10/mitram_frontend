import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getallshelterApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function Shelters() {
    const [allshelter, setallshelter] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Search term state
    const [filteredShelters, setFilteredShelters] = useState([]); // Filtered shelters state

    const getallshelter = async () => {
        try {
            const result = await getallshelterApi();
            setallshelter(result.data);
        } catch (error) {
            console.error('Error fetching shelters:', error);
        }
    };

    useEffect(() => {
        getallshelter();
    }, []);

    useEffect(() => {
        const filtered = allshelter.filter((shelter) =>
            shelter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shelter.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shelter.amenities.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredShelters(filtered);
    }, [searchTerm, allshelter]); // Re-run filter logic when search term or shelters change

    return (
        <>
            <Header />
            <div className="py-20 bg-sheltercover bg-cover">
                <div className="px-8">
                   
                    
                    {/* Search Box */}
                    <div className="flex justify-end mb-8">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search shelters by name, location, or amenities"
                            className="p-3 w-full md:w-1/3 rounded-full shadow-md bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200 ease-in-out"
                            style={{
                                border: '1px solid #333',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </div>

                    {/* Shelter Cards */}
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {filteredShelters.length > 0 ? (
                            filteredShelters.map((item) => (
                                <div
                                    key={item.name}
                                    className="bg-gray-900 bg-opacity-80 rounded-lg text-white shadow-xl border border-gray-700 overflow-hidden"
                                >
                                    <div className="p-6">
                                        <h1 className="text-3xl text-center font-bold mb-2">{item.name}</h1>
                                        <p className="text-center text-gray-400 mb-4">{item.location}</p>
                                        <img
                                            src={`${serverUrl}/${item.image}`}
                                            alt="Shelter"
                                            className="w-full h-48 object-cover mb-4 rounded-md"
                                        />
                                        <div className="space-y-4">
                                            <p className="text-lg">
                                                <strong>Capacity:</strong> {item.capacity} people
                                            </p>
                                            <p className="text-lg">
                                                <strong>Current Occupancy:</strong> {item.current_occupancy} people
                                            </p>
                                            <p className="text-lg">
                                                <strong>Amenities:</strong> {item.amenities}
                                            </p>
                                            <div>
                                                <h2 className="text-lg font-semibold">Contact Information:</h2>
                                                <p>Phone: {item.contact}</p>
                                                <p>
                                                    <a
                                                        href={item.map}
                                                        target="_blank"
                                                        className="text-blue-400 underline hover:text-blue-300"
                                                        rel="noopener noreferrer"
                                                    >
                                                        View on Google Maps
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center col-span-3 text-white mt-20">
                                <h2 className="text-4xl font-bold">No Shelters Found</h2>
                                <p className="text-lg text-gray-400">
                                    No matching shelters found. Try searching with a different keyword.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Shelters;
