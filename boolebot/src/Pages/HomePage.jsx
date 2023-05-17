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
              onClick={() => {
               Swal.fire({
                  title: "We will explain how to play the game",
                  width: 600,
                  padding: "3em",
                  color: "#716add",
                  background:
                    "#fff url(https://sweetalert2.github.io/#iconsimages/trees.png)",
                });

               
              }}
            >
              How to play
            </button>
          </section>
        </Container>
      </div>
    </>
  );
}
