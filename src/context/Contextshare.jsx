import React, { createContext, useState } from 'react';

export const modalResponseContext = createContext({
    isModalOpen: false,
    setIsModalOpen: () => {},
    isHelpModalOpen:false, // Provide help modal visibility state
    setIsHelpModalOpen:()=>{},
    disasters: [],
    setDisasters: () => {},
    selectedDisaster: null,
    setSelectedDisaster: () => {},
    helpRequests: [], // Add state for help requests
    setHelpRequests: () => {}, // Add method for help requests
    selectedHelpRequest: null, // Add state for the selected help request
    setSelectedHelpRequest: () => {}, // Add method for the selected help request
});

function Contextshare({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false); // Add state for Help Modal visibility
    const [disasters, setDisasters] = useState([]);
    const [selectedDisaster, setSelectedDisaster] = useState(null);
    const [helpRequests, setHelpRequests] = useState([]);
    const [selectedHelpRequest, setSelectedHelpRequest] = useState(null);

    return (
        <modalResponseContext.Provider value={{
            isModalOpen,
            setIsModalOpen,
            isHelpModalOpen, // Provide help modal visibility state
            setIsHelpModalOpen, // Provide setter for help modal visibility
            disasters,
            setDisasters,
            selectedDisaster,
            setSelectedDisaster,
            helpRequests,
            setHelpRequests,
            selectedHelpRequest,
            setSelectedHelpRequest,
        }}>
            {children}
        </modalResponseContext.Provider>
    );
}


export default Contextshare;
