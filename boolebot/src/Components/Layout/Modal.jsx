import React from "react";

export default function Modal({ children }) {
  return <div></div>;
}

// import { createPortal } from "react-dom";
// import styles from "./Layout.module.css";

// export default function Layout(props) {
//   const portalElement = document.getElementById("portal");
//   const layout = <div className={styles.Modal} />;
//   return (
//     <>
//       {createPortal(layout, portalElement)}
//       {createPortal(props.children, portalElement)}
//     </>
//   );
// }
