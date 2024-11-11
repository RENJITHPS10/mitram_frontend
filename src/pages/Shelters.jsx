import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Shelters() {
    return (
        <>
            <Header />
            <div className="py-20 bg-sheltercover   bg-cover">
                <div className="px-8">
                    <h1 className="text-4xl text-center font-bold text-white mb-10">Available Disaster Shelters</h1>
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {/* Shelter Card */}
                        <div className="bg-gray-900 bg-opacity-80 rounded-lg text-white shadow-xl border border-gray-700 overflow-hidden">
                            <div className="p-6">
                                <h1 className="text-3xl text-center font-bold mb-2">Riverside Community Center</h1>
                                <p className="text-center text-gray-400 mb-4">Kochi, Riverside Avenue</p>
                                <img src="/sheltercamp.jpg" alt="Shelter" className="w-full h-48 object-cover mb-4 rounded-md" />
                                <div className="space-y-4">
                                    <p className="text-lg"><strong>Capacity:</strong> 500 people</p>
                                    <p className="text-lg"><strong>Current Occupancy:</strong> 350 people</p>
                                    <p className="text-lg"><strong>Amenities:</strong> Food, water, medical aid, bedding</p>
                                    <div>
                                        <h2 className="text-lg font-semibold">Contact Information:</h2>
                                        <p>Phone: (555) 123-7890</p>
                                        <p>Emergency Hotline: (555) 987-3210</p>
                                        <p>
                                            <a
                                                href="https://www.google.com/maps/"
                                                target="_blank"
                                             
                                                className="text-blue-400 underline hover:text-blue-300"
                                            >
                                                View on Google Maps
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* shelter card2 */}
                        <div className="bg-gray-900 bg-opacity-80 rounded-lg text-white shadow-xl border border-gray-700 overflow-hidden">
                            <div className="p-6">
                                <h1 className="text-3xl text-center font-bold mb-2">Riverside Community Center</h1>
                                <p className="text-center text-gray-400 mb-4">Kochi, Riverside Avenue</p>
                                <img src="/sheltercamp.jpg" alt="Shelter" className="w-full h-48 object-cover mb-4 rounded-md" />
                                <div className="space-y-4">
                                    <p className="text-lg"><strong>Capacity:</strong> 500 people</p>
                                    <p className="text-lg"><strong>Current Occupancy:</strong> 350 people</p>
                                    <p className="text-lg"><strong>Amenities:</strong> Food, water, medical aid, bedding</p>
                                    <div>
                                        <h2 className="text-lg font-semibold">Contact Information:</h2>
                                        <p>Phone: (555) 123-7890</p>
                                        <p>Emergency Hotline: (555) 987-3210</p>
                                        <p>
                                            <a
                                                href="https://www.google.com/maps/"
                                                target="_blank"
                                             
                                                className="text-blue-400 underline hover:text-blue-300"
                                            >
                                                View on Google Maps
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* shelter card 3 */}
                        <div className="bg-gray-900 bg-opacity-80 rounded-lg text-white shadow-xl border border-gray-700 overflow-hidden">
                            <div className="p-6">
                                <h1 className="text-3xl text-center font-bold mb-2">Riverside Community Center</h1>
                                <p className="text-center text-gray-400 mb-4">Kochi, Riverside Avenue</p>
                                <img src="/sheltercamp.jpg" alt="Shelter" className="w-full h-48 object-cover mb-4 rounded-md" />
                                <div className="space-y-4">
                                    <p className="text-lg"><strong>Capacity:</strong> 500 people</p>
                                    <p className="text-lg"><strong>Current Occupancy:</strong> 350 people</p>
                                    <p className="text-lg"><strong>Amenities:</strong> Food, water, medical aid, bedding</p>
                                    <div>
                                        <h2 className="text-lg font-semibold">Contact Information:</h2>
                                        <p>Phone: (555) 123-7890</p>
                                        <p>Emergency Hotline: (555) 987-3210</p>
                                        <p>
                                            <a
                                                href="https://www.google.com/maps/"
                                                target="_blank"
                                             
                                                className="text-blue-400 underline hover:text-blue-300"
                                            >
                                                View on Google Maps
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Shelters;
