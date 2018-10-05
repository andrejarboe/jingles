import React from "react";
// import { Helmet } from "react-helmet";

import Navbar from './Navbar'
import Footer from './Footer'

import './layout.css'

const Layout = ({ children }) => (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
);

export default Layout