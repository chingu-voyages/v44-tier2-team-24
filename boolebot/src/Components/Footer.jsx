import React from "react";
import styles from "./Footer.module.css";
import Container from "./Layout/Container";

export default function Footer() {
  return (
    <div className={styles.footer}>
   
        <a
          className={styles.footer_link}
          href="https://github.com/chingu-voyages/v44-tier2-team-24/tree/main"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      
    </div>
  );
}
