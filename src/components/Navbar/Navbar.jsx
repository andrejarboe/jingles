import React, { Component } from "react";
import { Link } from "gatsby";

import Container from "../container.jsx";
import styles from "./navbar.module.css"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <Container>
        <nav>
            <Link className={styles.logo}>
              <div className="logo">JINGLES</div>
            </Link>
            <div className={styles.nav}>
            
              <ListLink to="/">Products</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/faq/">FAQ</ListLink>
              <ListLink to="/quote/">Requast a quote</ListLink>
            </div>
        </nav>
          </Container>
      </div>
    );
  }
}
