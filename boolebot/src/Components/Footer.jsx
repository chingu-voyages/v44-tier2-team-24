import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/github.svg"

export default function Footer() {
  
  return (
    <div className="footer">
      <a
        aria-label="Github Icon"
        name="github_icon"
        className="github_icon"
        href="https://github.com/chingu-voyages/v44-tier2-team-24/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="github-icon" style={{width: '28px'}}  />
      </a>
      <Link to="/about" className='about_us'>About Us</Link>
      
      <ul className="footer_ul">
        <li className="github_link_personal">
          <Link
            to="https://github.com/hectorgarcia07"
            target="_blank"
            rel="noreferrer"
          >
            Hector
          </Link>
        </li>
        <li className="github_link_personal">
          <Link
            to="https://github.com/jackli921"
            target="_blank"
            rel="noreferrer"
          >
            Jack
          </Link>
        </li>
        <li className="github_link_personal">
          <Link
            to="https://github.com/libbyreeves"
            target="_blank"
            rel="noreferrer"
          >
            Libby
          </Link>
        </li>
        <li className="github_link_personal">
          <Link
            to="https://github.com/sucheta90"
            target="_blank"
            rel="noreferrer"
          >
            Sucheta
          </Link>
        </li>
      </ul>
    </div>
  );
}