import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
// import "./BaseLayout.module.css"

const BaseLayout = ({ children }: any) => {
    return (
        <div className="base-layout">
            <Navbar />
            {children || <Outlet />}
        </div>
    );
};

export default BaseLayout;
