import React from "react";
import Layout from "../components/layout";
import Benefits from "../components/Benefits";

import Container from "../components/container";
import styles from "../css/index.module.css";
import "../css/index.css";

export default () => (
  <Layout>
    {/* hero */}
    <section id="hero">
      <div className="wrapper">
        <div className="hero-content">
          <div className="info">
            <h2>The BEST Jingles in your city!!!</h2>
            <p>Your slogan here</p>
            <button className="call">Request a quote</button>
          </div>
          <div className="image">
            <img className="" src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""/>
          </div>
        </div>
      </div>
    </section>
 
    {/* As heard in */}
    <section id="Heard-in">
      <div className="heard wrapper">
        <div className="title">
          <h3>As Heard in</h3>
        </div>
        <div className="examples">
          <div className="example example-one">
            <h3>Example one</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem cumque cum saepe exercitationem ab perspiciatis obcaecati maiores. Ducimus, laboriosam? Similique aliquid perferendis veniam sit!</p>
          </div>
          <div className="example example-one">
            <h3>Example two</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem cumque cum saepe exercitationem ab perspiciatis obcaecati maiores. Ducimus, laboriosam? Similique aliquid perferendis veniam sit!</p>
          </div>
          <div className="example example-one">
            <h3>Example three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem cumque cum saepe exercitationem ab perspiciatis obcaecati maiores. Ducimus, laboriosam? Similique aliquid perferendis veniam sit!</p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <div className="benefits">
      <div className="row">
        <div className="wrapper">
          <div className="title">
            <h3>Benefits</h3>
          </div>
          <div className="content">
            <div className="benefit benefit-one">
              <h3>80 Million</h3>
              <p>We have over over 80 Million plays a year.</p>
            </div>
            <div className="benefit benefit-two">
              <h3>Benefit 2</h3>
              <p>
                Benefit reason 2. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Omnis, recusandae.
              </p>
            </div>
            <div className="benefit benefit-three">
              <h3>Benefit 3</h3>
              <p>
                Benefit 3. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Neque nobis repudiandae atque asperiores voluptatibus
                vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
