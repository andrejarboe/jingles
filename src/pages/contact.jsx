import React, { Component } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";

import "../css/contact.css";

export default function ContactPage({ data }) {
  return (
    <Layout>
      <section id="contact-hero">
        <div className="contact-container">
          <h1>Contact</h1>
        </div>
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
          fluid={data.background.childImageSharp.fluid}
        />
      </section>

      <section>
          <div className="contact">
            <div className="info">
                <h3>Info</h3>
            </div>
            <div className="form">
                <h3>Form</h3>
            </div>
          </div>
      </section>
    </Layout>
  );
}

export const contactQuery = graphql`
  query {
    background: file(relativePath: { eq: "contactBg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2848) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
