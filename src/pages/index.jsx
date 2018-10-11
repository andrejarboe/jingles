import React from "react";
import Layout from "../components/layout";

import "../css/index.css";

export default () => (
  <Layout>
    {/* hero */}
    <div id="hero">
      <div className="wrapper">
        <div className="hero-content">
          <div className="info">
            <h2>The BEST Jingles in your city!!!</h2>
            <p>Your slogan here</p>
            <a href="" className="main-btn">
              Request A Quote
            </a>
          </div>
          <div className="image">
            <img
              className="circle"
              src="./assets/jingleListerner.png"
              alt="Photo by rawpixel.com from Pexels"
            />
          </div>
        </div>
      </div>
    </div>

    {/* What we do */}
    <section id="what-we-do">
      <div className="wrapper">
        <div className="title">
          <h3>What We Do</h3>
        </div>
        <div className="works">
          <div className="work jingles">
            <i className="fas fa-music" />
            <h3>Jingles</h3>
            <p>We make professional jingles for companies and individuals.</p>
          </div>
          <div className="work instrumentals">
            <i className="fas fa-headphones-alt" />
            <h3>Instrumentals</h3>
            <p>High-quality instrumentals for use in film and commercials.</p>
          </div>
          <div className="work voice">
            <i className="fas fa-microphone-alt" />
            <h3>Voice Overs</h3>
            <p>Professional voiceovers for commercials, radio, and film.</p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              voluptatem cumque cum saepe exercitationem ab perspiciatis
              obcaecati maiores. Ducimus, laboriosam? Similique aliquid
              perferendis veniam sit!
            </p>
          </div>
          <div className="example example-one">
            <h3>Example two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              voluptatem cumque cum saepe exercitationem ab perspiciatis
              obcaecati maiores. Ducimus, laboriosam? Similique aliquid
              perferendis veniam sit!
            </p>
          </div>
          <div className="example example-one">
            <h3>Example three</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              voluptatem cumque cum saepe exercitationem ab perspiciatis
              obcaecati maiores. Ducimus, laboriosam? Similique aliquid
              perferendis veniam sit!
            </p>
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
              <h3>80 Million listens</h3>
              <p>We have over over 80 Million plays a year.</p>
            </div>
            <div className="benefit benefit-two">
              <h3>Big Name Artist</h3>
              <p>Benefit reason 2, lorem ipsum dolor sit.</p>
            </div>
            <div className="benefit benefit-three">
              <h3>Benefit 3</h3>
              <p>Benefit 3, Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
