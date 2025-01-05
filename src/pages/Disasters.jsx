import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getalldisasterApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function Disasters() {
    const [alldisaster, setalldisaster] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State to manage the search term
    const [filteredDisasters, setFilteredDisasters] = useState([]); // State for filtered results

    const getDisaster = async () => {
        try {
            const result = await getalldisasterApi();
            setalldisaster(result.data.data);
        } catch (error) {
            console.error('Error fetching disasters:', error);
        }
    };

    useEffect(() => {
        getDisaster();
    }, []);

    useEffect(() => {
        const filtered = alldisaster.filter((disaster) =>
            disaster.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            disaster.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            disaster.affectedarea.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDisasters(filtered);
    }, [searchTerm, alldisaster]); // Filter disasters whenever the search term or the full list changes

    return (
        <>
            <Header />
            <div className="py-20 bg-disastercover bg-cover">
                <div className="container px-8">
                <div className="flex justify-end mb-8">
    <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search disasters by name, location, or affected area"
        className="p-3 w-full md:w-1/3 rounded-full shadow-md bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200 ease-in-out"
        style={{
            border: '1px solid #333',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
    />
</div>


                    {filteredDisasters.length === 0 ? (
                        <div className="text-center text-white mt-20">
                            <h1 className="text-4xl font-bold mb-4">No Disasters Found</h1>
                            <p className="text-lg text-gray-300">
                                Currently, there are no matching disaster relief operations listed. Please try a different search.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-10 mt-16">
                            {filteredDisasters.map((item) => (
                                <div
                                    key={item.name}
                                    className="bg-black bg-opacity-75 rounded-lg text-white shadow-lg overflow-hidden"
                                >
                                    <div className="p-6">
                                        <h1 className="text-4xl text-center font-bold mb-2">{item.name}</h1>
                                        <p className="text-center text-gray-300 mb-4">
                                            {new Date(item.date).toLocaleDateString()}
                                        </p>
                                        <img
                                            src={`${serverUrl}/${item.image}`}
                                            alt="Disaster"
                                            className="w-full h-48 object-cover mb-4 rounded-md"
                                        />
                                        <div className="space-y-3">
                                            <p className="text-sm text-justify">{item.description}</p>
                                            <p className="text-lg">
                                                <strong>Location:</strong> {item.location}
                                            </p>
                                            <p>
                                                <strong>Affected Areas:</strong> {item.affectedarea}
                                            </p>
                                            <p>
                                                <strong>Number of People Impacted:</strong> {item.impact}
                                            </p>
                                            <div>
                                                <h2 className="text-lg font-semibold">Emergency Contacts:</h2>
                                                <p>{item.contacts}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Disasters;
