import React from "react";
import { createPortal } from "react-dom";
import styles from "./Layout.module.css";

export default function Layout(props) {
  const portalElement = document.getElementById("portal");
  const layout = <div className={styles.Modal} onClick={props.hideModal} />;
  return (
    <>
      {createPortal(layout, portalElement)}
      {createPortal(props.children, portalElement)}
    </>
  );
}
