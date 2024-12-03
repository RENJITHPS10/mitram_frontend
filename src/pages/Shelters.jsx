import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getallshelterApi } from '../services/allApi';

function Shelters() {
    const [allshelter,setallshelter]=useState([])
    const getallshelter=async()=>{
        const result=await getallshelterApi()
        setallshelter(result.data)


    }
    useEffect(()=>{
        getallshelter()


    },[])
    return (
        <>
            <Header />
            <div className="py-20 bg-sheltercover   bg-cover">
                <div className="px-8">
                    <h1 className="text-4xl text-center font-bold text-white mb-10">Available Disaster Shelters</h1>
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {/* Shelter Card */}
                        {
                            allshelter.map(item=>(
                            
                            <div className="bg-gray-900 bg-opacity-80 rounded-lg text-white shadow-xl border border-gray-700 overflow-hidden">
                            <div className="p-6">
                                <h1 className="text-3xl text-center font-bold mb-2">{item.name}</h1>
                                <p className="text-center text-gray-400 mb-4">{item.location}</p>
                                <img src={item.image} alt="Shelter" className="w-full h-48 object-cover mb-4 rounded-md" />
                                <div className="space-y-4">
                                    <p className="text-lg"><strong>Capacity:</strong> {item.capacity} people</p>
                                    <p className="text-lg"><strong>Current Occupancy:</strong> {item. current_occupancy} people</p>
                                    <p className="text-lg"><strong>Amenities:</strong>{item.amenities}</p>
                                    <div>
                                        <h2 className="text-lg font-semibold">Contact Information:</h2>
                                        <p>Phone: {item.contact}</p>
                                      
                                        <p>
                                            <a
                                                href={item.map}
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
                       )) }
                        
                       

                      
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Shelters;

// [
//     {
//         "name": "Skyline Residency",
//         "location": "Kochi, Kerala",
//         "capacity": 200,
//         "current_occupancy": 150,
//         "amenities": "WiFi, Parking, Swimming Pool",
//         "contact": "+91 9876543210",
//         "map": "https://maps.google.com/example-skyline-residency",
//         "image": "https://media.gettyimages.com/id/172143432/photo/flood-nj-shelter-cots.jpg?s=612x612&w=gi&k=20&c=WjNuc5rnXit_7ZtaorSEWQsMAVzfU25HxfoxOC0D3Eg="
//     },
//     {
//         "name": "Green Valley Hostel",
//         "location": "Trivandrum, Kerala",
//         "capacity": 100,
//         "current_occupancy": 75,
//         "amenities": "Gym, Laundry, Study Room",
//         "contact": "+91 9123456780",
//         "map": "https://maps.google.com/example-green-valley-hostel",
//         "image": "https://images.squarespace-cdn.com/content/v1/573b7c7c4d088ed0d9bd6a19/1598965252538-EN10EF5KZGV9QI3TOW8H/15311764_refuge-shelter.JPG"
//     },
//     {
//         "name": "Ocean View Apartments",
//         "location": "Alappuzha, Kerala",
//         "capacity": 80,
//         "current_occupancy": 60,
//         "amenities": "Sea View, Power Backup, 24/7 Security",
//         "contact": "+91 9087654321",
//         "map": "https://maps.google.com/example-ocean-view-apartments",
//         "image": "https://www.deshabhimani.com/images/news/english/large/aa-504670.jpg"
//     },
//     {
//         "name": "Mountain Breeze Lodge",
//         "location": "Munnar, Kerala",
//         "capacity": 50,
//         "current_occupancy": 45,
//         "amenities": "Campfire, Guided Tours, Free Breakfast",
//         "contact": "+91 9012345678",
//         "map": "https://maps.google.com/example-mountain-breeze-lodge",
//         "image": "https://th-i.thgim.com/public/news/national/kerala/as3okv/article31863374.ece/alternates/FREE_1200/19tval3-shelter"
//     },
//     {
//         "name": "City Center Inn",
//         "location": "Calicut, Kerala",
//         "capacity": 120,
//         "current_occupancy": 110,
//         "amenities": "Conference Hall, Free WiFi, Restaurant",
//         "contact": "+91 9065432187",
//         "map": "https://maps.google.com/example-city-center-inn",
//         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhneCXmRWEdVySjQt_BJPRxyzwcDGNybUJgqwVwjjaJr1-VpILTatz8qc3IO2KNQKBpY&usqp=CAU"
//     }
// ]

