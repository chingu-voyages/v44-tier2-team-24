import React from "react";
// import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Container from "./Layout/Container";

export default function Footer() {
  return (
    <div className='footer'>
   
        <a
          className='github_icon'
          href="https://github.com/chingu-voyages/v44-tier2-team-24/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <ul className="footer_ul">
          <li className="github_link_personal"><Link to="https://github.com/hectorgarcia07">Hector</Link></li>
          <li className="github_link_personal"><Link to="https://github.com/jackli921">Jack</Link></li>
          <li className="github_link_personal"><Link to="https://github.com/libbyreeves">Libby</Link></li>
          <li className="github_link_personal"><Link to="https://github.com/sucheta90">Sucheta</Link></li>
        </ul>
       
    </div>
  );
}