"use client"


import React, { createContext, useState, useContext} from "react"
import { Children } from "react"
import themes from "./themes"
export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

export const GlobalProvider = ({ Children}) => {
    
const [selectedTheme, setSelectedTheme] = useState(0);
const theme = themes[0];
    return (
        <GlobalContext.Provider value={{}}>
            <GlobalUpdateContext.Provider value={setGlobalState}>
                {Children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
