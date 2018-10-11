import React from "react";
import { Helmet } from "react-helmet";

import Navbar from './Navbar'
import Footer from './Footer'

import './layout.css'

const Layout = ({ children }) => (
    <div>
        <Helmet>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB" crossorigin="anonymous"></script>


        </Helmet>
        <Navbar/>
        {children}
        <Footer/>
    </div>
);

export default Layout