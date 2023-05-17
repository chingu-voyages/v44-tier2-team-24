import React from "react";
import styles from "./HomePage.module.css";
import Container from "../Components/Layout/Container";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div className={styles.main_body}>
        <Container>
          {/* <img src={require("../assets/booleBotsHome.png")} /> */}

          <section className={styles.homepageBtns}>
            <Link to="/createBot">
              <button className={styles.startBtn}>Start</button>
            </Link>

            <button
              className={styles.instructionBtn}
              // onClick={() => {
               
              //   console.log("testing")
              // }}
            >
              How to play
            </button>
          </section>
        </Container>
      </div>
    </>
  );
}
