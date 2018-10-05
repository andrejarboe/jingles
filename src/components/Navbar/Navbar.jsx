import React, { Component } from "react";
import { Link } from "gatsby";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar wrapper">
          <div className="logo">
            <h1>Jingles</h1>
          </div>
          <div className="links">
            <Link to="/products">Products</Link>
            <Link to="/products">About</Link>
            <Link to="/products">FAQ</Link>
            <Link to="/products">Request a quote</Link>
          </div>
        </div>
      </nav>
    );
  }
}
