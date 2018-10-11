import React, { Component } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import styled from "styled-components";

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
    </Layout>
  );
}

export const contactQuery = graphql`
  query {
    background: file(relativePath: { eq: "contactBg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
