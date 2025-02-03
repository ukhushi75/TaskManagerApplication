"use client"
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";

function Sidebar(){
    const context = useGlobalState();

    console.log(context);

    return(
        <SidebarStyled>Sidebar</SidebarStyled>
    )
}

const SidebarStyled = styled.nav``;
export default Sidebar