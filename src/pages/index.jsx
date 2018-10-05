import React from "react";
import Layout from "../components/layout";
import Benefits from "../components/Benefits"

import Container from "../components/container";
import styles from "../css/index.module.css";
import  "../css/index.css";

export default () => (
  <Layout>
    {/* hero */}
    {/* <section className={styles.Hero}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.info}>
            <h2>The best jingles in your City</h2>
            <p className="slogan">Your slogan here</p>
            <button className="call-to-action">Request a quote</button>
          </div>
          <div className={styles.image}>Awesome image here</div>
        </div>
      </Container>
    </section> */}

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
                <p> Benefit reason 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, recusandae.</p>
              </div>
              <div className="benefit benefit-three">
                <h3>Benefit 3</h3>
                <p>Benefit 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis repudiandae atque asperiores voluptatibus vitae.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  </Layout>
);
