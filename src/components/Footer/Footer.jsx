import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="wrapper">
           </div>
        <div className="wrapper">
          <div className="company">
            <h3>Jingles</h3>
            <ul>
                <li><a href="">About</a></li>
            </ul>
          </div>
          <div className="resources">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Brand</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <p>contact@jingles.com</p>
            <div className="design">
              <a href="">Designed and coded at Jarboe Studios</a>
              <p>All Right Reserves 2018</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
