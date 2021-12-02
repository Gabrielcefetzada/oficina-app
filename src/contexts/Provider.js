import React, { useState } from 'react'
import { AppContext } from "./Context";

const AppProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <AppContext.Provider value = {{ isModalOpen, setIsModalOpen }}>
            { children }
        </AppContext.Provider>
    );
}

export default AppProvider;