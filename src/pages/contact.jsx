import React, { Component } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image"

export default function ContactPage({ data }) {


    return (
      <Layout>
        <section id="contact-hero">
          <Img fluid={data.amplifier.childImageSharp.fluid} />
          <h1>Contact</h1>
        </section>
      </Layout>
    );
  
}



export const contactQuery = graphql`
  query {
    amplifier: file(relativePath: { eq: "amplifier.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`