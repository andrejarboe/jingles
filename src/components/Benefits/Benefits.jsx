import React, { Component } from "react";
import "./benefits.css";

export default class Benefits extends Component {
  render() {
    return (
      <div className="benefits">
        <div className="row">
          <div className="wrapper">
            <div className="title">
              <h3>Benefits</h3>
            </div>
            <div className="content">
              <div className="benefit">
                <h3>Benefit 1</h3>
                <p> Benefit reason 1</p>
              </div>
              <div className="benefit">
                <h3>Benefit 2</h3>
                <p> Benefit reason 2</p>
              </div>
              <div className="benefit">
                <h3>Benefit 3</h3>
                <p> Benefit reason 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
