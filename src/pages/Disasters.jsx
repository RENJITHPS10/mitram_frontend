import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getalldisasterApi } from '../services/allApi';

function Disasters() {

    const [alldisaster,setalldisaster]=useState([])
    const getDisaster=async()=>{
        const result=await getalldisasterApi()
        setalldisaster(result.data)
    }
    console.log(alldisaster)
    
    useEffect(()=>{
        getDisaster()
    },[])
    return (
        <>
            <Header />
            <div className="py-20 bg-disastercover  bg-cover">
                <div className="container  px-8">
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                      {/* disaster card */}
                      {alldisaster.map(item=>(
                        <div className="bg-black bg-opacity-75 rounded-lg text-white shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h1 className="text-4xl text-center font-bold mb-2">{item.name}</h1>
                            <p className="text-center text-gray-300 mb-4">{item.date}</p>
                            <img src={item.image} alt="Flood" className="w-full h-48 object-cover mb-4 rounded-md" />
                            <div className="space-y-3">
                                <p className="text-sm text-justify">
                                   {item.description}
                                </p>
                                <p className="text-lg"><strong>Location:</strong> {item.location}</p>
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
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default Disasters;

// [
//     {
//       "name": "Flood Relief Operation",
//       "date": "2024-12-05T10:00:00.000Z",
//       "description": "Organizing relief operations for areas affected by severe flooding.",
//       "location": "Kochi, Kerala",   
//       "affectedarea": "Aluva and surrounding regions",
//       "impact": "Displacement of over 5,000 families and severe infrastructure damage",
//       "contacts": "John Doe - +91 9876543210, Relief Helpline - +91 1234567890",
//       "image": "https://imgs.search.brave.com/p9IGpVOBjS3Sj2Hp-rIwXpqRKjRSmjQHAPT5mruWC-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/Mi8xNS8xMS8yNS9y/aXZlci00ODUwNzEw/XzY0MC5qcGc"
//     },
//     {
//       "name": "Earthquake Recovery Drive",
//       "date": "2024-11-28T08:30:00.000Z",
//       "description": "Providing emergency assistance and rebuilding support to earthquake-hit regions.",
//       "location": "Shimla, Himachal Pradesh",
//       "affectedarea": "Shimla and surrounding villages",
//       "impact": "Over 2,000 buildings collapsed; 300 injured.",
//       "contacts": "Amit Sharma - +91 9988776655, Emergency Line - +91 8899775544",
//       "image": "https://images.unsplash.com/photo-1677233860259-ce1a8e0f8498?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcnRocXVha2V8ZW58MHx8MHx8fDA%3D"
//     },
//     {
//       "name": "Cyclone Relief Campaign",
//       "date": "2024-12-01T09:00:00.000Z",
//       "description": "Distributing food, clothes, and medical aid to cyclone-affected areas.",
//       "location": "Puri, Odisha",
//       "affectedarea": "Coastal villages of Odisha",
//       "impact": "Widespread destruction of homes and power outages.",
//       "contacts": "Rahul Verma - +91 7766554433, Helpdesk - +91 1122334455",
//       "image": "https://wvusstatic.com/www/uploads/2019/03/W258-0092-030.jpg"
//     },
//     {
//       "name": "Drought Assistance Initiative",
//       "date": "2024-12-10T11:00:00.000Z",
//       "description": "Setting up water distribution centers and providing agricultural aid.",
//       "location": "Nagpur, Maharashtra",
//       "affectedarea": "Vidarbha region",
//       "impact": "Severe water shortage affecting over 10,000 farmers.",
//       "contacts": "Priya Nair - +91 8899001122, Support Line - +91 5544332211",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkPQctqVNv0B3-vF6gLIIcwWus_b_v-OD6A&s"
//     },
//     {
//       "name": "Forest Fire Rehabilitation",
//       "date": "2024-11-25T15:00:00.000Z",
//       "description": "Rehabilitation support for families and wildlife affected by forest fires.",
//       "location": "Ooty, Tamil Nadu",
//       "affectedarea": "Nilgiri Hills",
//       "impact": "Massive forest loss and evacuation of 1,000 people.",
//       "contacts": "Suresh Kumar - +91 6677889900, Wildlife Help - +91 9988776655",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JjwZzcdzEoHjpYZXTHb1CCKRkMWovkSL-g&s"
//     }
//   ]
  
