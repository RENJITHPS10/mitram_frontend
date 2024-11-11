import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Disasters() {
    return (
        <>
            <Header />
            <div className="py-20 bg-disastercover  bg-cover">
                <div className="container  px-8">
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                      {/* disaster card */}
                        <div className="bg-black bg-opacity-75 rounded-lg text-white shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h1 className="text-4xl text-center font-bold mb-2">Flood</h1>
                                <p className="text-center text-gray-300 mb-4">15/11/2024</p>
                                <img src="/flood.jpg" alt="Flood" className="w-full h-48 object-cover mb-4 rounded-md" />
                                <div className="space-y-3">
                                    <p className="text-sm text-justify">
                                        On November 15, 2024, Riverside City experienced severe flooding due to heavy rainfall. The river overflowed, affecting several neighborhoods and causing widespread damage to homes and infrastructure. Emergency services are actively working to assist affected residents.
                                    </p>
                                    <p className="text-lg"><strong>Location:</strong> Kochi</p>
                                    <p>
                                        <strong>Affected Areas:</strong> Downtown, Riverside Heights, and Westside neighborhoods
                                    </p>
                                    <p>
                                        <strong>Number of People Impacted:</strong> Approximately 2,500 residents displaced
                                    </p>
                                    <div>
                                        <h2 className="text-lg font-semibold">Emergency Contacts:</h2>
                                        <p>Local Authorities: Riverside City Emergency Management Office</p>
                                        <p>Phone: (555) 123-4567</p>
                                        <p>Disaster Management Hotline: (555) 987-6543</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-75 rounded-lg text-white shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h1 className="text-4xl text-center font-bold mb-2">Flood</h1>
                                <p className="text-center text-gray-300 mb-4">15/11/2024</p>
                                <img src="/flood.jpg" alt="Flood" className="w-full h-48 object-cover mb-4 rounded-md" />
                                <div className="space-y-3">
                                    <p className="text-sm text-justify">
                                        On November 15, 2024, Riverside City experienced severe flooding due to heavy rainfall. The river overflowed, affecting several neighborhoods and causing widespread damage to homes and infrastructure. Emergency services are actively working to assist affected residents.
                                    </p>
                                    <p className="text-lg"><strong>Location:</strong> Kochi</p>
                                    <p>
                                        <strong>Affected Areas:</strong> Downtown, Riverside Heights, and Westside neighborhoods
                                    </p>
                                    <p>
                                        <strong>Number of People Impacted:</strong> Approximately 2,500 residents displaced
                                    </p>
                                    <div>
                                        <h2 className="text-lg font-semibold">Emergency Contacts:</h2>
                                        <p>Local Authorities: Riverside City Emergency Management Office</p>
                                        <p>Phone: (555) 123-4567</p>
                                        <p>Disaster Management Hotline: (555) 987-6543</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-75 rounded-lg text-white shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h1 className="text-4xl text-center font-bold mb-2">Flood</h1>
                                <p className="text-center text-gray-300 mb-4">15/11/2024</p>
                                <img src="/flood.jpg" alt="Flood" className="w-full h-48 object-cover mb-4 rounded-md" />
                                <div className="space-y-3">
                                    <p className="text-sm text-justify">
                                        On November 15, 2024, Riverside City experienced severe flooding due to heavy rainfall. The river overflowed, affecting several neighborhoods and causing widespread damage to homes and infrastructure. Emergency services are actively working to assist affected residents.
                                    </p>
                                    <p className="text-lg"><strong>Location:</strong> Kochi</p>
                                    <p>
                                        <strong>Affected Areas:</strong> Downtown, Riverside Heights, and Westside neighborhoods
                                    </p>
                                    <p>
                                        <strong>Number of People Impacted:</strong> Approximately 2,500 residents displaced
                                    </p>
                                    <div>
                                        <h2 className="text-lg font-semibold">Emergency Contacts:</h2>
                                        <p>Local Authorities: Riverside City Emergency Management Office</p>
                                        <p>Phone: (555) 123-4567</p>
                                        <p>Disaster Management Hotline: (555) 987-6543</p>
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

export default Disasters;
