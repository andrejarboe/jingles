import React from "react";
import Layout from "../components/layout";

import Container from "../components/container";
import styles from "../css/index.module.css";

export default () => (
  <Layout>
    {/* hero */}
    <section className={styles.Hero}>
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
    </section>
  </Layout>
);
