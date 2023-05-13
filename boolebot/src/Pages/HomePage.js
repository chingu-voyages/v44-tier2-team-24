import React from "react";
import styles from "./HomePage.module.css";
import Container from "../Components/Layout/Container";

export default function Homepage() {
  return (
    <div className={styles.main_body}>
      <Container>
        <h1 className={styles.title}>BooleBots</h1>
      </Container>
    </div>
  );
}
