import React from "react";
// import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Container from "./Layout/Container";

export default function Footer() {
  return (
    <div className='footer'>
   
        <Link
          className='footer_link'
          href="https://github.com/chingu-voyages/v44-tier2-team-24/tree/main"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </Link>
        <ul>
          <li><Link to="/">Hector</Link></li>
          <li><Link to="/">Jack</Link></li>
          <li><Link to="/">Libby</Link></li>
          <li><Link to="/">Sucheta</Link></li>
        </ul>
       
    </div>
  );
}