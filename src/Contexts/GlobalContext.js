import React, { createContext, useState, useContext } from 'react';

const GlobalContextProvider = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContextProvider);
};

export const GlobalContext = ({ children }) => {
    const [ uploadMsg_gl, setUploadMsg_gl] = useState('');
    const [ uploadErr_gl, setUploadErr_gl] = useState('');

    const getUploadMsg = (uploadMsg) => {
        setUploadMsg_gl(uploadMsg);
    };

    const getUploadErr =  (uploadErr) => {
        setUploadErr_gl(uploadErr);
    };

    //pass values
    const value = { uploadErr_gl, uploadMsg_gl, getUploadErr, getUploadMsg };

    return (
        <GlobalContextProvider.Provider value={value}>
            {children}
        </GlobalContextProvider.Provider>
    )
};