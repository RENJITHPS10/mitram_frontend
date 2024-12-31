import React, { createContext, useState } from 'react';

export const modalResponseContext = createContext({
    isModalOpen: false,
    setIsModalOpen: () => {},
    disasters: [],
    setDisasters: () => {},
    selectedDisaster: null, // Add this line
    setSelectedDisaster: () => {} // Add this line
});

function Contextshare({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [disasters, setDisasters] = useState([]);
    const [selectedDisaster, setSelectedDisaster] = useState(null); // Add selectedDisaster state

    return (
        <modalResponseContext.Provider value={{
            isModalOpen,
            setIsModalOpen,
            disasters,
            setDisasters,
            selectedDisaster, 
            setSelectedDisaster // Pass it down through context
        }}>
            {children}
        </modalResponseContext.Provider>
    );
}

export default Contextshare;

