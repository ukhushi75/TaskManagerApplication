"use client"
//here we're going to create the context for updating and the actual context
//input create context

import React, { createContext, useState, useContext} from "react"
import { Children } from "react"
import themes from "./themes"
export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()
//its going to be our entire application so we're going to wrap with the global provider
export const GlobalProvider = ({ Children}) => {
//create a state for the theme
    
const [selectedTheme, setSelectedTheme] = useState(0);
const theme = themes[0];
//theme = an array and the selection is going to be 0
    return (
        <GlobalContext.Provider value={{theme, }}>
            <GlobalUpdateContext.Provider value={setGlobalState}>
                {Children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};
