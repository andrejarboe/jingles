import React from "react";
// import { Helmet } from "react-helmet";

import Navbar from './Navbar'

const Layout = ({ children }) => (
    <div>
        <Navbar/>
        {children}
    </div>
);

export default Layout