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
        <div className="contact-page">
          <div className="contact-info">
            <h3>Info</h3>
            <p>phone number</p>
            <p>email</p>
            <p>hours</p>
          </div>
          <div className="contact-form">
            <h3>Request a quote</h3>
            <form action="https://formspree.io/andrejarboe@gmail.com" method="POST">
              <input type="text" name="name" placeholder="Name"/>
              <input type="email" name="email" placeholder="Email"/>
              <input type="tell" name="phone" placeholder="Phone"/>
              <input type="text" name="message" placeholder="Message"/>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const contactQuery = graphql`
  query {
    background: file(relativePath: { eq: "contactBg3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
