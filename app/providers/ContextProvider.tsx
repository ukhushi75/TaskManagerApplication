"use client";
import React from "react";
import GlobalStyleProvider from "./GlobalStyleProvider";

interface Props {
    children: React.ReactNode;
}

function ContextProvider({ children  }: Props) {
    return <GlobalStyleProvider>{children}</GlobalStyleProvider>;
       //now we should be able to access to the state, but we haven't wrapped our entire application yet.
    
}

export default ContextProvider