import React, { createContext, useState } from 'react'



export const modalResponseContext = createContext({})

function Contextshare({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <modalResponseContext.Provider value={{ isModalOpen, setIsModalOpen }}>
                {children}
            </modalResponseContext.Provider>

        </>
    )
}

export default Contextshare
